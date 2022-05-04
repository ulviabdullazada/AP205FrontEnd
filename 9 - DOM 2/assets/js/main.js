const input = document.querySelector("input")
const btn = document.querySelector("button")

// input.onblur = function(){
//     Validate(this)
// }
// input.onkeyup = function(){
//     Validate(this)
// }
// input.onkeydown = function(){
//     Validate(this)
// }
// btn.addEventListener("click",function(e){
//     e.preventDefault();
//     Validate(this.previousElementSibling.children[1]);
// })

// function Validate(elem){
//     if (elem.value.trim() == "") {
//         elem.nextElementSibling.classList.remove("d-none");
//     }
//     else{
//         elem.nextElementSibling.classList.add("d-none");
//     }
// }
// input.onclick = () =>{
//     console.log("Click event");
// }
// input.onblur = () =>{
//     console.log("Blur event");
// }
// input.onchange = () =>{
//     console.log(input.value);
// }

const ul = document.querySelector("ul")

btn.addEventListener("click",function(e){
    e.preventDefault();
    if (isNotNull(input)) {
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.classList.add("las","la-trash-alt","float-end");
        li.innerText = input.value;
        li.classList.add("list-group-item");
        li.append(i);
        i.onclick = function(){
            this.parentElement.remove();
        }
        li.addEventListener("click",function(){
            activeLi(this);
        })
        ul.append(li);
        // ul.innerHTML += `<li class="list-group-item">${input.value}<i class="las la-trash-alt float-end" onclick="deleteLi(this)"></i></li>`;
    } 
})
document.querySelector("body").onkeydown = function(e){
    if (e.key == "ArrowUp") {
        activeLi(document.querySelector("li.active").previousElementSibling);
    }
    if (e.key == "ArrowDown") {
        activeLi(document.querySelector("li.active").nextElementSibling);
    }
}

function isNotNull(elem){
    if (elem.value.trim() == "") {
        elem.nextElementSibling.classList.remove("d-none");
        return false;
    }
    else{
        elem.nextElementSibling.classList.add("d-none");
        return true;
    }
}

function activeLi(elem) {
    for (let i = 0; i < elem.parentElement.children.length; i++) {
        elem.parentElement.children[i].classList.remove("active");
    }
    elem.classList.add("active");
}