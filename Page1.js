const name1 = document.getElementById("name")
const email = document.getElementById("email")

function validation1(){
    
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if(name1.value === "" || email.value === ""){
        alert("Name or email is empty")
        return
    }else{
        localStorage.setItem("name", name1.value)
    }

    if(validateEmail.test(email.value)){
        localStorage.setItem("email", email.value)
        window.location.href= "/Page2.html"
    }else{
        console.log("Validación fallida")
        alert("Invalidate email")
    }
}