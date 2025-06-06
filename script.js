const Bar = document.getElementById("Bar");
const Header = document.getElementById("Header");
try{
    const typed = new Typed("#typedWord",
        {
            strings:["Electrical Consultancy","Electrical Panel Fabrication","Fire Fighting System","Electrical Goods"],
            typeSpeed: 50,
            backSpeed:50,
            loop:true,
            smartBackspace:false,
            autoInsertCss: false,
        }
    );
    }
catch(er)
{
    console.error(er);
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

const ContactBtn = document.getElementById("Contact");
const GetAQuoteBtn = document.getElementById("GAQ");
const GA =document.querySelector("#GAQ a");

ContactBtn.addEventListener("mouseover",()=>{
    GetAQuoteBtn.style.backgroundColor="white";
    GA.style.color="black";
});
ContactBtn.addEventListener("mouseout",()=>{
    GetAQuoteBtn.style.backgroundColor="black";
    GA.style.color="white";
});
GetAQuoteBtn .addEventListener("mouseover",()=>
{
    GetAQuoteBtn.style.backgroundColor="white";
    GA.style.color="black";
})
GetAQuoteBtn .addEventListener("mouseout",()=>
{
    GetAQuoteBtn.style.backgroundColor="black";
    GA.style.color="white";
})

const ContactForm = document.getElementById("Contact-Form");
ContactBtn.addEventListener("click",(e2)=>
{
    ContactForm.classList.add("CFActive");
})
const closeForm = document.getElementById("closeForm");

closeForm.addEventListener("click",()=>
{
    ContactForm.classList.remove("CFActive");
})


