function showMessage()
{
    let name = "One";
    let age = 5;
    let school = "SADT";
    let message = "hI" +name +", your school is "+age
    alert(message);
}
function checkAge()
{
    let age = 17;
    if( age>=18)
    {
        alert("Hey u can enter the party you match our mini requirenments")
    }
    else {
        alert("Hey u are too young")
    }
}
function showMany()
{
    for(let i=1;i<=10;i=i+1)
    {
        alert("Don't stop me ! You clicked me" +1 +"times")
    }
}
function changeColor()
{
    document.getElementById("main").style.color="blue"
}
function changeImage()
{
document.getElementById("catdog").src ="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
}