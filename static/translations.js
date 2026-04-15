const translations = {
    en: {
        common: {
            lang_en: "English",
            lang_kn: "ಕನ್ನಡ",
            back: "Back",
            continue: "Continue"
        },
        index: {
            title: "Namma Krishi",
            subtitle: "Karnataka Crop & Disease Management Portal",
            name: "Full Name",
            username: "Username",
            email: "Email Address",
            phone: "Phone Number",
            password: "Password",
            confirm: "Confirm Password",
            gender: "Gender",
            male: "Male",
            female: "Female",
            others: "Others",
            register: "Register Now",
            has_account: "Already have an account? Log in"
        },
        login: {
            title: "Welcome Back",
            subtitle: "Login to Namma Krishi Portal",
            username: "Username",
            password: "Password",
            forgot: "Forgot password?",
            login: "Log In",
            no_account: "Don't have an account? Register"
        },
        district: {
            title: "Welcome",
            subtitle: "Please select your district to proceed",
            district: "District",
            placeholder: "Select from all 31 districts",
            continue: "Continue",
            bagalkot: "Bagalkot",
            ballari: "Ballari (Bellary)",
            belagavi: "Belagavi (Belgaum)",
            "bengaluru-rural": "Bengaluru Rural",
            "bengaluru-urban": "Bengaluru Urban",
            bidar: "Bidar",
            chamarajanagar: "Chamarajanagar",
            chikkaballapur: "Chikkaballapur",
            chikkamagaluru: "Chikkamagaluru",
            chitradurga: "Chitradurga",
            "dakshina-kannada": "Dakshina Kannada",
            davanagere: "Davanagere",
            dharwad: "Dharwad",
            gadag: "Gadag",
            hassan: "Hassan",
            haveri: "Haveri",
            kalaburagi: "Kalaburagi (Gulbarga)",
            kodagu: "Kodagu",
            kolar: "Kolar",
            koppal: "Koppal",
            mandya: "Mandya",
            mysuru: "Mysuru (Mysore)",
            raichur: "Raichur",
            ramanagara: "Ramanagara",
            shivamogga: "Shivamogga (Shimoga)",
            tumakuru: "Tumakuru (Tumkur)",
            udupi: "Udupi",
            "uttara-kannada": "Uttara Kannada",
            vijayanagara: "Vijayanagara",
            vijayapura: "Vijayapura (Bijapur)",
            yadgir: "Yadgir"
        },
        crops: {
            title: "Major Crops",
            subtitle: "Real-time insights for your region",
            weather: "Current Weather",
            soil: "Soil Composition",
            back: "Back to District Selection"
        },
        disease: {
            loading: "AI is analyzing plant diseases...",
            symptoms: "Symptoms",
            causes: "Causes",
            solutions: "Possible Solutions",
            back_crops: "Back to Crops",
            new_district: "Select New District"
        },
        detect: {
            title: "AI Disease Detection",
            subtitle: "Upload a photo of your plant and let AI identify the disease instantly",
            upload_title: "Click or drag a photo here",
            upload_sub: "Supports JPG, PNG, WEBP — Max 10MB",
            analyze_btn: "🔬 Analyze Disease",
            scanning: "AI is scanning your plant image...",
            severity: "Severity:",
            symptoms: "Symptoms",
            causes: "Causes",
            solution: "Treatment & Solution",
            prevention: "Prevention",
            medicines: "Recommended Medicines / Pesticides",
            try_another: "🔄 Try Another Image",
            back_crops: "← Back to Crops",
            banner_title: "AI Disease Detection",
            banner_desc: "Upload a photo of your plant and get instant disease diagnosis, treatment advice, and recommended medicines.",
            banner_btn: "🔬 Detect Disease Now"
        },
        reset: {
            title: "Reset Password",
            instructions: "Please enter the characters from the image below to verify your identity.",
            label: "Enter CAPTCHA",
            placeholder: "Type here...",
            btn: "Verify & Reset",
            success: "CAPTCHA Verified! Redirecting to set new password...",
            fail: "Incorrect CAPTCHA. Please try again.",
            contact_label: "Email Address or Phone Number",
            contact_placeholder: "email@example.com or 9876543210",
            contact_help: "📧 Email → OTP to inbox | 📱 Phone → OTP via SMS",
            contact_required: "Please enter your email or phone number.",
            contact_invalid: "Please enter a valid email address or 10-digit phone number.",
            email_label: "Email Address",
            email_placeholder: "example@mail.com",
            send_otp: "Send OTP",
            sending: "Sending...",
            resetting: "Resetting...",
            otp_label: "Enter 6-Digit OTP",
            otp_sent: "OTP sent to your email.",
            otp_sent_sms: "OTP sent to your phone via SMS.",
            otp_invalid: "Invalid or expired OTP. Please try again.",
            verify_next: "Verify & Next",
            resend: "Resend OTP",
            new_pw: "New Password",
            confirm_pw: "Confirm Password",
            reset_btn: "Reset Password",
            reset_success: "Password reset successful! You can now log in.",
            otp_instructions: "Enter your registered email address or phone number to receive a 6-digit OTP.",
            new_pw_instructions: "Verification successful! Please enter your new password below."
        },
        crop_names: {
            "Sugarcane": "Sugarcane",
            "Jowar": "Jowar",
            "Maize": "Maize",
            "Groundnut": "Groundnut",
            "Paddy": "Paddy",
            "Cotton": "Cotton",
            "Sunflower": "Sunflower",
            "Tobacco": "Tobacco",
            "Ragi": "Ragi",
            "Grapes": "Grapes",
            "Mango": "Mango",
            "Vegetables": "Vegetables",
            "Flowers": "Flowers",
            "Fruits": "Fruits",
            "Bengal Gram": "Bengal Gram",
            "Red Gram": "Red Gram",
            "Soyabean": "Soyabean",
            "Turmeric": "Turmeric",
            "Banana": "Banana",
            "Silk/Mulberry": "Silk/Mulberry",
            "Coffee": "Coffee",
            "Arecanut": "Arecanut",
            "Pepper": "Pepper",
            "Onion": "Onion",
            "Rubber": "Rubber",
            "Wheat": "Wheat",
            "Chilli": "Chilli",
            "Potato": "Potato",
            "Cardamom": "Cardamom",
            "Bajra": "Bajra",
            "Spices": "Spices",
            "Pomegranate": "Pomegranate",
            "Tomato": "Tomato",
            "Cashew": "Cashew"
        }
    },
    kn: {
        common: {
            lang_en: "English",
            lang_kn: "ಕನ್ನಡ",
            back: "ಹಿಂದಕ್ಕೆ",
            continue: "ಮುಂದುವರಿಸಿ"
        },
        index: {
            title: "ನಮ್ಮ ಕೃಷಿ",
            subtitle: "ಕರ್ನಾಟಕ ಬೆಳೆ ಮತ್ತು ರೋಗ ನಿರ್ವಹಣಾ ಪೋರ್ಟಲ್",
            name: "ಪೂರ್ಣ ಹೆಸರು",
            username: "ಬಳಕೆದಾರಹೆಸರು",
            email: "ಇಮೇಲ್ ವಿಳಾಸ",
            phone: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
            password: "ಪಾಸ್‌ವರ್ಡ್",
            confirm: "ಪಾಸ್‌ವರ್ಡ್ ಖಚಿತಪಡಿಸಿ",
            gender: "ಲಿಂಗ",
            male: "ಪುರುಷ",
            female: "ಮಹಿಳೆ",
            others: "ಇತರರು",
            register: "ಈಗಲೇ ನೋಂದಾಯಿಸಿ",
            has_account: "ಈಗಾಗಲೇ ಖಾತೆ ಹೊಂದಿದ್ದೀರಾ? ಲಾಗಿನ್ ಮಾಡಿ"
        },
        login: {
            title: "ಮತ್ತೆ ಸ್ವಾಗತ",
            subtitle: "ನಮ್ಮ ಕೃಷಿ ಪೋರ್ಟಲ್‌ಗೆ ಲಾಗಿನ್ ಮಾಡಿ",
            username: "ಬಳಕೆದಾರಹೆಸರು",
            password: "ಪಾಸ್‌ವರ್ಡ್",
            forgot: "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿದ್ದೀರಾ?",
            login: "ಲಾಗಿನ್",
            no_account: "ಖಾತೆ ಹೊಂದಿಲ್ಲವೇ? ನೋಂದಾಯಿಸಿ"
        },
        district: {
            title: "ಸ್ವಾಗತ",
            subtitle: "ಮುಂದುವರಿಯಲು ದಯವಿಟ್ಟು ನಿಮ್ಮ ಜಿಲ್ಲೆಯನ್ನು ಆರಿಸಿ",
            district: "ಜಿಲ್ಲೆ",
            placeholder: "ಎಲ್ಲಾ 31 ಜಿಲ್ಲೆಗಳಿಂದ ಆರಿಸಿ",
            continue: "ಮುಂದುವರಿಸಿ",
            bagalkot: "ಬಾಗಲಕೋಟೆ",
            ballari: "ಬಳ್ಳಾರಿ",
            belagavi: "ಬೆಳಗಾವಿ",
            "bengaluru-rural": "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ",
            "bengaluru-urban": "ಬೆಂಗಳೂರು ನಗರ",
            bidar: "ಬೀದರ್",
            chamarajanagar: "ಚಾಮರಾಜನಗರ",
            chikkaballapur: "ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
            chikkamagaluru: "ಚಿಕ್ಕಮಗಳೂರು",
            chitradurga: "ಚಿತ್ರದುರ್ಗ",
            "dakshina-kannada": "ದಕ್ಷಿಣ ಕನ್ನಡ",
            davanagere: "ದಾವಣಗೆರೆ",
            dharwad: "ಧಾರವಾಡ",
            gadag: "ಗದಗ",
            hassan: "ಹಾಸನ",
            haveri: "ಹಾವೇರಿ",
            kalaburagi: "ಕಲಬುರಗಿ",
            kodagu: "ಕೊಡಗು",
            kolar: "ಕೋಲಾರ",
            koppal: "ಕೊಪ್ಪಳ",
            mandya: "ಮಂಡ್ಯ",
            mysuru: "ಮೈಸೂರು",
            raichur: "ರಾಯಚೂರು",
            ramanagara: "ರಾಮನಗರ",
            shivamogga: "ಶಿವಮೊಗ್ಗ",
            tumakuru: "ತುಮಕೂರು",
            udupi: "ಉಡುಪಿ",
            "uttara-kannada": "ಉತ್ತರ ಕನ್ನಡ",
            vijayanagara: "ವಿಜಯನಗರ",
            vijayapura: "ವಿಜಯಪುರ",
            yadgir: "ಯಾದಗಿರಿ"
        },
        crops: {
            title: "ಪ್ರಮುಖ ಬೆಳೆಗಳು",
            subtitle: "ನಿಮ್ಮ ಪ್ರದೇಶದ ನೈಜ-ಸಮಯದ ಒಳನೋಟಗಳು",
            weather: "ಪ್ರಸ್ತುತ ಹವಾಮಾನ",
            soil: "ಮಣ್ಣಿನ ಸಂಯೋಜನೆ",
            back: "ಜಿಲ್ಲಾ ಆಯ್ಕೆಗೆ ಹಿಂದಿರುಗಿ"
        },
        disease: {
            loading: "AI ಸಸ್ಯ ರೋಗಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತಿದೆ...",
            symptoms: "ಲಕ್ಷಣಗಳು",
            causes: "ಕಾರಣಗಳು",
            solutions: "ಸಾಧ್ಯವಿರುವ ಪರಿಹಾರಗಳು",
            back_crops: "ಬೆಳೆಗಳಿಗೆ ಹಿಂದಿರುಗಿ",
            new_district: "ಹೊಸ ಜಿಲ್ಲೆಯನ್ನು ಆರಿಸಿ"
        },
        detect: {
            title: "AI ರೋಗ ಪತ್ತೆ",
            subtitle: "ನಿಮ್ಮ ಸಸ್ಯದ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು AI ತಕ್ಷಣ ರೋಗ ಗುರುತಿಸಲಿ",
            upload_title: "ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ಫೋಟೋ ಎಳೆದು ತನ್ನಿ",
            upload_sub: "JPG, PNG, WEBP ಬೆಂಬಲಿಸುತ್ತಿದೆ — ಗರಿಷ್ಠ 10MB",
            analyze_btn: "🔬 ರೋಗ ವಿಶ್ಲೇಷಿಸಿ",
            scanning: "AI ನಿಮ್ಮ ಸಸ್ಯದ ಚಿತ್ರ ಸ್ಕ್ಯಾನ್ ಮಾಡುತ್ತಿದೆ...",
            severity: "ತೀವ್ರತೆ:",
            symptoms: "ಲಕ್ಷಣಗಳು",
            causes: "ಕಾರಣಗಳು",
            solution: "ಚಿಕಿತ್ಸೆ ಮತ್ತು ಪರಿಹಾರ",
            prevention: "ತಡೆಗಟ್ಟುವಿಕೆ",
            medicines: "ಶಿಫಾರಸು ಮಾಡಿದ ಔಷಧಿ / ಕೀಟನಾಶಕ",
            try_another: "🔄 ಮತ್ತೊಂದು ಚಿತ್ರ ಪ್ರಯತ್ನಿಸಿ",
            back_crops: "← ಬೆಳೆಗಳಿಗೆ ಹಿಂದಿರುಗಿ",
            banner_title: "AI ರೋಗ ಪತ್ತೆ",
            banner_desc: "ಸಸ್ಯದ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ತಕ್ಷಣ ರೋಗ ನಿರ್ಣಯ, ಚಿಕಿತ್ಸೆ ಮತ್ತು ಶಿಫಾರಸು ಪಡೆಯಿರಿ.",
            banner_btn: "🔬 ರೋಗ ಪತ್ತೆ ಮಾಡಿ"
        },
        reset: {
            title: "ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ",
            instructions: "ನಿಮ್ಮ ಗುರುತನ್ನು ಪರಿಶೀಲಿಸಲು ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಚಿತ್ರದಿಂದ ಅಕ್ಷರಗಳನ್ನು ನಮೂದಿಸಿ.",
            label: "CAPTCHA ನಮೂದಿಸಿ",
            placeholder: "ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...",
            btn: "ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮರುಹೊಂದಿಸಿ",
            success: "CAPTCHA ಪರಿಶೀಲಿಸಲಾಗಿದೆ! ಹೊಸ ಪಾಸ್‌ವರ್ಡ್ ಹೊಂದಿಸಲು ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ...",
            fail: "ತಪ್ಪಾದ CAPTCHA. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
            contact_label: "ಇಮೇಲ್ ವಿಳಾಸ ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆ",
            contact_placeholder: "email@example.com ಅಥವಾ 9876543210",
            contact_help: "📧 ಇಮೇಲ್ → OTP ಇನ್‍ಬಾಕ್ಸ್‌ಗೆ | 📱 ಫೋನ್ → OTP SMS ಮೂಲಕ",
            contact_required: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಇಮೇಲ್ ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.",
            contact_invalid: "ದಯವಿಟ್ಟು ಮಾನ್ಯ ಇಮೇಲ್ ಅಥವಾ 10-ಅಂಕಿಯ ಫೋನ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.",
            email_label: "ಇಮೇಲ್ ವಿಳಾಸ",
            email_placeholder: "example@mail.com",
            send_otp: "OTP ಕಳುಹಿಸಿ",
            sending: "ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...",
            resetting: "ಮರುಹೊಂದಿಸಲಾಗುತ್ತಿದೆ...",
            otp_label: "6-ಅಂಕಿಯ OTP ನಮೂದಿಸಿ",
            otp_sent: "OTP ನಿಮ್ಮ ಇಮೇಲ್‌ಗೆ ಕಳುಹಿಸಲಾಗಿದೆ.",
            otp_sent_sms: "OTP SMS ಮೂಲಕ ನಿಮ್ಮ ಫೋನ್‌ಗೆ ಕಳುಹಿಸಲಾಗಿದೆ.",
            otp_invalid: "ತಪ್ಪಾದ ಅಥವಾ ಅವಧಿ ಮೀರಿದ OTP. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
            verify_next: "ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮುಂದೆ",
            resend: "OTP ಮರಳಿ ಕಳುಹಿಸಿ",
            new_pw: "ಹೊಸ ಪಾಸ್‌ವರ್ಡ್",
            confirm_pw: "ಪಾಸ್‌ವರ್ಡ್ ಖಚಿತಪಡಿಸಿ",
            reset_btn: "ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ",
            reset_success: "ಪಾಸ್‌ವರ್ಡ್ ಮರುಹೊಂದಿಸಲಾಗಿದೆ! ನೀವು ಈಗ ಲಾಗಿನ್ ಮಾಡಬಹುದು.",
            otp_instructions: "OTP ಸ್ವೀಕರಿಸಲು ನಿಮ್ಮ ನೋಂದಾಯಿತ ಇಮೇಲ್ ವಿಳಾಸ ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.",
            otp_sent_msg: "OTP ನಿಮ್ಮ ಸಂಪರ್ಕ ಮಾಧ್ಯಮಕ್ಕೆ ಕಳುಹಿಸಲಾಗಿದೆ.",
            new_pw_instructions: "ಪರಿಶೀಲನೆ ಯಶಸ್ವಿಯಾಯಿತು! ಕೆಳಗೆ ನಿಮ್ಮ ಹೊಸ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ."
        },
        crop_names: {
            "Sugarcane": "ಕಬ್ಬು",
            "Jowar": "ಜೋಳ",
            "Maize": "ಮೆಕ್ಕೆಜೋಳ",
            "Groundnut": "ಕಡಲೆಕಾಯಿ",
            "Paddy": "ಭತ್ತ",
            "Cotton": "ಹತ್ತಿ",
            "Sunflower": "ಸೂರ್ಯಕಾಂತಿ",
            "Tobacco": "ತಂಬಾಕು",
            "Ragi": "ರಾಗಿ",
            "Grapes": "ದ್ರಾಕ್ಷಿ",
            "Mango": "ಮಾವು",
            "Vegetables": "ತರಕಾರಿಗಳು",
            "Flowers": "ಹೂವುಗಳು",
            "Fruits": "ಹಣ್ಣುಗಳು",
            "Bengal Gram": "ಕಡಲೆಕಾಳು",
            "Red Gram": "ತೊಗರಿ",
            "Soyabean": "ಸೋಯಾಬೀನ್",
            "Turmeric": "ಅರಿಶಿನ",
            "Banana": "ಬಾಳೆಹಣ್ಣು",
            "Silk/Mulberry": "ರೇಷ್ಮೆ/ಹಿಪ್ಪುನೇರಳೆ",
            "Coffee": "ಕಾಫಿ",
            "Arecanut": "ಅಡಿಕೆ",
            "Pepper": "ಕಾಳುಮೆಣಸು",
            "Onion": "ಈರುಳ್ಳಿ",
            "Rubber": "ರಬ್ಬರ್",
            "Wheat": "ಗೋಧಿ",
            "Chilli": "ಮೆಣಸಿನಕಾಯಿ",
            "Potato": "ಆಲೂಗಡ್ಡೆ",
            "Cardamom": "ಏಲಕ್ಕಿ",
            "Bajra": "ಸಜ್ಜೆ",
            "Spices": "ಮಸಾಲೆಗಳು",
            "Pomegranate": "ದಾಳಿಂಬೆ",
            "Tomato": "ಟೊಮೆಟೊ",
            "Cashew": "ಗೋಡಂಬಿ"
        }
    }
};
function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    applyTranslations();
    window.dispatchEvent(new Event('languageChanged'));
}

