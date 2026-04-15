// main.js - Main JavaScript functionality for Namma Krishi Portal

// Password visibility toggle (works for any password field)
function toggleVisibility(inputId) {
    const input = document.getElementById(inputId);
    const eyeIcon = document.getElementById('eye-' + inputId);
    const eyeOffIcon = document.getElementById('eye-off-' + inputId);

    if (input && input.type === 'password') {
        input.type = 'text';
        if (eyeIcon) eyeIcon.style.display = 'none';
        if (eyeOffIcon) eyeOffIcon.style.display = 'block';
    } else if (input) {
        input.type = 'password';
        if (eyeIcon) eyeIcon.style.display = 'block';
        if (eyeOffIcon) eyeOffIcon.style.display = 'none';
    }
}

// Password validation logic
function showRequirements(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
}

function hideRequirements(id) {
    // Keep it visible for a moment so user can see it's all valid
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el && !document.activeElement.closest('.password-wrapper')) {
            el.classList.remove('active');
        }
    }, 1000);
}

function validatePassword(password, requirementsId) {
    const container = document.getElementById(requirementsId);
    if (!container) return;

    const isReset = requirementsId === 'reset-pw-requirements';
    const reqs = isReset ? {
        capital: /(?=.*[A-Z])/,
        lowercase: /(?=.*[a-z])/,
        number: /(?=.*\d)/,
        special: /(?=.*[@$!%*?&])/,
        length: /(?=.{8,})/
    } : {
        capital: /(?=.*[A-Z])/,
        lowercase: /(?=.*[a-z])/,
        number: /(?=.*\d)/,
        special: /(?=.*[@$!%*?&])/,
        length: /(?=.{8,})/
    };

    Object.keys(reqs).forEach(key => {
        const reqEl = container.querySelector(`#req-${key}`);
        if (reqEl) {
            const isValid = reqs[key].test(password);
            reqEl.classList.toggle('valid', isValid);
            reqEl.classList.toggle('invalid', !isValid && password.length > 0);
        }
    });
}

// Password reset modal functions
function showResetModal(event) {
    event.preventDefault();
    const modal = document.getElementById('resetModal');
    if (modal) modal.style.display = 'block';
}

function closeResetModal() {
    const modal = document.getElementById('resetModal');
    if (modal) modal.style.display = 'none';
    // Reset form
    const form = document.getElementById('resetForm');
    if (form) form.reset();
    // Hide OTP section
    const otpSection = document.getElementById('otpSection');
    if (otpSection) otpSection.style.display = 'none';
    // Hide new password section
    const newPwSection = document.getElementById('newPasswordSection');
    if (newPwSection) newPwSection.style.display = 'none';
}

// OTP functions
function sendOTP(event) {
    event.preventDefault();
    requestOTP();
}

function requestOTP() {
    const contactInput = document.getElementById('resetContact');
    const contact = contactInput ? contactInput.value.trim() : '';

    if (!contact) {
        alert('Please enter your email or phone number.');
        return;
    }

    // Basic validation
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const isPhone = /^\d{10}$/.test(contact.replace(/\D/g, ''));

    if (!isEmail && !isPhone) {
        alert('Please enter a valid email address or 10-digit phone number.');
        return;
    }

    // Show loading state
    const btn = document.querySelector('#resetModal .submit-btn');
    if (btn) {
        btn.innerHTML = 'Sending...';
        btn.disabled = true;
    }

    // Simulate API call (replace with actual API)
    setTimeout(() => {
        // Reset button
        if (btn) {
            btn.innerHTML = 'Send OTP';
            btn.disabled = false;
        }

        // Show OTP section
        const otpSection = document.getElementById('otpSection');
        if (otpSection) otpSection.style.display = 'block';

        alert('OTP sent successfully! (This is a demo - check console for OTP: 123456)');
        console.log('Demo OTP: 123456');
    }, 2000);
}

