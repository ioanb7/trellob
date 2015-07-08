backgroundImage = "http://cdn.history.com/sites/2/2013/11/new-york-empire-state-1.jpg";
backgroundPositionX = 0;
backgroundPositionY = -200;

function run() {
    console.log("Trello extension loaded");

    document.getElementsByTagName('body')[0].style.backgroundImage = "url(" + backgroundImage + ")";
    document.getElementsByTagName('body')[0].style.backgroundPositionX = "" + backgroundPositionX + "px";
    document.getElementsByTagName('body')[0].style.backgroundPositionY = "" + backgroundPositionY + "px";
    document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat";
}

//we have to wait for their script to change the background back
window.onpopstate = history.onpushstate = function(e) {
    console.log("history change called");

    var times = 0;
    var interval = setInterval(function(){
        if (document.getElementsByTagName('body')[0].style.backgroundImage != "url(" + backgroundImage + ")")
            run();
        times++;

        if(times > 10) clearInterval(interval);
    }, 200);
};

run();