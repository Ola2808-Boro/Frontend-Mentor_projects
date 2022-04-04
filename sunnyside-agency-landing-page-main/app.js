const arrow = document.querySelector(' .arrow');
const section1 = document.querySelector('.services');
const menu_hamburger = document.querySelector('.img-menu');
const triangle = document.querySelector('.triangle');
const div = document.querySelector('.menu-hamburger-show')
;arrow.addEventListener('click',()=>{
    console.log("Click")
    section1.scrollIntoView({
        behavior: "smooth", block: "start", inline: "nearest"
    });
})

if(window.innerWidth<=376){
    
    console.log(":Kuzwa")
    menu_hamburger.addEventListener('click',()=>{
    
        console.log("Click");
       createElement();
    })
}
function createElement(){
  
   if(div.classList.contains('hidden')){
    div.classList.remove('hidden')
    triangle.classList.remove('hidden')
    
   }
   else{
    div.classList.add('hidden');
    triangle.classList.add('hidden');
   }
 
}