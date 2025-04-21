// Grab all steps and buttons
const steps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next');
const prevBtns = document.querySelectorAll('.prev');

let currentStep = 0;

// Show the current step
function showStep(stepIndex) {
  steps.forEach((step, index) => {
    step.classList.toggle('active', index === stepIndex);
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Basic check: make sure required fields in current step are filled
    const currentFields = steps[currentStep].querySelectorAll('input, textarea, select');
    let allFilled = true;
    
    currentFields.forEach(field => {
      if (field.hasAttribute('required') && !field.value.trim()) {
        allFilled = false;
        field.style.border = '2px solid red';
      } else {
        field.style.border = '';
      }
    });

    if (allFilled) {
      currentStep++;
      if (currentStep < steps.length) {
        showStep(currentStep);
      }
    } else {
      alert("Please complete all required fields before continuing.");
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

// Add event listeners to remove red border on user input
const inputs = document.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
  input.addEventListener('input', () => {
    // Remove red border once user starts typing or selects a value
    if (input.value.trim() !== '') {
      input.style.border = '';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("staffForm");
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault(); // Stop normal form submission
  
      const formData = new FormData(form);
  
      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          form.reset(); // Clear form inputs
          window.location.href = "thank-you.html"; // Go to your custom page
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("There was a problem submitting your form.");
      }
    });
  });
  

// Initialize
showStep(currentStep);
