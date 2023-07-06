function convertCelsiusToFahrenheit() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius*9/5)+32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("result").innerHTML = celsius+" °C = " + fahrenheit.toFixed(2) + " F";
}

function converFahrenheitToCelsius() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var Celsius = (fahrenheit - 32)*5/9;
    document.getElementById("celsius").value = Celsius.toFixed(2);
    document.getElementById("result").innerHTML = fahrenheit + " F = " + Celsius.toFixed(2) + " °C";
}