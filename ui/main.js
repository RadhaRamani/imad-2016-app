/*console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="WOW!!!";
var img=document.getElementById("madi");
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}
img.onClick=function(){
    
   var interval=setInterval(moveRight,50);
};*/

var button=document.getElementById("counter");
button.onClick =function()
{
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
      
      if(request.readyState==XMLHttpRequest.DONE)  
      {
          if(request.status==200)
          {
              var counter=request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
          }
      }
    };
    request.open('GET','http://radharamani.imad.hasura-app.io/counter',true);
    request.send(null);
};