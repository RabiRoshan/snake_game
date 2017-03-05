/**
 * Created by Rabi on 22-08-2016.
 */
var container = document.getElementById("container");
var buzz=5000;
var sheriff = document.getElementsByClassName("box");
var oggy;
var xxx=5000;
var dir=39;
var boxes = function() {
    var x = "";
    for(var i=1;i<=10000;++i){
        x = x + "<div class=\"box\" id=\"b" + i +" \" ></div>"
    }
    container.innerHTML = x;
    oggy = sheriff[1];
}

boxes();

var mov = function(){
    switch(dir) {
        case 37:
            if (dir != 39) {
                if (oggy.classList != null) {
                    oggy.classList.remove("boxed");
                }
                if (xxx == buzz) {
                    --xxx;
                    oggy = sheriff[xxx];
                }
                oggy.classList.add("boxed");
                buzz = xxx;
            }
            break;
        case 38:
            if (dir != 40) {
                if (oggy.classList != null) {
                    oggy.classList.remove("boxed");
                }
                if (xxx == buzz) {
                    xxx = xxx - 100;
                    if (xxx < 0)
                        xxx = xxx + 9900;
                    oggy = sheriff[xxx];
                }
                oggy.classList.add("boxed");
                buzz = xxx;
            }
            break;
        case 39:
            if (dir != 37) {
                if (oggy.classList != null) {
                    oggy.classList.remove("boxed");
                }
                if (xxx == buzz) {
                    ++xxx;
                    oggy = sheriff[xxx];
                }
                oggy.classList.add("boxed");
                buzz = xxx;
            }
            break;
        case 40:
            if (dir != 38) {
                if (oggy.classList != null) {
                    oggy.classList.remove("boxed");
                }
                if (xxx == buzz) {
                    xxx = xxx + 100;
                    if (xxx > 10000)
                        xxx = xxx - 9900;
                    oggy = sheriff[xxx];
                }
                oggy.classList.add("boxed");
                buzz = xxx;
            }
            break;
        default :
            break;
    }
}

var direction = function(){
    dir = event.keyCode;
    setInterval(mov, 50);
}

addEventListener('keydown',direction);

