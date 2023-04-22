var email="abhishekrajput.ind@gmail.com"
var pass="123"
var form=document.forms

function loginpage()
{
    var userDefEmail=document.getElementById("email").value
    var userDefPassword=document.getElementById("password").value
    var divbor=document.getElementsByClassName("borderdiv")

    if(email!=userDefEmail && pass!=userDefPassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
        divbor[0].style.borderColor="red"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="email and password is wrong"
    }

    else if(email==userDefEmail && pass!=userDefPassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(201,0,134),red)"
        divbor[0].style.borderColor="royalblue"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="password is wrong"
    }
    else if(email!=userDefEmail && pass==userDefPassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
        divbor[0].style.borderColor="red" 
        divbor[1].style.borderColor="royalblue"
        document.getElementById("result").innerHTML="email is wrong"
    }

    else{
        form[0].action="./html/technology.html"
        form[0].elements[2].type="submit"
    }

}

function visible()
{
    form[0].elements[1].type="text"
}