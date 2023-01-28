function showValue(sliderId, value) {
    document.getElementById(sliderId + 'Value').innerHTML = value;
}

function submitStressAnswers() {
    // Get user input
    var stressQ1 = document.getElementById('stressQ1').value;
    var stressQ2 = document.getElementById('stressQ2').value;
    var stressQ3 = document.getElementById('stressQ3').value;
    var stressQ4 = document.getElementById('stressQ4').value;
  

    const stressAnswers = [stressQ1, stressQ2, stressQ3, stressQ4]
    sessionStorage.setItem("stressAnswers", stressAnswers)
}

function submitHealthAnswers() {
    // Get user input
    var healthQ1 = document.getElementById('healthQ1').value;
    var healthQ2 = document.getElementById('healthQ2').value;
    var healthQ3 = document.getElementById('healthQ3').value;
  

    const healthAnswers = [healthQ1, healthQ2, healthQ3]
    sessionStorage.setItem("healthAnswers", healthAnswers)
}

function submitSocialAnswers() {
    // Get user input
    var socialQ1 = document.getElementById('socialQ1').value;
    var socialQ2 = document.getElementById('socialQ2').value;
    var socialQ3 = document.getElementById('socialQ3').value;
    var socialQ4 = document.getElementById('socialQ4').value;
    var socialQ5 = document.getElementById('socialQ5').value;
  

    const socialAnswers = [socialQ1, socialQ2, socialQ3, socialQ4, socialQ5]
    sessionStorage.setItem("socialAnswers", socialAnswers)
}

function submitAchAnswers() {
    // Get user input
    var achQ1 = document.getElementById('achQ1').value;
    var achQ2 = document.getElementById('achQ2').value;
    var achQ3 = document.getElementById('achQ3').value;
  

    const achAnswers = [achQ1, achQ2, achQ3]
    sessionStorage.setItem("achAnswers", achAnswers)

    finaliseQuiz()
}

function finaliseQuiz(){
    // redirect to homepage
    document.location.href = "/";
}