const body = document.querySelector('body')
function load()
{
   remove(body)
   body.classList.add('bgimg1');
   document.getElementById("body").style.backgroundSize='cover';
}
function display_starters()
{
   remove(body)
   body.classList.add('bgimg0');
   document.getElementById("body").style.backgroundSize='cover';
   
   dis();
   document.getElementById("starters").style.backgroundColor="darkgreen";
   disp();
   document.getElementById("container1").style.display="block";
   
}
function south(){
   remove(body)
   body.classList.add('bgimg8');
   document.getElementById("body").style.backgroundSize='cover';
   dis();
   document.getElementById("south").style.backgroundColor="darkgreen";
   disp();
   
   document.getElementById("container2").style.display="block";
   


}
function italian()
{
   remove(body)
   body.classList.add('bgimg4');
   document.getElementById("body").style.backgroundSize='cover';
   dis();
   document.getElementById("italian").style.backgroundColor="darkgreen";
   disp();
   
   document.getElementById("container3").style.display="block";

}
function chinese()
{
   remove(body)
   body.classList.add('bgimg6');
   document.getElementById("body").style.backgroundSize='cover';
   dis();
   document.getElementById("chinese").style.backgroundColor="darkgreen";
   disp();
   document.getElementById("container4").style.display="block";
  
   
  
}

function north()
{
   remove(body)
   body.classList.add('bgimg7');
   document.getElementById("body").style.backgroundSize='cover';
   dis();
   document.getElementById("north").style.backgroundColor="darkgreen";
   disp();
   
   document.getElementById("container5").style.display="block";
   
   
}
function beverages()
{
   remove(body)
   body.classList.add('bgimg3');
   document.getElementById("body").style.backgroundSize='cover';
   dis();
   document.getElementById("beverages").style.backgroundColor="darkgreen";
   disp();
   document.getElementById("container6").style.display="block";
   
}
function desert()
{
   remove(body)
   body.classList.add('bgimg5');
   document.getElementById("body").style.backgroundSize='cover';
   dis();
   document.getElementById("desert").style.backgroundColor="darkgreen";
   disp();
  
   document.getElementById("container7").style.display="block";
}

function dis()
{
   document.getElementById("starters").style.backgroundColor="rgb(68, 199, 35)";
   document.getElementById("south").style.backgroundColor="rgb(68, 199, 35)";
   document.getElementById("italian").style.backgroundColor="rgb(68, 199, 35)";
   document.getElementById("chinese").style.backgroundColor="rgb(68, 199, 35)";
   document.getElementById("beverages").style.backgroundColor="rgb(68, 199, 35)";
   document.getElementById("north").style.backgroundColor="rgb(68, 199, 35)";
   document.getElementById("desert").style.backgroundColor="rgb(68, 199, 35)";
    
}
function disp()
{
   document.getElementById("foot").style.display="block";
   document.getElementById("container2").style.display="none";
   document.getElementById("container3").style.display="none";   
   document.getElementById("container4").style.display="none";
   document.getElementById("container5").style.display="none";
   document.getElementById("container6").style.display="none";
   document.getElementById("container7").style.display="none";

   document.getElementById("container1").style.display="none";
   
}
const remove = (element) => {
   element.classList.remove('bgim0')
   element.classList.remove('bgim1')
   element.classList.remove('bgim3')
   element.classList.remove('bgim4')
   element.classList.remove('bgim5')
   element.classList.remove('bgim6')
   element.classList.remove('bgim7')
   element.classList.remove('bgim8')
}