
let kids = ["Jace", "Jazz", "Jada", "Jax"]
let ol = document.createElement("ol")

for (let kid of kids){
    let li = document.createElement("li")
    li.innerText = kid;
    ol.appendChild(li);
}

document.body.appendChild(ol);