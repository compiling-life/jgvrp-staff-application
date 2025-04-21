const steps = document.querySelectorAll('.form-step');

const nextBtns = document.querySelectorAll('.next');

const prevBtns = document.querySelectorAll('.prev');

let currentStep = 0;

function showStep(stepIndex) 
{
  steps.forEach((step, index) => {
    step.classList.toggle('active', index === stepIndex);
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const currentFields = steps[currentStep].querySelectorAll('input, textarea, select');
    let allFilled = true;
    
    currentFields.forEach(field => {
      if (field.hasAttribute('required') && !field.value.trim()) 
      {
        allFilled = false;
        field.style.border = '2px solid red';
      } 
      else 
      {
        field.style.border = '';
      }
    });

    if (allFilled) 
    {
      currentStep++;
      if (currentStep < steps.length) {
        showStep(currentStep);
      }
    } 
    else 
    {
      alert("Please complete all required fields before continuing.");
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) 
    {
      currentStep--;
      showStep(currentStep);
    }
  });
});

const inputs = document.querySelectorAll('input, textarea, select');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') 
    {
      input.style.border = '';
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("staffForm").reset();
});


showStep(currentStep);
