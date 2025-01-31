const celsiusElem = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");
const tempType1 = document.querySelector("#temp-type1");
console.log(tempType);
console.log(tempType1);
window.addEventListener("load", () => {degree.value = ""; celsiusElem.innerHTML = "";});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convert();
});

function convert() {
  let inputValue = degree.value;
  
  if (tempType1.value === "celsius") 
  {
      if (tempType.value === "fahrenheit") 
      {
          const Celsiustofahrenheit = (inputValue*(9/5))+32;
          celsiusElem.innerHTML = `${Celsiustofahrenheit.toFixed(3)} &deg;f`;
      }
      else if(tempType.value === "kelvin") 
      {
          const Celsiustokelvin = inputValue/1.0+273.15;
          celsiusElem.innerHTML = `${Celsiustokelvin.toFixed(3)} &deg;K`;
      }
      else
      {
        celsiusElem.innerHTML = `${inputValue} &deg;C`;       
      }
  }else if(tempType1.value === "fahrenheit") 
  {
      if (tempType.value === "celsius") 
      {
          const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
          celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
      } else if (tempType.value === "kelvin") 
      {
          const Fahrenheitokelvin = ((inputValue-32)*(5/9))+273.15;
          celsiusElem.innerHTML = `${Fahrenheitokelvin.toFixed(3)} &deg;K`;
      }
      else
      {
        celsiusElem.innerHTML = `${inputValue} &deg;F`;
        }     
  }
  else{
    if(tempType.value === "celsius") 
      {
          const kelvinToCelsius = inputValue -273.15;
          celsiusElem.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;c`;
      } else if (tempType.value === "fahrenheit") 
      {
          const kelvintofahrenheit = ((inputValue-273.15)*(9/5))+32;
          celsiusElem.innerHTML = `${kelvintofahrenheit.toFixed(3)} &deg;f`;
        }
        else
        {
          celsiusElem.innerHTML = `${inputValue} &deg;K`;
        }
  }
}