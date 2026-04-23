/** app.js **/
function switchTab(tabId) {
    // Hide all tabs and remove active class from buttons
    document.querySelectorAll('.tab-pane').forEach(el => {
        el.classList.remove('active');
        el.classList.remove('fade-in');
    });
    document.querySelectorAll('.tab').forEach(el => {
        el.classList.remove('active');
    });

    // Find clicked tab logic
    const mappedId = 'tab-' + tabId;
    const targetPane = document.getElementById(mappedId);
    if (targetPane) {
        targetPane.classList.add('active');
        // trigger reflow
        void targetPane.offsetWidth;
        targetPane.classList.add('fade-in');
    }
    
    // Set active button
    const btn = document.querySelector(`button[onclick="switchTab('${tabId}')"]`);
    if (btn) {
        btn.classList.add('active');
    }
}
