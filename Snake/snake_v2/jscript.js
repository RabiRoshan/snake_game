/**
 * Created by Rabi on 22-08-2016.
 */
var container = document.getElementById("container");
var buzz=5000;
var sheriff = document.getElementsByClassName("box");
var oggy;
var xxx=5000;
var boxes = function() {
    var x = "";
    for(var i=1;i<=10000;++i){
        x = x + "<div class=\"box\" id=\"b" + i +" \" ></div>"
    }
    container.innerHTML = x;
    oggy = sheriff[1];
}

boxes();

var test = function(){
    if(oggy.classList != null){
        oggy.classList.remove("boxed");
    }
    if(xxx==buzz){
        ++xxx;
        oggy= sheriff[xxx];
    }
    oggy.classList.add("boxed");
    buzz = xxx;
}

setInterval(test,100);