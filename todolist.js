const uloha = document.getElementById("uloha")
const pridat = document.getElementById("pridat")
let list = document.getElementById("list")

storage = []

pridat.addEventListener("click", function(){
    storage.push(uloha.value)
    uloha.value=""
    render()
})

function render(){
    for (let i = 0; i < storage.length; i++)
    console.log(storage[i])
}