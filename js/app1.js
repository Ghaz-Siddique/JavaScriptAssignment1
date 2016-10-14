var num1, num2;
num1 = window.prompt("Enter the First Number", "");
num2 = window.prompt("Enter the second integer", "");
                                                
if(parseInt(num1, 10) > parseInt(num2, 10)) 
 { 
  document.write("Ans: The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
 }   
else
 if(parseInt(num2, 10) > parseInt(num1, 10)) 
 {
  document.write("Ans: The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
 else
  {
document.write("Ans: The values "+ num1+ " and "+num2+ " are equal.");
  }