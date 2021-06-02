
function logIn(){

    let student ={

        Angella:{ 
        age:22,
        country:"Uganda",
        tribe:"Muganda",
        religion:"Christian"
    },
    
        Olga:{ 
            age:20,
            country:"Uganda",
            tribe:"Munyoro",
            religion:"christian"

        },
        Daisi:{
            age:23,
            country:"Kenya",
            tribe:"Luyah",
            religion:"Pentacostal"
        },
        Belyse:{ 
            age:21,
            country:"Rwanda",
            tribe:"Kinyarwanda",
            religion:"Catholic"
        }
        
    } 
    

var  demo = document.getElementById("demo").value; 
let login = demo
let logins = student[login]
if (logins == undefined){ 
     document.getElementById('output').innerHTML = "<h1> Sorry, we don't have details for that user.<hr>"
    // console.log(document.getElementById("output").innerHTML = `${logins.age} , ${logins.country}, ${logins.tribe}, ${logins.religion}`);

}else{ 
    // document.getElementById('output').innerHTML = "<h1> Sorry, we don't have details for that user.<hr>"
console.log(document.getElementById("output").innerHTML = `${logins.age} , ${logins.country}, ${logins.tribe}, ${logins.religion}`);

}}