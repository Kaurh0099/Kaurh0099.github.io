function showMessage()
{
    
    let message = "Sorry, there is no space"
    alert(message);
}

document.getElementById('hoverbutton').onmouseover = function() {
    document.getElementById('hoverbutton').style.background = 'lightgreen';
}

document.getElementById('hoverbutton').onmouseleave = function() {
    document.getElementById('hoverbutton').style.background = 'steelblue';
}

{
let count=0;
document.getElementById('ButtonCounter').onclick = function() {
    count = count + 1;
    document.getElementById('counter').innerHTML = 'Count:' + count;
}
}


let incrementcount = 1;
        
function incrementing() {
    incrementcount++;
    const counterElement = document.getElementById('counter');
    counterElement.textContent = incrementcount;
    
    if (count % 2 == 0) {
        counterElement.style.color = "darkred";
    } else {
        counterElement.style.color = "white"; 
    }
}


function showMany()
{
    for(let i=1;i<=10;i=i+1)
    {
        alert("Don't stop me ! You clicked me" + i + "times")
    }
}
function changeColor()
{
   const button = document.getElementById("changecolor");
   button.style.backgroundColor="darkred";
}