function applyTranslations() {
    const lang = localStorage.getItem('preferredLang') || 'en';

    // Update active state of buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(lang));
    });

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const i18nKey = el.getAttribute('data-i18n');
        const [page, key] = i18nKey.split(':');

        let translatedText = "";
        if (translations[lang][page] && translations[lang][page][key]) {
            translatedText = translations[lang][page][key];
        } else if (translations[lang].common[key]) {
            translatedText = translations[lang].common[key];
        }

        if (translatedText) {
            // Check if it's an input placeholder
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translatedText;
            } else if (el.tagName === 'OPTION') {
                el.text = translatedText;
            } else {
                el.innerText = translatedText;
            }
        }
    });

    const cropElements = document.querySelectorAll('[data-i18n-crop]');
    cropElements.forEach(el => {
        const cropKey = el.getAttribute('data-i18n-crop');
        if (translations[lang] && translations[lang].crop_names && translations[lang].crop_names[cropKey]) {
            el.innerText = translations[lang].crop_names[cropKey];
        }
    });

    const dynamicDistrict = document.querySelector('[data-dynamic-district]');
    if (dynamicDistrict) {
        const dKey = dynamicDistrict.getAttribute('data-dynamic-district');
        if (translations[lang] && translations[lang].district && translations[lang].district[dKey]) {
            dynamicDistrict.innerText = translations[lang].district[dKey];
        }
    }
}

document.addEventListener('DOMContentLoaded', applyTranslations);
