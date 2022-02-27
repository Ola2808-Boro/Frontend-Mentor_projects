const btn = document.querySelector('button');
const input = document.querySelector('input')
const divError = document.querySelector('.error');
const check = (e) =>{
    e.preventDefault();
    console.log(input.value);
    if(input.value===""){
    
        console.log("Jest pusty");
        divError.classList.toggle('active');
    }
    else{
       
    }
}
btn.addEventListener('click',check)