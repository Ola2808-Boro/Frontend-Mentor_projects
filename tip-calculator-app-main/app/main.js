const inputBills= [...document.querySelectorAll('input[type="text"]')];
const buttonsTip = [...document.querySelectorAll('button[type="submit"]')];
const btnReset = document.querySelector('button[type="reset"]');
const pNumbers= [...document.querySelectorAll('.number-p')];
const custom= document.querySelector('.custom');

let bill=0;
let tip=0;
let people=0;
let tipAmount=0;
let total=0;
let billFlaga= false;
let peopleFlaga= false;
let tipFlaga= false;



function Reset(){
  
    btnReset.addEventListener('click',()=>{
  
        pNumbers.forEach(pNumber=>{
            pNumber.textContent="$ 0.00";
        })
        inputBills.forEach(inputBill=>{
            inputBill.value=" $ 0.00";
            custom.value="Custom"
            inputBill.classList.remove('active-input');
        })
        buttonsTip.forEach(buttonTip=>{
            buttonTip.classList.remove('active-button')
        })
        bill=0;
        tip=0;
        people=0;
        tipAmount=0;
        total=0;
        billFlaga= false;
        peopleFlaga= false;
        tipFlaga= false;
        
    })
}


function checkButtons(){

    buttonsTip.forEach(buttonTip=>{
        buttonTip.addEventListener('click',(e)=>{
             tip = buttonTip.textContent;
             buttonTip.classList.toggle('active-button');
             
            })
               
         
    })
}
function checkCustom(){

    custom.addEventListener('input',(e)=>{
    
        tip =e.target.value;
        tip=parseFloat(tip,10);
    })
}   



function calculator(){

    tip=parseInt(tip,10);
    bill=parseFloat(bill,10);
    people=parseInt(people,10);
    tipAmount=bill*(10-0.1*tip)/people;
    total=bill/people;
    console.log(tipAmount);

    pNumbers.forEach(pNumber=>{

        if(pNumber.classList.contains('tip')){
            pNumber.textContent=tipAmount.toString();
        }
        else if(pNumber.classList.contains('total')){
            pNumber.textContent=total.toString();
        }
    })
   Reset();
}

function checkInputs(inputBill){
    // e.preventDefault();
  
    
    inputBill.addEventListener('input',(e)=>{
        
        console.log(e.target.value)
      
        inputBill.classList.add('active-input');
        const classNameInput1 = inputBill.classList.contains('people');
        const classNameInput2 = inputBill.classList.contains('bill');
        if((classNameInput1) && (e.target.value==0)){
        console.log("Error");
        const error=document.querySelector('.people').textContent="Error";
           
        }
        else if (classNameInput1){
  
            people=e.target.value;
            peopleFlaga=true;
        }
        else if(classNameInput2){
       
            bill=e.target.value;
            billFlaga=true;
        }
        
        if((billFlaga)&&(people)){
     
            checkButtons();
            checkCustom();
            calculator();
            Reset();
        }
    })
    

}

function beggining(){
    pNumbers.forEach(pNumber=>{
        pNumber.textContent="$ 0.00";
    })
}
beggining();
inputBills.forEach((inputBill)=>{inputBill.addEventListener('click',checkInputs(inputBill))});




