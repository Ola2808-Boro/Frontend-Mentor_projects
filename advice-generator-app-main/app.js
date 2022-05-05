const btn = document.getElementById('shape-circle');
const advice = document.getElementById('advice');
const h3 = document.getElementById('number')
const h1 = document.getElementById('text')

const APIURL = 'https://api.adviceslip.com/advice';


btn.addEventListener('click',()=>{

    console.log("klikam");
    getAdvice();
})


async function getAdvice(){


    const response = await fetch(APIURL,{
        method:'GET',
    });
    const data = await response.json();
    console.log(data);

    showAdvice(data);
}

function showAdvice(data){

    
    console.log(data.slip.id);
    
    h3.innerHTML=
    `
    <h3 id="number">Advice #${data.slip.id}</h3>
    `;
    h1.innerHTML=`"${data.slip.advice}."`;
 
  
}



