var numfield1= document.getElementById('numfield1');
var numfield2= document.getElementById('numfield2');
var result= document.getElementById('result');
var form= document.getElementById('xiswhatpercentofy')
// numfield1.value="Dear Mr. Fantasy";       //To check if the script is connected to html
// result.innerText="play me a tune";
form.addEventListener('submit', function(event){
   if(!numfield1 && !numfield2){
     alert('Please enter the values in both the fields');
   }
   else{
     x= parseFloat(numfield1)
     y= parseFloat(numfield2)
     
     var answer= (x/y)*100;
     event.preventDefault();                          //Prevent default refresh behaviour of Event listener.
     result.innerText= "Answer: "+answer+"%";
   }
})
