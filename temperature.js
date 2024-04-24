const input = document.querySelector("#textbox");
const celsius = document.querySelector("#toCelsius");
const Fahrenheit = document.querySelector("#toFahrenheit");
const submit = document.querySelector("#submit")
const result = document.querySelector("#result")

submit.addEventListener('click',function(){
    if(celsius.checked == true){
        temp = Number(input.value);
        temp = (temp - 32) * (5/9)
        result.textContent = temp + " ⁰C"
    }
    else if (Fahrenheit.checked == true){
        temp = Number(input.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + " ⁰F"
    }
    else{
        result.textContent = "please check a check-box"
    }
})