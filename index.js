
let text = document.getElementById('text');
// ADD THE SKILL
let skills = ['Android','Web','Blockchain','Artificial Intelligence','Ios'];
// TO ADD MORE ANIMATIONS , JUST ADD THE NAME OF THE ANIMATION HERE
let animations = ['fadeIn','zoomIn'];
let index = 0;
text.innerText = skills[index];
text.className = "text";
setInterval(()=>{
    index++;
    let index_anim = Math.floor(Math.random()*animations.length);
    if(index>=skills.length){
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
        console.log('t')
        document.getElementById('next-btn').style.visibility = "hidden"
    }
    if(window.scrollY<5){
        document.getElementById('next-btn').style.visibility = "visible"
    }
})

// FOR ADDING ANIMATION WITH SCROLL (BUT I DONT LIKED IT SO COMMENTING THAT OUT)
// let p1 = false;
// let p2 = false;
// let p3 = false;
// let p4 = false;
// document.addEventListener('scroll',handler);
// function handler(){
//         if(window.scrollY>5){
//             document.getElementById('next-btn').style.visibility = 'hidden';
//             document.getElementById('top-btn').style.visibility = 'visible';
//         }
//         if(window.scrollY<200){
//             document.getElementById('next-btn').style.visibility = 'visible';
//             document.getElementById('top-btn').style.visibility = 'hidden';
//         }
//         if(document.getElementById('pro1').getBoundingClientRect().top<=window.innerHeight+10 && !p1){
//             document.getElementById('pro1').style.visibility = "visible";
//             document.getElementById('pro1').classList.add('pro1');
//             p1 = true;
           
//         }
//         if(document.getElementById('pro2').getBoundingClientRect().top<=window.innerHeight+10 && !p2){
//             document.getElementById('pro2').style.visibility = "visible";
//             document.getElementById('pro2').classList.add('pro2');
//             p2 = true;
//         }
//         if(document.getElementById('pro3').getBoundingClientRect().top<=window.innerHeight+10 && !p3){
//             document.getElementById('pro3').style.visibility = "visible";
//             document.getElementById('pro3').classList.add('pro1');
//             p3 = true;
//         }
//         if(document.getElementById('pro4').getBoundingClientRect().top<=window.innerHeight+10){
//             document.getElementById('pro4').style.visibility = "visible";
//             document.getElementById('pro4').classList.add('pro2');
//             document.removeEventListener('scroll',handler);
//         }
       
//     }
