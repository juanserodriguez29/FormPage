const name2 = document.getElementById("name")
const email2 = document.getElementById("email")
const topics = document.getElementById("topics")

const name1 = localStorage.getItem("name")
const email1 = localStorage.getItem("email")
const values = localStorage.getItem("values").split(",")

name2.innerHTML = `Name: <span style="color: white;">${name1}</span>`
email2.innerHTML = `Email: <span style="color: white;">${email1}</span>`
topics.innerHTML = `Topics: <ul style="color: white;">${values.map(element => `<li>${element}</li>`).join("")}</ul>`