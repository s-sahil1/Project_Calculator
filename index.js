var numberStore = [];
var operatorStore = [];
var returnNumber;
var finalAnswer;
var input="";

//Showing the number clicked and storing it as a string in input
$(".numbers").click(function(event){
  var num = event.target.innerHTML;
  input = input + num.toString();
  $(".textarea").text(input);
});

//Showing the number clicked and storing it as a string in input
$(".operators").click(function(event){
  var opr = event.target.innerHTML;
  input = input + opr.toString();
  $(".textarea").text(input);

});

//erasing everything which is in input
$(".cancel").click(function(event){
  input = "";
  $(".textarea").text(input);
  returnNumber=0;
  finalAnswer=0;
  numberStore = [];
  operatorStore = [];
  input="";
});

//slicing the numbers and operators which are stored inside the input string
$(".equals").click(function(){
  var size = input.length;
  var j = 0;
  console.log(input);
  for(i=0 ; i<size ; i++){
    if(input.charAt(i) =='+' || input.charAt(i) =='-' || input.charAt(i) =='X' || input.charAt(i) =='/'){
      numberStore.push(parseFloat(input.slice(j,i)));
      operatorStore.push(input[i]);
      j=i+1;
    }

  }
  numberStore.push(parseFloat(input.slice(j,size)));

  console.log(numberStore);
  console.log(operatorStore);

  for(i=0; i<operatorStore.length; i++){

    if(i==0){
      returnNumber = calc(numberStore[i],numberStore[i+1],operatorStore[i]);
    }

    else{
      returnNumber = calc(returnNumber,numberStore[i+1],operatorStore[i]);
    }

  }

  $(".textarea").text(returnNumber);
  input=returnNumber.toString();
  returnNumber=0;
  finalAnswer=0;
  numberStore = [];
  operatorStore = [];



});

function calc(num1,num2,sign){
  if(sign == '+'){
    return num1+num2;
  }
  else if(sign == '-'){
    return num1-num2;
  }
  if(sign == 'X'){
    return num1*num2;
  }
  if(sign == '/'){
    return num1/num2;
  }
}
