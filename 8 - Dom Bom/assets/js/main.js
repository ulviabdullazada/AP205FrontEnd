// title.innerText = "Salam";

// let title = document.getElementById("title");

// title.innerHTML += " <b>AP205</b>";
// alert(title.innerText)
// p.innerText=title.innerText;

// console.log(title.innerText);

// let texts =document.getElementsByTagName("p")

// let usaqlar = document.getElementsByName("usaq");

// let text = document.querySelector(".text[name = 'usaq1']");
// let texts = document.querySelectorAll("#title");


// console.log(list.children);

// let listItems = document.querySelectorAll("#list li");
// list.children

// console.log(list.children)
// list.empty();
// let liCount = list.children.length;
// for (let i = 0; i < liCount; i++) { //3
//     list.children[0].remove();
//     console.log(list.children)
// }
// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].remove();
// }

// list.innerHTML = "";


// btn.onclick = function(){
//     alert("first click");
//     // console.log(this);
// }

// btn.addEventListener("click",function(){
//     alert("listener click")
// })
// btn.addEventListener("click",function(){
//     alert("listener click 2")
// })

// btn.onclick =() => alert("second click");

// btn.onclick = function(){
//     // this.style.backgroundColor = "red";
//     // this.style.border = "1px solid black";
//     // this.style.color = "white";
//     // this.style.borderRadius = "10px";

//     this.style = `background-color : yellow;
//                 border : 1px solid green;`;
// } 

// let btns = document.querySelectorAll('.btn');

// [...btns].forEach(btn=>{
//     btn.onclick = function(){
//         [...this.parentElement.children].forEach(elem=>{
//             elem.style.opacity = 1;
//         });
//         this.style.opacity=0;
//     }
// });

// let btn = document.querySelector("#button5");
// btn.onclick = function(){
//     alert(this.previousElementSibling.innerText);
// }

// let btns = document.querySelectorAll('.btn');
// [...btns].forEach(btn=>{
//     btn.onclick = function(){
//         in1.value = this.parentElement.nextElementSibling.innerText + " " + this.innerText;
//     }
// });


// let img = document.querySelector("img")

// let showPokemon = (function(){
//     let src="";
//     return x => {
//         if(x < 10){
//             src = "00"+x;
//         }
//         else if(x < 100){
//             src = "0"+x;
//         }
//         else{
//             src = x;
//         }
//         img.setAttribute("src",`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${src}.png`)
//     }
// })()
// pokemons.onclick = function(){
//     showPokemon(this.getAttribute("next-number"));
//     this.setAttribute("next-number",Number(this.getAttribute("next-number"))+1)
// } 


// pokemons.className += " Semi";

// console.log(pokemons.classList);

pokemons.onclick = function(){
    div.classList.replace("bg-orange","bg-dark");
} 

