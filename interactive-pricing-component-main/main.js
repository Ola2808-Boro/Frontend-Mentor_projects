const silder = document.getElementById('slider-range');
const spanValue= document.querySelector('.price-span');

spanValue.innerHTML=` $ ${silder.value}`;

silder.oninput=function(){
    console.log(this.value);
    spanValue.innerHTML=` $ ${this.value}`;
}

silder.addEventListener("input",function(){
    console.log("Ruszam myszka");
    let x = silder.value;
    x=(x/32)*100;
    console.log(x);
    let color = "linear-gradient(90deg, var(--Strong-Cyan)" +  x + "%, rgba(214,214,214) "+  x +"%)";
    console.log(color);
    silder.style.background=color;
    console.log(silder.style.backgroundColor=color)
})

