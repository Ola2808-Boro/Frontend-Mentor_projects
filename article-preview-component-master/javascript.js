const show = function(){
    console.log("Click");
    
    if((click%2)!=0){
        option.style.opacity=1;
    }
    else{
        option.style.opacity=0;
    }
    click++;
}

const share= document.querySelector('.circle');
const option = document.querySelector('.option');
let click=1;
share.addEventListener('click',show);