function verifyOTP() {
    const otpInput = document.getElementById('resetOTP');
    const otp = otpInput ? otpInput.value.trim() : '';

    if (!otp || otp.length !== 6) {
        alert('Please enter a valid 6-digit OTP.');
        return;
    }

    // Demo verification (replace with actual API)
    if (otp === '123456') {
        // Show new password section
        const newPwSection = document.getElementById('newPasswordSection');
        if (newPwSection) newPwSection.style.display = 'block';

        // Hide OTP section
        const otpSection = document.getElementById('otpSection');
        if (otpSection) otpSection.style.display = 'none';

        alert('OTP verified successfully!');
    } else {
        alert('Invalid OTP. Please try again.');
    }
}

function resetPassword() {
    const newPw = document.getElementById('newPassword');
    const confirmPw = document.getElementById('confirmPassword');

    if (!newPw || !confirmPw) return;

    const password = newPw.value;
    const confirm = confirmPw.value;

    if (!password || password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    if (password !== confirm) {
        alert('Passwords do not match.');
        return;
    }

    // Demo password reset (replace with actual API)
    alert('Password reset successful! You can now log in with your new password.');
    closeResetModal();
}

// Disease detection functions
function analyzeDisease() {
    if (!base64Image) {
        alert('Please select an image first.');
        return;
    }

    const analyzeBtn = document.getElementById('analyzeBtn');
    const scanLoader = document.getElementById('scanLoader');
    const resultsCard = document.getElementById('resultsCard');

    if (analyzeBtn) analyzeBtn.disabled = true;
    if (scanLoader) scanLoader.style.display = 'flex';
    if (resultsCard) resultsCard.style.display = 'none';

    // Simulate API call to disease detection service
    fetch(HF_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image: base64Image,
            mime_type: imageMime
        })
    })
    .then(response => response.json())
    .then(data => {
        displayResults(data);
    })
    .catch(error => {
        console.error('Error:', error);
        // Demo fallback data
        const demoData = {
            disease: "Leaf Blight",
            confidence: 0.85,
            severity: "Moderate",
            symptoms: ["Brown spots on leaves", "Yellowing edges", "Leaf curling"],
            causes: ["Fungal infection", "High humidity", "Poor air circulation"],
            solutions: ["Remove affected leaves", "Apply fungicide", "Improve ventilation"],
            medicines: ["Copper-based fungicide", "Neem oil spray"],
            prevention: ["Proper spacing", "Avoid overhead watering", "Regular pruning"]
        };
        displayResults(demoData);
    });
}

function displayResults(data) {
    const scanLoader = document.getElementById('scanLoader');
    const resultsCard = document.getElementById('resultsCard');
    const analyzeBtn = document.getElementById('analyzeBtn');

    if (scanLoader) scanLoader.style.display = 'none';
    if (resultsCard) resultsCard.style.display = 'block';
    if (analyzeBtn) analyzeBtn.disabled = false;

    // Update disease name
    const diseaseNameEl = document.getElementById('diseaseName');
    if (diseaseNameEl) diseaseNameEl.textContent = data.disease || 'Unknown Disease';

    // Update confidence
    const confidenceEl = document.getElementById('confidence');
    if (confidenceEl) confidenceEl.textContent = data.confidence ? `${(data.confidence * 100).toFixed(1)}%` : 'N/A';

    // Update severity
    const severityEl = document.getElementById('severity');
    const severityBar = document.getElementById('severityBar');
    if (severityEl && severityBar) {
        severityEl.textContent = data.severity || 'Unknown';
        const severityPercent = getSeverityPercent(data.severity);
        severityBar.style.width = `${severityPercent}%`;
        severityBar.className = `severity-fill ${getSeverityClass(data.severity)}`;
    }

    // Update symptoms
    const symptomsEl = document.getElementById('symptoms');
    if (symptomsEl && data.symptoms) {
        symptomsEl.innerHTML = data.symptoms.map(symptom => `<li>${symptom}</li>`).join('');
    }

    // Update causes
    const causesEl = document.getElementById('causes');
    if (causesEl && data.causes) {
        causesEl.innerHTML = data.causes.map(cause => `<li>${cause}</li>`).join('');
    }

    // Update solutions
    const solutionsEl = document.getElementById('solutions');
    if (solutionsEl && data.solutions) {
        solutionsEl.innerHTML = data.solutions.map(solution => `<li>${solution}</li>`).join('');
    }

    // Update medicines
    const medicinesEl = document.getElementById('medicines');
    if (medicinesEl && data.medicines) {
        medicinesEl.innerHTML = data.medicines.map(medicine => `<li>${medicine}</li>`).join('');
    }

    // Update prevention
    const preventionEl = document.getElementById('prevention');
    if (preventionEl && data.prevention) {
        preventionEl.innerHTML = data.prevention.map(item => `<li>${item}</li>`).join('');
    }

    // Prepare text for speech
    currentSpeechText = `Disease detected: ${data.disease || 'Unknown'}.
    Confidence: ${data.confidence ? (data.confidence * 100).toFixed(1) : 'N/A'} percent.
    Severity: ${data.severity || 'Unknown'}.
    Symptoms: ${data.symptoms ? data.symptoms.join(', ') : 'Not available'}.
    Causes: ${data.causes ? data.causes.join(', ') : 'Not available'}.
    Solutions: ${data.solutions ? data.solutions.join(', ') : 'Not available'}.
    Recommended medicines: ${data.medicines ? data.medicines.join(', ') : 'Not available'}.
    Prevention: ${data.prevention ? data.prevention.join(', ') : 'Not available'}.`;

    // Show speak button
    const btnSpeak = document.getElementById('btnSpeak');
    if (btnSpeak) btnSpeak.style.display = 'inline-block';
}

