const SS2 = document.querySelectorAll(".Service-Section-2 section")
const SBtn = document.querySelectorAll(".slideBtn button")
let count = 0;
let intervalId=null;

document.addEventListener("DOMContentLoaded",startSlider);
function startSlider()
{
    if(SS2.length>0){
    SS2[count].classList.add('displayImage');
    SBtn[count].classList.add('Sbtn-a');
    intervalId=setInterval(next,4000);
    }
}
function showImage(counts)
{
    if(counts>=SS2.length)
    {
        count=0;
    }
    else if(counts<0)
    {
        count=SS2.length-1;
    }
    SS2.forEach(element=>
    {
        element.classList.remove("displayImage");
    }
    );
    SBtn.forEach(element1=>
    {
        element1.classList.remove("Sbtn-a");
    }
    );
    SS2[count].classList.add("displayImage");
    SBtn[count].classList.add('Sbtn-a');
}
function c1()
{
    clearInterval(intervalId);
    count=0;
    showImage(count);
}
function c2()
{
    clearInterval(intervalId);
    count=1;
    showImage(count);
}
function c3()
{
    clearInterval(intervalId);
    count=2;
    showImage(count);
}
function c4()
{
    clearInterval(intervalId);
    count=3;
    showImage(count);
}
function next()
{
    count++;
    showImage(count);
}
    Bar.addEventListener('click',(e)=>
    {
    const NavBar = document.getElementById("NavBar");
    const  barItem = document.getElementsByClassName("barItem");
    NavBar.classList.toggle('navActive');
    if(NavBar.classList.contains('navActive'))
    {
        Bar.classList.add('barActive');
    }
    else{
        Bar.classList.remove('barActive');
    }
});
