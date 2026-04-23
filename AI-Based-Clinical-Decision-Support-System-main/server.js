const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Import mock data
const { CATEGORIES } = require('./data/mockData');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.redirect('/login');
});

// Authentication Routes
app.get('/login', (req, res) => {
    res.render('auth/login');
});

app.post('/login', (req, res) => {
    // Demo login handling
    const { email, password, role } = req.body;
    if (email && password && role) {
        if (role === 'Patient') {
            return res.redirect('/dashboard/patient');
        } else if (role === 'Doctor') {
            return res.redirect('/dashboard/doctor');
        } else if (role === 'Admin') {
            return res.redirect('/dashboard/admin');
        }
    }
    // Simple error redirect
    res.redirect('/login?error=true');
});

app.get('/signup', (req, res) => {
    res.render('auth/signup');
});

// Dashboard Routes
app.get('/dashboard/patient', (req, res) => {
    const view = req.query.view || 'main'; // main, category, module
    const catCode = req.query.category;
    const moduleCode = req.query.module;

    let selectedCategory = null;
    if (catCode && CATEGORIES[catCode]) {
        selectedCategory = CATEGORIES[catCode];
        selectedCategory.id = catCode;
    }

    let selectedModule = null;
    if (selectedCategory && moduleCode) {
        selectedModule = selectedCategory.modules.find(m => m[0] === moduleCode);
    }

    res.render('dashboards/patient', {
        categories: CATEGORIES,
        view,
        selectedCategory,
        selectedModule,
        catCode
    });
});

app.get('/dashboard/doctor', (req, res) => {
    res.render('dashboards/doctor');
});

app.get('/dashboard/admin', (req, res) => {
    res.render('dashboards/admin');
});

// Start server
app.listen(port, () => {
    console.log(`MediCare backend listening at http://localhost:${port}`);
});