function getSeverityPercent(severity) {
    const severityMap = {
        'Low': 25,
        'Mild': 40,
        'Moderate': 60,
        'High': 80,
        'Severe': 95
    };
    return severityMap[severity] || 50;
}

function getSeverityClass(severity) {
    const classMap = {
        'Low': 'low',
        'Mild': 'mild',
        'Moderate': 'moderate',
        'High': 'high',
        'Severe': 'severe'
    };
    return classMap[severity] || 'moderate';
}

// Speech synthesis functions
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;
let currentSpeechText = "";

function speakResult() {
    if (!currentSpeechText) return;

    // Stop any current speech
    stopSpeech();

    const btnSpeak = document.getElementById('btnSpeak');
    const btnStop = document.getElementById('btnStop');

    currentUtterance = new SpeechSynthesisUtterance(currentSpeechText);

    // Set language based on current selection
    const currentLang = localStorage.getItem('preferredLang') || 'en';
    currentUtterance.lang = currentLang === 'kn' ? 'kn-IN' : 'en-US';

    currentUtterance.onstart = () => {
        if (btnSpeak) btnSpeak.style.display = 'none';
        if (btnStop) btnStop.style.display = 'inline-block';
    };

    currentUtterance.onend = () => {
        if (btnSpeak) btnSpeak.style.display = 'inline-block';
        if (btnStop) btnStop.style.display = 'none';
        currentUtterance = null;
    };

    currentUtterance.onerror = () => {
        if (btnSpeak) btnSpeak.style.display = 'inline-block';
        if (btnStop) btnStop.style.display = 'none';
        currentUtterance = null;
    };

    speechSynthesis.speak(currentUtterance);
}

function stopSpeech() {
    if (speechSynthesis) {
        speechSynthesis.cancel();
    }

    const btnSpeak = document.getElementById('btnSpeak');
    const btnStop = document.getElementById('btnStop');

    if (btnSpeak) btnSpeak.style.display = 'inline-block';
    if (btnStop) btnStop.style.display = 'none';

    currentUtterance = null;
}

// Sound.html specific functions
function switchLanguage(lang) {
    setLanguage(lang);
}

function detectDisease() {
    // This would integrate with speech recognition for voice-based disease detection
    alert('Voice-based disease detection is not implemented yet. Please use the image upload feature.');
}

// Modal close on outside click
window.onclick = function(event) {
    const modal = document.getElementById('resetModal');
    if (event.target === modal) {
        closeResetModal();
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Any initialization code here
    console.log('Namma Krishi Portal JavaScript loaded');
});