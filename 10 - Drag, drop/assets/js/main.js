// let item = document.querySelector(".item");
// let dragArea = document.querySelector(".dragArea");
// let dragItem;

// item.ondragstart = ()=>{
//     console.log("Start");
// }
// item.ondragend = () =>{
//     console.log("End");
// }
// item.ondrag = ()=>{
//     console.log("Continue");
// }

// dragArea.ondragenter = ()=>{
//     console.log("Enter")
// }
// dragArea.ondragleave = ()=>{
//     console.log("Leave");
// }
// dragArea.ondragover = function (e) {
//     e.preventDefault();
// }
// dragArea.ondrop = function(){
//     console.log("Drop");
// }

// item.ondragstart = function(ev){
//     ev.dataTransfer.setData("divId",this.id);
//     // dragItem = this;
// }
// dragArea.ondragover = function (e) {
//     e.preventDefault();
// }
// dragArea.ondrop = function(ev){
//     let id = ev.dataTransfer.getData("divId")
//     dragArea.appendChild(document.getElementById(id));
// }


let item = document.getElementById("item");

item.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("itemId",this.id);
})

document.querySelectorAll(".area").forEach(area=>{
    area.addEventListener("dragover",function(e){
        e.preventDefault();
    })
})
document.querySelectorAll(".area").forEach(area=>{
    area.addEventListener("drop",function(e){
        let data = e.dataTransfer.getData("itemId");
        this.appendChild(document.getElementById(data));
    })
})
