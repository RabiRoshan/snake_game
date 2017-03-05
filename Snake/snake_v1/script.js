var fun = function() {
   var box = document.getElementById("container");
   var x = "";
   for (var i = 1; i < 10001; ++i) {
      x = x + "<div class=\" boxes \" " + "id =b" + i + ">" + "</div>";
   }
   ;
   box.innerHTML = x;

   for (var i = 1; i < 16; i++) {
      var y = "b1";
      if (i < 10) y = "b46" + "0" + i;
      else y = "b461" + i;
      document.getElementById(y).classList.add("active");
   }

   var direction = 'r';

   var moveit = function () {

      var active = document.getElementsByClassName("active");

      switch (direction) {
         case 'r': for(var i=0;i<10;i++){
            var k = active[i];
            var l = k.id;
         }














      }
   }
   setInterval("moveit()",500);
}
