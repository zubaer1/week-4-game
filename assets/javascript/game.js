   
  
    $(document).ready(function(){
        var point = 0;
        var empty = 1;
        var counter= 105;


        $("#attack").on("click", function(){
          point += 5;
          $("#point").html(point);

          counter -= 5;
          $("#timer").html(counter);


          if (point == 100) {
            alert("Game over");
             $("#timer").html("Game over");
            location.reload();
          }else{
           // alert("Something wrong in browser");
          }




          });
          

          $("#one").on("click", function(){
            var img= $("<img>");
            img.attr({
                "id":"picThree",
                "src":"assets/images/03.jpg",  
                "alt":" ", 
                "style":"width:560px;height:330px"
            });
            if(empty){
            $("#Defender").html(img);
            empty= 0;
            $("#one").remove();
            }
            else{
              $("#enemy").html(img);
            }
          });





            $("#two").on("click", function(){
            var img= $("<img>");
            img.attr({
                "id":"picThree",
                "src":"assets/images/04.jpg",  
                "alt":" ", 
                "style":"width:560px;height:330px"

            });
            if(empty){
            $("#Defender").html(img);
            empty= 0;
            $("#two").remove();
            }
            else{
              $("#enemy").html(img);
            }
          });

            $("#three").on("click", function(){
            var img= $("<img>");
            img.attr({
                "id":"picThree",
                "src":"assets/images/05.jpg",  
                "alt":" ", 
                "style":"width:560px;height:330px"

            });
            if(empty){
            $("#Defender").html(img);
            empty= 0;
            $("#three").remove();
            }
            else{
              $("#enemy").html(img);
            }
          });
          
       
            $("#four").on("click", function(){
            var img= $("<img>");
            img.attr({
                "id":"picThree",
                "src":"assets/images/06.jpg",  
                "alt":" ", 
                "style":"width:560px;height:330px"

            });
            if(empty){
            $("#Defender").html(img);
            empty= 0;
            $("#four").remove();
            }
            else{
              $("#enemy").html(img);
            }
          });

          
    });


  var audio = $("#mysoundclip")[0];
      console.log(audio);
  $("#attack").click(function() {
      audio.play();
  });
   