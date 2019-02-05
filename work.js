
var gameSpaces = document.querySelectorAll('td');
var current_player = "1";
var buttonClick = document.getElementsByTagName("button")
var userX = userX;
var user0 = user0;




// handler to handle
function clickedSquare(e) {
    console.log("clicked Square");
    if (current_player === 1 && e.target.innerHTML ==="")
    {
        e.target.innerHTML = "X";
        current_player = 2;
    }
    else if (e.target.innerHTML === "")
    {
        e.target.innerHTML = "O";
        current_player = 1;

    }
    // check for winner
    checkforwinner();

}

// Add a click event listener for each game space
for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].addEventListener('click', clickedSquare);
}

function clickresetfunction(e)
{
    console.log("clear")
}

