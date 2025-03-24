const button = document.querySelectorAll(".button");
const displayCalc = document.querySelector(".display"); 

button.forEach(calcBut =>{
    calcBut.addEventListener("click",() =>
    {
        const tapBut = calcBut.textContent;
        if (calcBut.id ==="eraser"){
            displayCalc.value = '0';
            return;
        }

        if (calcBut.id==="back"){
            if (displayCalc.value.length === 1){
                displayCalc.value = '0';
                
            }else{
                displayCalc.value=displayCalc.value.slice(0,-1);
            }
            return
        }

        if (calcBut.id ==="equal"){
            try{
                displayCalc.value = (eval(displayCalc.value));
                
            }catch{
                displayCalc.value ="Error";
            }
            return;
            
        }
        

        
        if (displayCalc.value ==='0'||displayCalc.value ==='Error'){
            displayCalc.value = tapBut;
        }else {
            displayCalc.value += tapBut;
        }

        if (eval(displayCalc.value) === Infinity){
            displayCalc.value ="0";
        }

        
    })
}
)