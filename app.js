const passbox =document.getElementById("password");

const length = 8;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxtz";
const number = "123456789";
const symbol = "*#$&%";
const allchar = uppercase+lowercase+number+symbol;

    function createpass() {
      let password ="";
      password += uppercase[Math.floor(Math.random()*uppercase.length)];
      password += lowercase[Math.floor(Math.random()*lowercase.length)];
      password += number[Math.floor(Math.random()*number.length)];
      password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
      password += allchar[Math.floor(Math.random()*allchar.length)];
    }
passbox.value=password;
 }
   function copypassword() {
     passbox.select();
     document.execCommand("copy");   
}