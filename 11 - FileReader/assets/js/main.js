let inpFile = document.querySelector('[name="asgar"]');
let div = document.querySelector('.area');
div.addEventListener("click",function() {
    this.children[1].click();
})
div.addEventListener("dragover",function(ev) {
    ev.preventDefault
})
div.addEventListener("drop",function() {
    this.children[1].click();
})
inpFile.addEventListener("change",function () {
    // console.log(this.files);
    [...this.files].forEach(file=>{
        let reader = new FileReader();
        let tr = document.createElement("tr"),
        tdImg = document.createElement("td"),
        tdName = document.createElement("td"),
        tdSize = document.createElement("td"),
        tdType = document.createElement("td")
        reader.onload = function () {
            tdImg.innerHTML = "<img width='100px' src='"+ this.result+"'/>";
            tdName.innerText = file.name;
            tdType.innerText = file.type;
            tdSize.innerText =  (file.size/1024).toFixed(2) + "kb";
        } 
        reader.readAsDataURL(file);
        tr.append(tdImg,tdName,tdType,tdSize)
        table.appendChild(tr);
    })
})