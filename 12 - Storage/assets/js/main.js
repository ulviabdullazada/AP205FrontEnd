// console.log(a);

// localStorage.setItem("telebe1","Guler")
// localStorage.setItem("telebe2","Semi")
// localStorage.setItem("a","Dunyamali")

// sessionStorage.setItem("telebe1","Guler")
// sessionStorage.setItem("telebe2","Semi")
// sessionStorage.setItem("a","Dunyamali")

// $(".button").click(function(){
//     // localStorage.removeItem("telebe1")
//     // localStorage.clear();
//     // $("p").text(localStorage.getItem("telebe1")+" "+localStorage.getItem("telebe2"))
// })
// $("p").text(localStorage.getItem("telebe1"))
// $("p").text(sessionStorage.getItem("telebe2"))


// document.cookie = "username=semi_amanov...!deyerlimvar; max-age=4"


let student = {
    name : "Mehemmed",
    surname : "Mustafayev",
    age:18
}
localStorage.setItem("student", JSON.stringify(student))


console.log(JSON.parse(localStorage.getItem("student")));
