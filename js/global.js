function globalStartup(){
    let isLogged = sessionStorage.getItem("logged-in")

    if(isLogged){
        document.getElementById("signup").style.display = "none"
        document.getElementById("account").style.display = "block"
    }
}