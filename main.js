/*global document*/
var clickToCalcule = document.getElementById('demo2');
var printResult = document.getElementById('demo3');

document.getElementById('demo1').addEventListener("keyup", function(event) {
    
    'use strict';
    
    if(event.keyCode === 13) {
        clickToCalcule.click();
    }
    
});

clickToCalcule.onclick = function () {
    
    'use strict';
    
    var num = document.getElementById('demo1').value;
    addNumbersTo(num);
    
    console.log(num)
    
};

function addNumbersTo(num) {
    
    'use strtict';
    var total = 0;
    var count = 1;
    
    if(num <= 0) {
        
        printResult.innerHTML = "Please Enter a Number Greater than 0";
        
    }else if(num > 100) {
        
        printResult.innerHTML = "Please Enter a Number Less than 100";
        
    }else if (num === "undefined") {
        
        printResult.innerHTML = "plase Enter A Number";
        
    }else{
        
        while(count <= num) {
            
            total = total + count;
            count++;
            
        }
        
        printResult.innerHTML = total;
       
    }
}