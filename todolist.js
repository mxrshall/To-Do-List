const uloha = document.getElementById("uloha")
const pridat = document.getElementById("pridat")
const zmazat = document.createElement("button");
let storage = []

pridat.addEventListener("click", function(){
    storage.push(uloha.value)
    render()
})

function render(){
    for (i = 0; i < storage.length; i++)
    console.log(storage[i])
    
    const list = document.createElement("div");
    const zmazat = document.createElement("button");
    
    document.body.appendChild(list);
    document.body.appendChild(zmazat);
    zmazat.setAttribute("id","zmazat")
    zmazat.textContent = "Zmazať"
    
    list.innerHTML = uloha.value;
    uloha.value = ""

    zmazat.addEventListener("click", function(){
        console.log("ahoj")
    })
}


