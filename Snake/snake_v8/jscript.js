/**
 * Created by Rabi on 5-3-2017.
 */
var container = document.getElementById("container");
var buzz=5000;
var sheriff = document.getElementsByClassName("box");
var oggy;
var xxx=5000;
var dir=39;
var tempDir;
var check1, check2;
var point;
var ran=0;
var pcount = 0;
var points = document.getElementById("printpoint");
var box_array = new Array();
var distance = 0;
var i=1;
var rtime = 1000;
var Distance = document.getElementById("distance");

var boxes = function() {
    var x = "";
    for(var i=1;i<=10000;++i){
        x = x + "<div class=\"box\" id=\"b" + i +" \" ></div>"
    }
    container.innerHTML = x;
    oggy = sheriff[1];
};

boxes();

var point = function(){
    sheriff[ran].classList.remove("point");
    ran = Math.random();
    ran= Math.floor(ran*10000);
    sheriff[ran].classList.add("point");
};

point();

var kill = function(){
    if(oggy.classList.contains("boxed")){
        if(!alert("You have scored "+pcount + " and travelled " +distance+" blocks"))
        window.location.reload();
    };
};



var mov = function(){
    switch(dir) {
        case 37:
            if (xxx == buzz) {
                --xxx;

                check1 = xxx % 100;
                check2 = buzz % 100;
                if (check1 == 99 && check2 == 00 || xxx<0) {
                    xxx=xxx+100;
                }

                oggy = sheriff[xxx];
                kill();
            }
            oggy.classList.add("boxed");
            buzz = xxx;
            break;
        case 38:
            if (xxx == buzz) {
                xxx = xxx - 100;
                if (xxx < 0)
                    xxx = xxx + 10000;
                oggy = sheriff[xxx];
                kill();
            }
            oggy.classList.add("boxed");
            buzz = xxx;
            break;
        case 39:
            if (xxx == buzz) {
                    ++xxx;

                    check1 = xxx % 100;
                    check2 = buzz % 100;
                    if (check1 == 00 && check2 == 99) {
                        xxx=xxx-100;
                    }

                    oggy = sheriff[xxx];
                    kill();
                }
                oggy.classList.add("boxed");
                buzz = xxx;
            break;
        case 40:
            if (xxx == buzz) {
                    xxx = xxx + 100;
                    if (xxx > 9999)
                        xxx = xxx - 10000;
                    oggy = sheriff[xxx];
                    kill();
            }
                oggy.classList.add("boxed");
                buzz = xxx;
            break;
        default :
            break;
    }

    distance++
    box_array[distance] =  oggy;
    Distance.innerHTML = distance;

    setTimeout(function(){
        box_array[i].className = "box";
        i++;
    },rtime);

    if(buzz == ran){
        rtime += 50;
        pcount++;
        points.innerHTML = pcount;
        point();
    }
};

interval = setInterval(mov, 50);

var direction = function(e){
    tempDir = e['keyCode'];
    switch (tempDir) {
        case 37:
            if (dir != 39)
                dir = tempDir;
            break;
        case 38:
            if (dir != 40)
                dir = tempDir;
            break;
        case 39:
            if (dir != 37)
                dir = tempDir;
            break;
        case 40:
            if (dir != 38)
                dir = tempDir;
            break;
        default :
            break;
    }
};

    interval;

addEventListener('keydown',direction);

