
let person = {
    //key: value
    //Properties (Thuộc tính)
    name: "Gia Thiều",
    age: 19,
    school: "PTIT",
    curly: "Như phốc",
    //methods (Phương thức)
    eat: function(){
        console.log("Ăn nhồm nhoàm...");
    },
    flirt: function(){
        console.log("Chào em, anh đứng đây từ chiều....");
    }, 
    nhinThayHuyen: function(){
        console.log("Mắt sáng lên");
    },
    address: {
        number: 20,
        street: "Trần Phú",
        ward: "Văn Quán",
        district: "Hà Đông",
        city: "Hà Nội",
        zipcode: 100000,
    },
};

console.log("số nhà:",person.address.number);
console.log("Đường:",person.address.street);
console.log("Phường:",person.address.ward);
console.log("Quận:",person.address.city);
console.log("zipcode:",person.address.zipcode);

// //dot notation (.)
// person.height = 1.93;
// person.weight = "90kg";
// // console.log("Đối tượng person sau khi đc thêm height và weight:", person);

// //read

// // console.log(`Xin chào ${person.name}, bạn có ny chưa????`);
// // console.log(`Tocs của ${person["name"]} xoăn như ${person["curly"]}`);

// for(let key in person){
//     person[key];
//     // console.log(key, person[key]);
// }

// person.name = "Gia Thiều đz, học giỏi, nhà giàu nhất Nam Định";

// console.log(person);

// delete person.curly;

// console.log(person);


// for(let i = 0; i < student.length; i++){
//     console.log(`student thứ ${i} là:`, student[i]);
//     console.log(`id: `, student[i].id);
//     console.log(`student thứ ${i} là:`, student[i]);
// }
// let friend = {
//     name: "Lê Quân"
//     age: 18,
//     school: "Mikhail Vasilyevich Lomonosov"
//     curly: "Như ngất",
//     eat: function(){
//         console.log("Hết lọ hành....");
//     },
//     flirt: function(){
//         console.log("Em ăn cơm chưa....");
//     },
//     nhinThayGai: function(){
//         console.log("Mắt sáng lên");
//     },

// };

// let student1 = {
//     name: "Hiệp gà",
//     age: 18,
//     grade: "good"
// }

// function Student(name,age,grade){
//     // this.name = name;
//     // this.age = age;
//     // this.grade = grade;
//     // this.introduce = function(){
//     //     console.log(this);
//     //     console.log(`Hello, muy name is ${this.name}`);
//     // };
// }
// class Student{
//     constructor( name, age, grade){
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }
//     introduce(){
//         console.log(`Hello my name is ${this.name}. I'm ${this.age} year old.`);
//     }
// }

// let student1 = new Student("Khánh Dương",20);
// let student2 = new Student("Mạnh Dương",18);
// let student3 = new Student("Khắc Hưng",28);

// student1.introduce();
// student2.introduce();
// student3.introduce();

// let student1 = new Student("Khánh Dương",18,"good");
// let student2 = new Student("Mạnh Dương",19,"stupid");
// let student3 = new Student("Khắc Hưng",20,"nomal");

// //. (dot notation);
// //truy xuất vào phương thức và thuộc tính của 1 đối tượng

// console.log("Student 1", student1);
// console.log("Student 2", student2);
// console.log("Student 3", student3);

// student1.introduce();
// student2.introduce();
// student3.introduce();

// đối tượng lồng đối tượng( nexted object)

