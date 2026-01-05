// VARIABLES FOR STUDENT RESULT PORTAL
let studentId;
let password;
let login_attempts;
let login_status;
const studentdb={
    "n2335":{
        name:"Aasritha",
        password:"12345",
        results:{
            web:90,
            Ior:20,
            CD:50,
            DBMS:80
        },
    },
    "n2345":{
        name:"Sweety",
        password:"54321",
        results:{
            web:100,
            Ior:80,
            CD:50,
            DBMS:90
        },
    },
    "n2356":{
        name:"Vomika",
        password:"98765",
        results:{
            web:70,
            Ior:10,
            CD:80,
            DBMS:50
        },
    },
};

// FUNCTIONS
function Formvalid(studentId, password) {
    return studentId!== "" && password!== "";
}
function showMessage(Invalid) {
    alert(Invalid);
}
function IsLoginvalidate(studentId,password){
    if(studentdb[studentId] && studentdb[studentId].password === password){ 
        return true;
    }
    return false;
}
function StudentResult(studentId) {
    result=studentdb[studentId].results;
    alert(
        "Login Successful!\n" +
        "Student Name:"+ studentdb[studentId].name+"\n"+
        // "\nResult:" + studentdb[studentId].results
        // "Web: " + studentdb[studentId].results.web + "\n" +
        // "IOR: " + studentdb[studentId].results.Ior + "\n" +
        // "CD: " + studentdb[studentId].results.CD + "\n" +
        // "DBMS: " + studentdb[studentId].results.DBMS
        "Web: " + result.web + "\n" +
        "IOR: " + result.Ior + "\n" +
        "CD: " + result.CD + "\n" +
        "DBMS: " + result.DBMS
    );
}

//Event Hnadler Funtion
function handleLogin(event){
    studentId=document.getElementById("studentId").value;
    password=document.getElementById("password").value;
    if(!Formvalid(studentId,password)){
        showMessage("Please fill in all fields.");
        return;
    }
    if(IsLoginvalidate(studentId,password)){
        StudentResult(studentId);
    }
    else{
        showMessage("Invalid Student ID or Password.");
    }
}

document.querySelector("form").addEventListener("submit", handleLogin);

window.addEventListener("load", function () {
    console.log("Student Result Portal loaded successfully");
});



