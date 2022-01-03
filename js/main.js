let num1 = 2;
let num2 = 5;

function compareNumbers(number1, number2) 
{
    if (number1 > number2){
        return number1;
    } 
    else if(number2 > number1)
    {
        return number2;
    }
    else
    return "Liczby są równe";   
}   

console.log(compareNumbers(num1, num2));
