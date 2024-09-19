const output =document.querySelector(".output");
const AC=document.querySelector(".AC");
const DEL=document.querySelector(".DEL");
const vals =document.querySelectorAll(".a");
const equal =document.querySelector(".equal");

vals.forEach(vals => {
  
    vals.addEventListener("click",()=>
        {
            output.value += vals.value;
        })  
});

AC.addEventListener("click",() => {
output.value = "" ; 
 }
)
 
DEL.addEventListener("click",() => {
    output.value = output.value.slice(0,-1)  ; 
})

equal.addEventListener("click",() => {
    output.value = eval( output.value); 
})


 