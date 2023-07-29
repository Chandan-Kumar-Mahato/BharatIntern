const celsi = document.getElementById("celsius");
const fahr = document.getElementById("fahrenheit");
const kelv = document.getElementById("kelvin");

function calculateTemp(event)
{
    const inputValue = +event.target.value;
    switch (event.target.name) {
        case 'celsius':
            {
                fahr.value = ((inputValue*1.8)+32).toFixed(2);
                kelv.value = (inputValue+273);
                break;
            }
            case 'fahrenheit' :{
                celsi.value = (5*(inputValue-32)/9).toFixed(2);
                kelv.value = (5*(inputValue-32)/9+273.15).toFixed(2);
                break;
            }
            case 'kelvin' :
                {
                    celsi.value = (inputValue-273.15).toFixed(2);
                    fahr.value = (((inputValue-273.15)*9)/5+32).toFixed(2);
                    break;
            
                }
    }
}