/* Base Styles */
:root {
    --primary: #7C3AED;
    --secondary: #00C4A7;
    --background: #0F172A;
    --surface: #1E293B;
    --border: #334155;
    --gradient: linear-gradient(135deg, var(--primary), var(--secondary));
}

body {
    background-color: var(--background);
    color: white;
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(15, 15, 15, 0.6);
    backdrop-filter: blur(24px);
    z-index: 1000;
    border-bottom: 1px solid var(--border);
    padding: 1.5rem 0;
}

.brand {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: var(--primary);
}

.nav-cta {
    background: var(--gradient);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.nav-cta:hover {
    transform: translateY(-2px);
}

/* Hero Section */
.hero {
    padding: 160px 0 80px;
    position: relative;
    overflow: hidden;
}

.hero-title {
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 2rem;
    background: linear-gradient(120deg, white 30%, var(--primary));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
}

/* Chat Preview */
.chat-preview {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 1.5rem;
    padding: 2rem;
    max-width: 720px;
    margin-top: 3rem;
    position: relative;
    backdrop-filter: blur(20px);
}

.message {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.ai-message .bubble {
    background: var(--surface);
    border: 1px solid var(--border);
    position: relative;
    padding: 1.5rem;
    border-radius: 1rem 1rem 1rem 0;
}

.user-message .bubble {
    background: var(--primary);
    color: white;
    border-radius: 1rem 1rem 0 1rem;
    margin-left: auto;
    max-width: 80%;
}

.typing-indicator {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.typing-indicator .dot {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: typing 1.4s infinite;
}

@keyframes typing {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
}

/* Waitlist Form */
.waitlist-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 2rem;
    padding: 4rem;
    margin: 4rem 0;
    position: relative;
    overflow: hidden;
}

.waitlist-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
    opacity: 0.1;
    pointer-events: none;
}

.input-group {
    position: relative;
    margin-bottom: 2rem;
}

.input-group input,
.input-group select,
.input-group textarea {
    width: 100%;
    padding: 1.2rem;
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    color: white;
    font-size: 1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.input-group label {
    position: absolute;
    left: 1.2rem;
    top: 1rem;
    padding: 0 0.5rem;
    background: var(--background);
    color: hsl(240, 5%, 50%);
    transition: all 0.3s ease;
    pointer-events: none;
}

.input-group input:focus ~ label,
.input-group input:valid ~ label,
.input-group textarea:focus ~ label,
.input-group textarea:valid ~ label {
    transform: translateY(-1.5rem);
    font-size: 0.875rem;
    color: var(--primary);
}

.submit-btn {
    background: var(--gradient);
    color: white;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    transition: transform 0.3s ease;
}

.submit-btn:hover {
    transform: translateY(-2px);
}