function Submit(){
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let result = document.getElementById("result");
    let bmi = weight.value / Math.pow(height.value, 2);
    if (bmi < 18.5) {
        result.innerHTML = "Underweight";
        } else if (bmi < 25) {
            result.innerHTML = "Normal";
        } else if (bmi < 30) {
             result.innerHTML = "Overweight";
        } else if (bmi < 35) {
             result.innerHTML = "Obese";
        } else {
             result.innerHTML = "Severe obesity"
        }
        console.log(result)
};