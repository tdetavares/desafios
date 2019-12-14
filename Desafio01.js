function calcular() {
    var valor1 =  Number(document.getElementById("n1").value);
    var valor2 = Number(document.getElementById("n2").value);
    var calc = document.getElementById("calc").value;


    if (calc == "1") {
       var sub = valor1 - valor2;
       document.getElementById("res").value = sub;
    } else {
       if (calc == "2") {
          var soma = valor1 + valor2;
          document.getElementById("res").value = soma;
       } else {
          if (calc == "3") {
             var div = valor1 / valor2;
             document.getElementById("res").value = div;
          } else {
             var mult = valor1 * valor2;
             document.getElementById("res").value = mult;
          }
       }
    }
   
 }