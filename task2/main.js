const {check} = require("./validation");
function Validation()
{
    // check with a non valid values
    console.log("check with a non valid values : ");
    check("temp" , "temp" , "temp" , 17 , "temp");
    // check with a valid values
    console.log("\ncheck with a valid values : ");
    check("mostafa_mahmoud","mostafa@gmail.com",123456789, 20 , "male");

}
Validation();