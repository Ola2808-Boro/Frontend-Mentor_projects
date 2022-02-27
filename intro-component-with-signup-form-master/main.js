const inputs = [...document.querySelectorAll("input[name='form']")];
const button = document.querySelector("input[type='submit']");
const freePeriod = document.querySelector(".buttonfree");
let flaga = false;
const check =()=>{
    inputs.forEach((input)=>{
        if(input.textContent===""){
            flaga=true;
            console.log(flaga);
            input.classList.toggle('active-img');
            
        }
        
    })
}
const sendForm = (e)=>{
    e.preventDefault();
    check();
    freePeriod.classList.toggle('active-button');
    
}
button.addEventListener('click',sendForm);

