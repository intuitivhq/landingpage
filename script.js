// Smooth scroll and form handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Google Sheets Integration
const scriptURL = 'YOUR_APPS_SCRIPT_URL';
const form = document.getElementById('waitlist-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            showSuccessToast();
            form.reset();
        })
        .catch(error => showErrorToast());
});

function showSuccessToast() {
    const toast = document.createElement('div');
    toast.className = 'toast success';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Access request submitted successfully</span>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 3000);
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.waitlist-card, .chat-preview').forEach(el => observer.observe(el));