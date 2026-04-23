const CATEGORIES = {
    "A - Patient Clinical Data": {
        "title": "Patient Clinical Data Management",
        "description": "Manage patient records, medical history, diagnoses, and treatment plans",
        "icon": "🏥",
        "stats": { "total": "153,600", "alerts": "12", "modules": "6" },
        "modules": [
            ["A1", "Patient Demographics & Visit History Database", "Patient demographics and admission data", 5, 12500],
            ["A2", "Chronic Disease Patient Record Management", "Past medical records and conditions", 4, 8900],
            ["A3", "Pediatric Patient Clinical Data System", "ICD codes and diagnosis tracking", 3, 15600],
            ["A4", "Geriatric Patient Health Record Database", "Care plans and treatment", 6, 7800],
            ["A5", "Patient Allergy & Immunization Tracking System", "Patient vitals and monitoring", 4, 9200],
            ["A6", "Clinical Alert System for Abnormal Vital Values", "Doctor notes and observations", 5, 11400]
        ]
    },
    "B - Symptom-Disease Diagnosis": {
        "title": "Symptom-Disease Diagnosis Support",
        "description": "AI-powered symptom analysis and disease diagnosis support systems",
        "icon": "🔬",
        "stats": { "total": "89,400", "alerts": "8", "modules": "6" },
        "modules": [
            ["B1", "Symptom-Disease Mapping Database", "Comprehensive symptom database", 8, 25000],
            ["B2", "Fever-Based Differential Diagnosis System", "Fever pattern analysis", 4, 12000],
            ["B3", "Respiratory Symptom Diagnosis Database", "Respiratory condition database", 6, 15400],
            ["B4", "Gastrointestinal Disorder Diagnosis Support", "GI symptom analysis", 5, 10800],
            ["B5", "Neurological Symptom Analysis Database", "Neural condition tracking", 7, 14200],
            ["B6", "Rule-Based Disease Ranking System", "Disease probability system", 3, 12000]
        ]
    },
    "C - Clinical Query Copilot": {
        "title": "Clinical Query Copilot (NL to SQL)",
        "description": "Natural language interface for clinical database queries",
        "icon": "💬",
        "stats": { "total": "45,200", "alerts": "5", "modules": "6" },
        "modules": [
            ["C1", "Natural Language Patient Search System", "Voice and text patient search", 4, 8500],
            ["C2", "Clinical Query Translator for Laboratory Records", "Lab record queries", 5, 9200],
            ["C3", "Voice-Assisted Clinical Query System (Text Simulation)", "Text simulation queries", 3, 6800],
            ["C4", "Doctor-Friendly SQL Query Dashboard", "Visual query builder", 6, 7400],
            ["C5", "Smart Clinical Views using SQL", "Pre-built SQL views", 4, 8100],
            ["C6", "Question-Answering System for Hospital Database", "Hospital database QA", 3, 5200]
        ]
    },
    "D - Drug & Prescription Safety": {
        "title": "Drug & Prescription Safety Systems",
        "description": "Medication safety, interaction alerts, and prescription validation",
        "icon": "💊",
        "stats": { "total": "67,800", "alerts": "15", "modules": "6" },
        "modules": [
            ["D1", "Drug-Drug Interaction Alert Database", "Interaction database", 7, 18500],
            ["D2", "Prescription Validation & Consistency System", "Consistency checks", 5, 12300],
            ["D3", "Allergy-Aware Medication Alert System", "Allergy cross-reference", 4, 9800],
            ["D4", "Polypharmacy Risk Detection Database", "Multiple drug analysis", 6, 11200],
            ["D5", "High-Risk Drug Monitoring System", "Critical medication tracking", 5, 8700],
            ["D6", "Automated Prescription Audit System", "Prescription review system", 4, 7300]
        ]
    },
    "E - ICU & Real-Time Monitoring": {
        "title": "ICU & Real-Time Monitoring Databases",
        "description": "Critical care monitoring and real-time vital sign tracking",
        "icon": "📊",
        "stats": { "total": "34,500", "alerts": "23", "modules": "6" },
        "modules": [
            ["E1", "ICU Vital Signs Monitoring Database", "Real-time vitals tracking", 8, 8900],
            ["E2", "Emergency Room Patient Alert System", "ER alert system", 5, 6200],
            ["E3", "Cardiac ICU Monitoring Database", "Heart monitoring database", 6, 5800],
            ["E4", "Neonatal ICU Monitoring System", "Newborn care tracking", 7, 4100],
            ["E5", "Threshold-Based Clinical Alert Database", "Alert threshold system", 4, 5300],
            ["E6", "Time-Series Patient Health Data System", "Historical health trends", 5, 4200]
        ]
    },
    "F - Case-Based Decision Support": {
        "title": "Case-Based Clinical Decision Support",
        "description": "Historical case analysis and treatment outcome evaluation",
        "icon": "📋",
        "stats": { "total": "52,100", "alerts": "6", "modules": "6" },
        "modules": [
            ["F1", "Historical Case Comparison Database", "Case matching database", 6, 12400],
            ["F2", "Treatment Outcome Analysis System", "Outcome tracking system", 5, 9800],
            ["F3", "Disease Progression Case Repository", "Progression tracking", 7, 8900],
            ["F4", "Readmission Risk Analysis Database", "Readmission prediction", 4, 7600],
            ["F5", "Therapy Effectiveness Evaluation System", "Treatment efficacy", 5, 6700],
            ["F6", "Similar Patient Case Retrieval System", "Patient matching system", 6, 6700]
        ]
    },
    "G - Secure EHR & Access Control": {
        "title": "Secure EHR & Access Control Systems",
        "description": "Electronic health records security and role-based access management",
        "icon": "🔒",
        "stats": { "total": "156,300", "alerts": "3", "modules": "6" },
        "modules": [
            ["G1", "Secure Electronic Health Record (EHR) Database", "Main EHR database", 12, 45000],
            ["G2", "Role-Based Access Control for Hospital Systems", "Permission management", 8, 28900],
            ["G3", "Clinical Audit Trail & Logging System", "Activity logging system", 6, 32100],
            ["G4", "Patient Consent & Data Privacy Database", "Privacy management", 5, 18700],
            ["G5", "Multi-Role Access Control System", "Advanced permissions", 7, 19200],
            ["G6", "Secure Clinical Summary View Generator", "Summary views", 4, 12400]
        ]
    },
    "H - Laboratory Test Interpretation": {
        "title": "Laboratory Test Interpretation Systems",
        "description": "Lab test management, result interpretation, and critical value alerts",
        "icon": "🧪",
        "stats": { "total": "78,900", "alerts": "11", "modules": "6" },
        "modules": [
            ["H1", "Laboratory Test Management Database", "Test ordering system", 9, 22300],
            ["H2", "Automated Lab Result Interpretation System", "AI result analysis", 6, 15800],
            ["H3", "Reference Range Validation Database", "Normal range database", 4, 12400],
            ["H4", "Follow-Up Test Recommendation System", "Test suggestion system", 5, 9100],
            ["H5", "Pathology Report Management Database", "Pathology database", 7, 11200],
            ["H6", "Critical Lab Value Alert System", "Critical value alerts", 3, 8100]
        ]
    },
    "I - Integrated Capstone Projects": {
        "title": "Integrated Capstone-Style Mini Projects",
        "description": "Comprehensive integrated clinical decision support systems",
        "icon": "🎯",
        "stats": { "total": "125,600", "alerts": "9", "modules": "2" },
        "modules": [
            ["I1", "Integrated Clinical Decision Support Database (Patients, Symptoms, Drugs, Labs)", "Full CDSS with patients, symptoms, drugs, labs", 25, 78900],
            ["I2", "AI-Inspired Medical Copilot using DBMS Concept", "AI copilot using DBMS concepts", 18, 46700]
        ]
    }
};

module.exports = { CATEGORIES };
