
function check(Fullname, Email, Password, Age, Gender) {
    if (Fullname.length < 6) {
        console.log("Fullname must be more than 6 characters");
    }
    if (Email.indexOf("yahoo") === -1 && Email.indexOf("gmail") === -1) {
        console.log("Email must contain yahoo or gmail");
    }
    else 
    {
        console.log("Email is valid");
    }
    if (Password.length < 6) {
        console.log("Password must be more than 6 characters");
    }
    else 
    {
        console.log("Password is valid");
    }
    if (Age < 18) {
        console.log("Age must be more than 18");
    }
    else
    {
        console.log("Age is valid");
    }
    if (Gender !== "male" && Gender !== "famale") {
        console.log("Gender must be male or famale");
    }
    else
    {
        console.log("Gender is valid");
    }
}

module.exports = {check};