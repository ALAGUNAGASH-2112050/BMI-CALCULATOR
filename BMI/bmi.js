function calculateBMI() { 
    var weight = parseFloat(document.getElementById('weight').value); 
    var height = parseFloat(document.getElementById('height').value) / 100; 
    var bmi = weight / (height * height); 
    var resultElement = document.getElementById('result'); 
    if(bmi<18.5) 
    resultElement.textContent = 'Your BMI is: ' + bmi.toFixed(2)+" You are UnderWeight"; 
    else if(bmi<24.5) 
    resultElement.textContent = 'Your BMI is: ' + bmi.toFixed(2)+" You are Healthy Weight"; 
    else if(bmi<29.9) 
    resultElement.textContent = 'Your BMI is: ' + bmi.toFixed(2)+" You are Over Weight"; 
    else 
    resultElement.textContent = 'Your BMI is: ' + bmi.toFixed(2); 
    resultElement.classList.add('blink'); 
    } 
    