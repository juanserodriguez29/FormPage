const software = document.getElementById("software")
const user = document.getElementById("user")
const graphic = document.getElementById("graphic")

function changeStatus(id){

    if(id.value === "false"){
        id.value = "true"
        id.classList.add("active");
        id.classList.remove("inactive");
    }else{
        id.value = "false"
        id.classList.add("inactive");
        id.classList.remove("active");
    }

    console.log(`El estado de ${id.id} es: ${id.value}`)
}

function validation2(){
    const values = []

    if(software.value === "true"){
        values.push(software.textContent)
    }
    if(user.value === "true"){
        values.push(user.textContent)
    }
    if(graphic.value === "true"){
        values.push(graphic.textContent)
    }

    localStorage.setItem("values", values)

    if(software.value === "true" || user.value === "true" || graphic.value === "true" ){
        window.location.href = "/Page3/Page3.html"
    }else{
        alert("You must make a selection")
    }
}