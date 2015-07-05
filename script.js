backgroundImage = "http://cdn.history.com/sites/2/2013/11/new-york-empire-state-1.jpg";
backgroundPositionX = 0;
backgroundPositionY = 200;

window.onload = function(){
    console.log("Trello extension loaded");

    document.getElementsByTagName('body')[0].style.backgroundImage = "url(" + backgroundImage + ")";
    document.getElementsByTagName('body')[0].style.backgroundPositionX = backgroundPositionX + "px";
    document.getElementsByTagName('body')[0].style.backgroundPositionY = "-" + backgroundPositionY + "px";
    document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat";

    /*
    convertImgToBase64(backgroundImage, function(base64Img){
        document.getElementsByTagName('body')[0].style.backgroundImage = base64Img;
    });*/
};