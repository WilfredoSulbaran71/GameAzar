// para la primera imagen:
var randomNumber1 = Math.floor(Math.random() * 3)+1; // 1-3

var randomImageSource = "imagen/image" + randomNumber1 + ".png"; // imagen/image1.png - imagen/image6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

//image1.setAttribute("src", randomImageSource);

/*var randomPlayer1 = Math.floor(Math.random * 3)+1; // 

var randomImage = "image" + randomPlayer1 + ".png";

var randomSource = "imagen/" + randomImage;

var figure1 = document.querySelectorAll("img")[0];

figure1.setAttribute("src", randomSource);*/

// para la segunda imagen

var randomNumber2 = Math.floor(Math.random() * 3)+1;

var randomImageSource2 = "imagen/image" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 == 1 && randomNumber2 == 2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 is Win!! 🚩";
    

}else if(randomNumber1 == 1 && randomNumber2 == 3){
    
    document.querySelector("h1").innerHTML = "🚩 Player 2 is Win!! 🚩";

}else if(randomNumber1 == 3 && randomNumber2 == 1){

    document.querySelector("h1").innerHTML = "🚩 Player 1 is Win!! 🚩";

}else if(randomNumber1 == 2 && randomNumber2 == 3){

    document.querySelector("h1").innerHTML = "🚩 Player 1 is Win!! 🚩"; 

}else if(randomNumber1 == 3 && randomNumber2 == 2 ){

    document.querySelector("h1").innerHTML = "🚩 Player 2 is Win!! 🚩"; 

}else if(randomNumber1 == 2 && randomNumber2 == 1){

    document.querySelector("h1").innerHTML = "🚩 Player 2 is Win!! 🚩";

}   
else{
    document.querySelector("h1").innerHTML = "Draw!!";
}