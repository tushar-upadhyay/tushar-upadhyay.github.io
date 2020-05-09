var text = document.getElementById('text');
var skills = ['Android','Web','Blockchain','Artificial Intelligence','Ios'];
var animations = ['fadeIn','zoomIn'];
var index = 0;
text.innerText = skills[index];
text.className = "text";
setInterval(()=>{
    index++;
    var index_anim = Math.floor(Math.random()*2);
    if(index>=5){
        index=0;
    }
    text.style.animationName = animations[index_anim];
    setTimeout(()=>{
        text.innerText = skills[index];
    },100)
   
    
},2500)
function showNext(){
    window.location.href = "#next"
   document.getElementById('next-btn').style.visibility = "hidden";
   document.getElementById('top-btn').style.visibility = "visible";
}
function showTop(){
    window.location.href = "#top"
    document.getElementById('next-btn').style.visibility = "visible";
    document.getElementById('top-btn').style.visibility = "hidden";
}

document.addEventListener('scroll',e=>{
    if(window.scrollY>5){
        document.getElementById('next-btn').style.visibility = 'hidden';
        document.getElementById('top-btn').style.visibility = 'visible';
    }
    if(window.scrollY<200){
        document.getElementById('next-btn').style.visibility = 'visible';
        document.getElementById('top-btn').style.visibility = 'hidden';
    }
    if(document.getElementById('pro1').getBoundingClientRect().top<=window.innerHeight+10){
        document.getElementById('pro1').style.visibility = "visible";
        document.getElementById('pro1').classList.add('pro1');
       
    }
    if(document.getElementById('pro2').getBoundingClientRect().top<=window.innerHeight+10){
        document.getElementById('pro2').style.visibility = "visible";
        document.getElementById('pro2').classList.add('pro2');
       
    }
    if(document.getElementById('pro3').getBoundingClientRect().top<=window.innerHeight+10){
        document.getElementById('pro3').style.visibility = "visible";
        document.getElementById('pro3').classList.add('pro1');
      
    }
    if(document.getElementById('pro4').getBoundingClientRect().top<=window.innerHeight+10){
        document.getElementById('pro4').style.visibility = "visible";
        document.getElementById('pro4').classList.add('pro2');
       
    }
})