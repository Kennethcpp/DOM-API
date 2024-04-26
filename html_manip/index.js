
 // DOM & DOM Manipulation
// Multiple Selectors
 const allMyH1 = document.getElementById("name1")
 const allMyH2 = document.getElementById("name2")

const button = document.getElementById("btn")



allMyH1.style.color ="white"
allMyH2.style.color ="white"
allMyH1.style.fontSize = "25px"
allMyH2.style.fontSize = "25px"


button.addEventListener("mouseover", ()=>{
    allMyH1.style.color = "gold"
    allMyH2.style.color = "gold"
    allMyH1.style.fontSize = "45px"
    allMyH2.style.fontSize = "45px"

    allMyH1.textContent = "kenneth"
    allMyH2.textContent = "Onyeonoro"

})
