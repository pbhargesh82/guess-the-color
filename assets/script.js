var answerDisplay = document.getElementById("colorValue");
// console.log(answerDisplay);

var result = document.getElementById("result");

// fetch all color divs using classname
var colors = document.getElementsByClassName("colorBtn");


resultTrue.style.display = "none";
resultFalse.style.display = "none";
// generating random values for red, green, blue
function makeColor() {
    return Math.round(Math.random()*255);
}

function startGame() {

    // genrating random answer
    var answer = Math.round(Math.random() * (colors.length - 1));
    console.log(answer);

    // loop over all divs to assign them diffrent rgb values
    for (var i = 0; i < colors.length; i++) {
        var red = makeColor();
        var green = makeColor();
        var blue = makeColor();
        
        // var body = document.getElementsByTagName("body");
    
        setColor(colors[i], red, green, blue);
        
        // displaying result
        console.log(colors[i]);
        colors[i].addEventListener("click", function(){
            if (this === colors[answer]) {
                resultTrue.style.display = "inline-block";
                resultFalse.style.display = "none";
                resultTrue.innerHTML = "Correct!";
                // document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
            } else {
               
                resultFalse.style.display = "inline-block";
                resultTrue.style.display = "none";
                resultFalse.innerHTML = "Wrong answer! Guess again!";
                document.body.style.backgroundColor = "#ffffff";

            }
            
        });
         
    }
    
    // display RGB value to define answer
    document.getElementById("colorValue").innerHTML = "RGB: (" + red + ", " + green + ", " + blue + ")";

}

// function to chnage background color of the div
function setColor(color, red, green, blue) {
    color.setAttribute('style',
    'background-color: rgb('+ red +','+ green +','+ blue +');'
   );
}



// reset game
startGame();

document.getElementById('resetBtn').addEventListener("click", startGame);

