
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
    if(window.scrollY>=document.getElementById('pro1').offsetHeight){
        document.getElementById('pro1').style.visibility = "visible";
        document.getElementById('pro1').classList.add('pro1');
    }
    if(window.scrollY>document.getElementById('pro2').offsetHeight){
        document.getElementById('pro2').style.visibility = "visible";
        document.getElementById('pro2').classList.add('pro2');
    }
})