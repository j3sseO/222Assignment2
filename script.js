const pages = document.querySelectorAll('.page');
const nextButtons = document.querySelectorAll('[id^=next]');
const prevButtons = document.querySelectorAll('[id^=prev]')
const error = document.getElementById('error');
const genderError = document.getElementById('genderError');
const smokingError = document.getElementById('smokingError');
var score = 0;
var gender;
var smoker;
var bloodPressure;

let currentPage = 0;

function showPage(pageIndex) {
  pages.forEach((page, index) => {
    if (index === pageIndex) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });
}

const nextButton1 = document.getElementById('nextButton1');
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

const nextButton2 = document.getElementById('nextButton2');
nextButton2.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

const nextButton3 = document.getElementById('nextButton3');
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

prevButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });
});

const calculateButton = document.getElementById('calculateButton');
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

    // const resultOutput = document.getElementById('result');
    // resultOutput.innerHTML = result;
    
    const resultOutput = document.getElementById('result');
    
    if (gender === 'male') {
      if (result <= 0) {
        resultOutput.innerHTML = "< 1%";
      } else if (result <= 4) {
        resultOutput.innerHTML = "1%";
      } else if (result <= 6) {
        resultOutput.innerHTML = "2%";
      } else if (result === 7) {
        resultOutput.innerHTML = "3%";
      } else if (result === 8) {
        resultOutput.innerHTML = "4%";
      } else if (result === 9) {
        resultOutput.innerHTML = "5%";
      } else if (result === 10) {
        resultOutput.innerHTML = "6%";
      } else if (result === 11) {
        resultOutput.innerHTML = "8%";
      } else if (result === 12) {
        resultOutput.innerHTML = "10%";
      } else if (result === 13) {
        resultOutput.innerHTML = "13%";
      } else if (result === 14) {
        resultOutput.innerHTML = "16%";
      } else if (result === 15) {
        resultOutput.innerHTML = "20%";
      } else if (result === 16) {
        resultOutput.innerHTML = "25%";
      } else {
        resultOutput.innerHTML = "> 30%";
      }
    } else {
      if (result < 9) {
        resultOutput.innerHTML = "< 1%";
      } else if (result <= 12) {
        resultOutput.innerHTML = "1%";
      } else if (result <= 14) {
        resultOutput.innerHTML = "2%";
      } else if (result === 15) {
        resultOutput.innerHTML = "3%";
      } else if (result === 16) {
        resultOutput.innerHTML = "4%";
      } else if (result === 17) {
        resultOutput.innerHTML = "5%";
      } else if (result === 18) {
        resultOutput.innerHTML = "6%";
      } else if (result === 19) {
        resultOutput.innerHTML = "8%";
      } else if (result === 20) {
        resultOutput.innerHTML = "11%";
      } else if (result === 21) {
        resultOutput.innerHTML = "14%";
      } else if (result === 22) {
        resultOutput.innerHTML = "17%";
      } else if (result === 23) {
        resultOutput.innerHTML = "22%";
      } else if (result === 24) {
        resultOutput.innerHTML = "27%";
      } else {
        resultOutput.innerHTML = "> 30%";
      }
    }
    score = 0;
  }
});

// Age Input Listener
const ageInput = document.getElementById('age');
ageInput.addEventListener('input', () => {
    const ageDisplay = document.getElementById('ageDisplay');
    ageDisplay.textContent = ageInput.value;
});

// Gender Input Listener
const genderInputs = document.querySelectorAll('input[name=gender]');
genderInputs.forEach(input => {
  input.addEventListener('change', () => {
        gender = input.value;
  });
});

// Total Cholesterol Input Listener
const totalCholesterolInput = document.getElementById('totalCholesterol');
totalCholesterolInput.addEventListener('input', () => {
  const totalCholesterolDisplay = document.getElementById('totalCholesterolDisplay');
  totalCholesterolDisplay.textContent = totalCholesterolInput.value + " mg/dL";
});

// HDL Cholesterol Input Listener
const HDLCholesterolInput = document.getElementById('HDLCholesterol');
HDLCholesterolInput.addEventListener('input', () => {
  const HDLCholesterolDisplay = document.getElementById('HDLCholesterolDisplay');
  HDLCholesterolDisplay.textContent = HDLCholesterolInput.value + " mg/dL";
})

// Smoker Input Listener
const smokerInputs = document.querySelectorAll('input[name=cigarettes]');
smokerInputs.forEach(input => {
  input.addEventListener('change', () => {
        smoker = input.value;
  });
});

showPage(currentPage);  // Show the initial page

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