const input = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('.error');

const check =()=>{
    
    console.log("Check");
        if(input.value===""){
          
            console.log("Error");
            div.textContent="Error";
            
        }
        else if(((input.value.includes("@wp.pl"))||( (input.value.includes("@gmail.pl"))))){
            console.log("Wysłane");
            div.textContent="Wysłane";
        }
        else{
            console.log("Error");
            div.textContent="Error";
        }
       input.onfocus=function(){
           console.log("Input focus");
        div.textContent="";
       }
        
    }

const sendForm = (e)=>{
    e.preventDefault();
    check();
    
    
}
btn.addEventListener('click',sendForm);
