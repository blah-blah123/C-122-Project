screen_width= 0; 
screen_height= 0;
apples= "";
speak_data = "";

to_number="";
to_number= Number(content);
draw_apple="";

x=0;
y=0;
i=1;

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML= "System is listening, please speak.";
    recognition.start();
}

recognition.onresult= function(event)
{
    console.log(event);
    var content= event.results[0][0].transcipt;
    document.getElementById("status").innerHTML= "The speech has been recognised as: " + content;
    to_number= Number(content);
    console.log(to_number);
    }

    function setup(){
        canvas= createCanvas(900,600);
        canvas.position(Math.floor(Math.random(0 , 150)));
    }

    function draw(){
        if (draw_apple == "set"){
            radius= Math.floor(Math.random() * 100);
            circle(x , y, radius);
            document.getElementById("status").innerHTML= "Apple is being drawn";
            draw_apple= "";
        }
    
    }

    function speak(){
        
    }
    
// Define a variable speak_data to hold the speech which we want the system to speak and set it to empty.
// Then define a variable to_number to hold the number said by the user and set it to empty.



if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML= "Started drawing an apple!";
    draw_apple= "set";
    screen_width= window.innerWidth;
}
else{
    document.getElementById("status").innerHTML="The speech has not recognized a number";
}


function preload(){

}



    if(content == "draw "){
        x= Math.floor(Math.random() * 900);
        y= Math.floor(Math.random() * 600);
       
    }

for(var i=1; i <= to_number; i++){
    x= Math.floor(Math.random() * 700);
    y= Math.floor(Math.random() * 600);
    image(apples , x , y , 50 , 50);
}
