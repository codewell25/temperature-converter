const inputFields = document.querySelectorAll('input');

const celcius = document.getElementById('celcius-input');
const farenheit = document.getElementById('fahrenheit-input');
const kelvin = document.getElementById('kelvin-input');


for (i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener('keyup', eventLoader)
}


// inputField.addEventListener('keypress', eventLoader)

function eventLoader(e) {

    if (e.target.id == 'celcius-input') {
        calcFK(Number(celcius.value));
    }

    if (e.target.id == 'fahrenheit-input') {
        calcCK(Number(farenheit.value));
    }


    if (e.target.id == 'kelvin-input') {
        calcCF(Number(kelvin.value));
    }


}

function calcFK(c) {

    //celcius to farenheit
    const f = ((9 / 5) * c + 32)

    //celcius to kelvin
    const k = (273.15 + c)

    farenheit.value = f.toFixed(2)
    kelvin.value = k.toFixed(2)
}

function calcCK(f) {

    //Fahrenheit to celcius
    const c = (5 / 9) * (f - 32)

    ///Fahrenheit to kelvin
    const k = ((f - 32) * (5 / 9)) + 273.15

    celcius.value = c.toFixed(2)
    kelvin.value = k.toFixed(2)

}

function calcCF(k) {

    //kelvin to celcius
    const c = k - 273.15

    //kelvin to fahrenheit
    const f = ((k - 273.15) * (9 / 5)) + 32

    celcius.value = c.toFixed(2)
    farenheit.value = f.toFixed(2)

}

