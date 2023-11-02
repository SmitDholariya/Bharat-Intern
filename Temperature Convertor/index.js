function convertfahrenheit() {
    var a = document.getElementById("celsius");
    var b = document.getElementById("fahrenheit");
    var celsius = parseFloat(a.value);
    var fahrenheit = celsius * 1.8 + 32;
    b.value = fahrenheit;
  }
  
  function convertcelsius() {
    var a = document.getElementById("celsius");
    var b = document.getElementById("fahrenheit");
    var fahrenheit = parseFloat(b.value);
    var celsius = (fahrenheit - 32) / 1.8;
    a.value = celsius;
  }
  