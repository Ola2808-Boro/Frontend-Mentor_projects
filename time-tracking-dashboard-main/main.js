const switchOptions = document.querySelectorAll('.switch-time');
const main = document.querySelector('main');

async function getTime(time){

   const responseData= await fetch("./data.json").then(response => {
   return response.json();
   });
   console.log(responseData);

   showTime(responseData,time);
}
function showTime(responseData,time){

   console.log('Tyle wynosi time ' + time);
   main.innerHTML='';
   responseData.forEach(item=>{
      const div = document.createElement('div');
      div.classList.add('item');

      if(time === 'daily'){
         div.innerHTML=`
         <div class="info">
            <h2>${item.title} <span class="options"><img src="images/icon-ellipsis.svg" alt="ellipsis" class="dot"></span></h2>
            <span class="time">${item.timeframes.daily.current}hrs</span>
            <h3>Last week: <span class="last-week-time">${item.timeframes.daily.previous}hrs</span></h3>
        </div>
      `
      }
      else if(time === 'weekly'){
         div.innerHTML=`
         <div class="info">
            <h2>${item.title} <span class="options"><img src="images/icon-ellipsis.svg" alt="ellipsis" class="dot"></span></h2>
            <span class="time">${item.timeframes.weekly.current}hrs</span>
            <h3>Last week: <span class="last-week-time">${item.timeframes.weekly.previous}hrs</span></h3>
        </div>
      `
      }
      else{
         div.innerHTML=`
         <div class="info">
            <h2>${item.title} <span class="options"><img src="images/icon-ellipsis.svg" alt="ellipsis" class="dot"></span></h2>
            <span class="time">${item.timeframes.monthly.current}hrs</span>
            <h3>Last week: <span class="last-week-time">${item.timeframes.monthly.previous}hrs</span></h3>
        </div>
      `
      }
     
      div.setAttribute('id',addId(item.title));
      main.appendChild(div);
   })

}
function checkOption(text){

   if(text === "Daily"){
      return 'daily';
   }
   else if(text === 'Weekly'){
      return 'weekly';
   }
   else if(text ==='Monthly'){;
      return 'monthly'
   }
   else{
      return ;
   }
}
function addId(title){

   console.log(title)
   if(title==='Work'){
      return 'work';
   }
   else if(title==='Play'){

      return 'play';
   }
   else if(title==='Study'){

      return 'study';
      
   }
   else if(title==='Exercise'){

      return 'exercise';
      
   }
   else if(title==='Social'){

      return 'social';
      
   }
   else if(title==='Self Care'){

      return 'self-care';
      
   }
   else{
      return;
   }
}

function start(){
   getTime('monthly');
}
switchOptions.forEach(option=>{
   
   if(!option.classList.contains('clicked')){
      option.addEventListener('click',(event)=>{

         event.preventDefault();
         const text = option.innerHTML;
         switchOptions.forEach(option=>{
            if(option.textContent!==text){
               option.classList.remove('clicked');
            }
         })
         option.classList.add('clicked');
         const time = checkOption(text)
         getTime(time);
         
   
      })
   }
   
})

start();

