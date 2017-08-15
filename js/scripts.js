$(document).ready(function(){
  $("#userInput").submit(function(event){
    var number = $("#enteredNumber").val();
    var total = number
    for(i=number-1; i > 0; i= i-1){
      total = total * i;
    }
    alert(total);
  });
});
