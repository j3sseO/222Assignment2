// Constant variables for accessing HTML components
const pages = document.querySelectorAll('.page')
const error = document.getElementById('error');
const genderError = document.getElementById('genderError');
const smokingError = document.getElementById('smokingError');

const nextButton1 = document.getElementById('nextButton1');
const nextButton2 = document.getElementById('nextButton2');
const nextButton3 = document.getElementById('nextButton3');
const calculateButton = document.getElementById('calculateButton');

const prevButtons = document.querySelectorAll('[id^=prev]')


// Variables to store user inputted data.
var score = 0;
var gender;
var smoker;
var bloodPressure;

// Variable to store what page the user is currently on.
let currentPage = 0;

// Funtion to show the page that the user is currently on.
function showPage(pageIndex) {
  pages.forEach((page, index) => {
    if (index === pageIndex) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });
}

// nextButton1 click event listener.
// Ensures that a gender is selected before continuing.
nextButton1.addEventListener('click', () => {
  if (gender == null) {
    genderError.innerHTML = "Please select a gender.";
  } else {
    genderError.innerHTML = "";
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  }
});

// nextButton2 click event listener.
nextButton2.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

// nextButton3 click event listener.
// Ensures that a smoking option is selected before continuing.
nextButton3.addEventListener('click', () => {
  if (smoker == null) {
    smokingError.innerHTML = "Please select a smoking option.";
  } else {
    smokingError.innerHTML = "";
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  }
});

// calculateButton click event listener.
// Calls calculateResult() method and displays result based on the gender selected.
calculateButton.addEventListener('click', () => {
  const bloodPressureInput = document.getElementById('bloodPressureInput');
  bloodPressure = bloodPressureInput.value;
  if (bloodPressure === "") {
    error.innerHTML = "Please input a valid systolic blood pressure value";
  } else {
    error.innerHTML = "";
    var result = calculateResult();

    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }

prevButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });
});
    
    const resultOutput = document.getElementById('result');
    
    if (gender === 'male') {
      if (result <= 0) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is < 1% ";
      } else if (result <= 4) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 1%";
      } else if (result <= 6) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 2%";
      } else if (result === 7) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 3%";
      } else if (result === 8) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 4%";
      } else if (result === 9) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 5%";
      } else if (result === 10) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 6%";
      } else if (result === 11) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 8%";
      } else if (result === 12) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 10%";
      } else if (result === 13) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 13%";
      } else if (result === 14) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 16%";
      } else if (result === 15) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 20%";
      } else if (result === 16) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 25%";
      } else {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is > 30%";
      }
    } else {
      if (result < 9) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is < 1%";
      } else if (result <= 12) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 1%";
      } else if (result <= 14) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 2%";
      } else if (result === 15) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 3%";
      } else if (result === 16) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 4%";
      } else if (result === 17) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 5%";
      } else if (result === 18) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 6%";
      } else if (result === 19) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 8%";
      } else if (result === 20) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 11%";
      } else if (result === 21) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 14%";
      } else if (result === 22) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 17%";
      } else if (result === 23) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 22%";
      } else if (result === 24) {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is 27%";
      } else {
        resultOutput.innerHTML = "Your 10-year cadiovascular risk is > 30%";
      }
    }
    score = 0;
  }
});

// Age input listener.
const ageInput = document.getElementById('age');
ageInput.addEventListener('input', () => {
    const ageDisplay = document.getElementById('ageDisplay');
    ageDisplay.textContent = ageInput.value;
});

// Gender input listener.
const genderInputs = document.querySelectorAll('input[name=gender]');
genderInputs.forEach(input => {
  input.addEventListener('change', () => {
        gender = input.value;
  });
});

// Total cholesterol listener.
const totalCholesterolInput = document.getElementById('totalCholesterol');
totalCholesterolInput.addEventListener('input', () => {
  const totalCholesterolDisplay = document.getElementById('totalCholesterolDisplay');
  totalCholesterolDisplay.textContent = totalCholesterolInput.value + " mg/dL";
});

