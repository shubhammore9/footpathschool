window.onload = choosePic;
var ele= document.getElementById("jumboId");


function choosePic() {
    var myPix = new Array("/stimg/banar.jpg","/stimg/fsw2.jpg","/stimg/fsw3.jpg");
     var randomNum = Math.floor(Math.random() * myPix.length);
     var el= document.getElementsByClassName("ju");
     var im= "url(\'"+ new String(myPix[randomNum]) + "\')";
     ele.style.backgroundImage = im;
}