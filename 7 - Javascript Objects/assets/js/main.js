// const student = {
//     name:'Ali', 
//     surname: 'Aliyev',
//     age : 19,
//     'Avgerage Point': 75,
//     fullName : function(){
//         return this.name + " " + this.surname
//     },
//     mates : [
//         {name:"Vusal"},
//         {name:"Zulfiyya"},
//         {name:"Aysu"}
//     ],
//     car : false
// };
// student["Grup Name"] = "669a"

// let anar = new Object();
// anar.name = "Anar";
// anar["Phone Number"] = "+994705005055";
// console.log(anar);

// for (const key in student) {
//     console.log(key + " : " + student[key]);
// }
// for (const obj of student.mates) {
//     console.log(obj.name);
// }
// function Student(name, surname, age){
//     this.name = name,
//     this.surname = surname,
//     this.age = age;
//     this.fullName = function(){
//         return `${this.name} ${this.surname}`
//     }
// }

// let vusal = new Student("Vusal", "Abdurahmanov",20)
// vusal["Group Name"] = "689a2";
// console.log(vusal);
// class Student{
//     constructor(name, surname, age){
//         this.name = name,
//         this.surname = surname,
//         this.age = age;
//     };
//     FullName() {
//         return this.name + " " + this.surname;
//     }
// }
// let vusal = new Student("Vusal", "Abdurahmanov",25)
// console.log(vusal.FullName())

// class Person {
//     constructor(name){
//         this.name = name;
//     }
// }

// class Student extends Person{
//     constructor(name, group){
//         super(name);
//         this.group = group;
//     }
// }

// const aisha = new Student("Aisha","689a2");
// const vusal = new Student("Vusal","689a2");
// aisha.__proto__.hairColor = "brown";
// Person.prototype.toString = function(){return "Salam"};
// vusal.__proto__.hairColor = "black";
// console.log(aisha.toString());
// console.log(vusal);

// Array.prototype.toString = "aksdajsdkj";
// let arr = [1,2,3,4,5];
// console.log(arr.toString);