// HDL cholesterol input listener.
const HDLCholesterolInput = document.getElementById('HDLCholesterol');
HDLCholesterolInput.addEventListener('input', () => {
  const HDLCholesterolDisplay = document.getElementById('HDLCholesterolDisplay');
  HDLCholesterolDisplay.textContent = HDLCholesterolInput.value + " mg/dL";
})

// Smoker input listener.
const smokerInputs = document.querySelectorAll('input[name=cigarettes]');
smokerInputs.forEach(input => {
  input.addEventListener('change', () => {
        smoker = input.value;
  });
});

showPage(currentPage);  // Show the initial page

// Function that calculates the Framingham Risk Score from the inputted data.
function calculateResult() {
  if (gender === "male") {
    if (ageInput.value <= 34) {
      score = score - 9;
    } else if (ageInput.value <= 39) {
      score = score - 4;
    } else if (ageInput.value <= 44) {
      score = score;
    } else if (ageInput.value <= 49) {
      score = score + 3;
    } else if (ageInput.value <= 54) {
      score = score + 6;
    } else if (ageInput.value <= 59) {
      score = score + 8;
    } else if (ageInput.value <= 64) {
      score = score + 10;
    } else if (ageInput.value <= 69) {
      score = score + 11;
    } else if (ageInput.value <= 74) {
      score = score + 12;
    } else {
      score = score + 13;
    }

    if (ageInput.value <= 39) {
      if (totalCholesterolInput.value < 160) {
        score = score;
      } else if (totalCholesterolInput.value < 199) {
        score = score + 4;
      } else if (totalCholesterolInput.value < 239) {
        score = score + 7;
      } else if (totalCholesterolInput.value < 279) {
        score = score + 9;
      } else {
        score = score + 11;
      }
    } else if (ageInput.value <= 49) {
      if (totalCholesterolInput.value < 160) {
        score = score;
      } else if (totalCholesterolInput.value < 199) {
        score = score + 3;
      } else if (totalCholesterolInput.value < 239) {
        score = score + 5;
      } else if (totalCholesterolInput.value < 279) {
        score = score + 6;
      } else {
        score = score + 8;
      }
    } else if (ageInput.value <= 59) {
      if (totalCholesterolInput.value < 160) {
        score = score;
      } else if (totalCholesterolInput.value < 199) {
        score = score + 2;
      } else if (totalCholesterolInput.value < 239) {
        score = score + 3;
      } else if (totalCholesterolInput.value < 279) {
        score = score + 4;
      } else {
        score = score + 5;
      }
    } else if (ageInput.value <= 69) {
      if (totalCholesterolInput.value < 160) {
        score = score;
      } else if (totalCholesterolInput.value < 199) {
        score = score + 1;
      } else if (totalCholesterolInput.value < 239) {
        score = score + 1;
      } else if (totalCholesterolInput.value < 279) {
        score = score + 2;
      } else {
        score = score + 3;
      }
    } else {
      if (totalCholesterolInput.value < 160) {
        score = score;
      } else if (totalCholesterolInput.value < 199) {
        score = score;
      } else if (totalCholesterolInput.value < 239) {
        score = score;
      } else if (totalCholesterolInput.value < 279) {
        score = score + 1;
      } else {
        score = score + 1;
      }
    }

    if (smoker === "yes") {
      if (ageInput.value <= 39) {
        score = score + 8;
      } else if (ageInput.value <= 49) {
        score = score + 5;
      } else if (ageInput.value <= 59) {
        score = score + 3;
      } else {
        score = score + 1;
      }
    }

    if (HDLCholesterolInput.value >= 60) {
      score = score - 1;
    } else if (HDLCholesterolInput.value >= 50) {
      score = score;
    } else if (HDLCholesterolInput.value >= 40) {
      score = score + 1;
    } else {
      score = score + 2;
    }

    const treatmentCheck = document.getElementById('treatmentCheck');
    if (treatmentCheck.value === "yes") {
      if (bloodPressure < 120) {
        score = score;
      } else if (bloodPressure < 129) {
        score = score + 1;
      } else if (bloodPressure < 159) {
        score = score + 2
      } else {
        score = score + 3;
      }
    } else {
      if (bloodPressure < 129) {
        score = score;
      } else if (bloodPressure < 159) {
        score = score + 1;
      } else {
        score = score + 2;
      }
    }
    return score;
  } else {
    if (ageInput.value <= 34) {
      score = score - 7;
    } else if (ageInput.value <= 39) {
      score = score - 3;
    } else if (ageInput.value <= 44) {
      score = score;
    } else if (ageInput.value <= 49) {
      score = score + 3;
    } else if (ageInput.value <= 54) {
      score = score + 6;
    } else if (ageInput.value <= 59) {
      score = score + 8;
    } else if (ageInput.value <= 64) {
      score = score + 10;
    } else if (ageInput.value <= 69) {
      score = score + 12;
    } else if (ageInput.value <= 74) {
      score = score + 14;
    } else {
      score = score + 16;
    }

    if (ageInput.value <= 39) {
      if (totalCholesterolInput.value < 160) {
        score = score;
      } else if (totalCholesterolInput.value < 199) {
        score = score + 4;
      } else if (totalCholesterolInput.value < 239) {
        score = score + 8;
      } else if (totalCholesterolInput.value < 279) {
        score = score + 11;
      } else {
        score = score + 13;
      }
    } else if (ageInput.value <= 49) {
      if (totalCholesterolInput.value < 160) {
        score = score;
      } else if (totalCholesterolInput.value < 199) {
        score = score + 3;
      } else if (totalCholesterolInput.value < 239) {
        score = score + 6;
      } else if (totalCholesterolInput.value < 279) {
        score = score + 8;
      } else {
        score = score + 10;
      }
    } else if (ageInput.value <= 59) {
      if (totalCholesterolInput.value < 160) {
        score = score;
      } else if (totalCholesterolInput.value < 199) {
        score = score + 2;
      } else if (totalCholesterolInput.value < 239) {
        score = score + 4;
      } else if (totalCholesterolInput.value < 279) {
        score = score + 5;
      } else {
        score = score + 8;
      }
    } else if (ageInput.value <= 69) {
      if (totalCholesterolInput.value < 160) {
        score = score;
      } else if (totalCholesterolInput.value < 199) {
        score = score + 1;
      } else if (totalCholesterolInput.value < 239) {
        score = score + 2;
      } else if (totalCholesterolInput.value < 279) {
        score = score + 3;
      } else {
        score = score + 4;
      }
    } else {
      if (totalCholesterolInput.value < 160) {
        score = score;
      } else if (totalCholesterolInput.value < 199) {
        score = score + 1;
      } else if (totalCholesterolInput.value < 239) {
        score = score + 1;
      } else if (totalCholesterolInput.value < 279) {
        score = score + 2;
      } else {
        score = score + 2;
      }
    }

    if (smoker === "yes") {
      if (ageInput.value <= 39) {
        score = score + 9;
      } else if (ageInput.value <= 49) {
        score = score + 7;
      } else if (ageInput.value <= 59) {
        score = score + 4;
      } else if (ageInput.value <= 69) {
        score = score + 2;
      } else {
        score = score + 1;
      }
    }

    if (HDLCholesterolInput.value >= 60) {
      score = score - 1;
    } else if (HDLCholesterolInput.value >= 50) {
      score = score;
    } else if (HDLCholesterolInput.value >= 40) {
      score = score + 1;
    } else {
      score = score + 2;
    }

    const treatmentCheck = document.getElementById('treatmentCheck');
    if (treatmentCheck.value === "yes") {
      if (bloodPressure < 120) {
        score = score;
      } else if (bloodPressure < 129) {
        score = score + 3;
      } else if (bloodPressure < 139) {
        score = score + 4;
      } else if (bloodPressure < 159) {
        score = score + 5;
      } else {
        score = score + 6;
      }
    } else {
      if (bloodPressure < 120) {
        score = score;
      } else if (bloodPressure < 129) {
        score = score + 1;
      } else if (bloodPressure < 139) {
        score = score + 2;
      } else if (bloodPressure < 159) {
        score = score + 3;
      } else {
        score = score + 4;
      }
    }
    return score;
  }
}