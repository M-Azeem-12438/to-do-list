
function onSubmit()
{
var UserName = document.getElementById("username").value;
for (let index = 0; index < UserName.length; index++) {
    if(UserName.slice(index,index + 1)==" ")
    {
        document.getElementById("error").innerHTML=" space not allow in name ";
    }
}


var UserPassword = document.getElementById("password").value;
for (let index = 0; index < UserPassword.length; index++)
 {
    if(UserPassword.length <= 5)
    {
        document.getElementById("passworde").innerHTML=" password should greater 5 characrter ";
    }
    if(UserPassword.length >= 12)
    {
        document.getElementById("passworde").innerHTML=" password should  less then 12 character";
    }
}
var Name = document.getElementById("name").value;
for (let index = 0; index < Name.length; index++)
 {
    if(!((/^[A-Za-z]+$/.test(Name)) ||Name.length==0))
    {
        document.getElementById("nameerror").innerHTML=" only alphabets allow ";
    }
}
var Code = document.getElementById("code").value;
for (let index = 0; index < Code.length; index++)
 {
    if(((/^[A-Za-z]+$/.test(Code)) ||Code.length==0))
    {
        document.getElementById("zipcode").innerHTML="in ZIP code  only number allow ";
    }
}
var Useremail = document.getElementById("email").value;
for (let index = 0; index < Useremail.length; index++) {
    if(!((/@/.test(Useremail)) ||Useremail.length==0))
    {
        document.getElementById("emailerror").innerHTML=" enter valid email address ";
    }
}
}