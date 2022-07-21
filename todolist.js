const uloha = document.getElementById("uloha")
const pridat = document.getElementById("pridat")
let storage = []

pridat.addEventListener("click", function(){
    storage.push(uloha.value)
    render()
})

function render(){
    for (i = 0; i < storage.length; i++)
    console.log(storage[i])
    
    const list = document.createElement("div");
    document.querySelector("div").style.display="block"
    list.innerHTML = uloha.value;
    document.body.appendChild(list);
    uloha.value = ""
}