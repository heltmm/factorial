$(document).ready(function(){
  $("#userInput").submit(function(event){
    event.preventDefault();
    var number = $("#enteredNumber").val();
    var total = number
    for(i=number-1; i > 0; i= i-1){
      total = total * i;
    }
    alert(total);
  });
  $("#palindroneForm").submit(function(event){
    event.preventDefault();
    var string = $("#words").val();

    var test = string.split("").reverse().join("");
    if (test === string){
      alert("Palindrone")
    }else{
      alert("Not palindrone")
    }

  });
});
