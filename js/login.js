function createAccount(){
    // saving age and gender
    sessionStorage.setItem("age", document.getElementById("ageInput").value)
    sessionStorage.setItem("gender", document.getElementById("genderInput").value)

    // user is logged in
    sessionStorage.setItem("logged-in", true)

    // redirect to homepage
    document.location.href = "/";
}