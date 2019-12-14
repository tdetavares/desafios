function math1() {
    var n1 = document.getElementById("numero1").value
    var n2 = document.getElementById("numero2").value
    var resultado = (n1 / n2)

    document.getElementById("res1").innerHTML = Math.round(resultado)
}

function math2() {
    var x = document.getElementById("nu1").value
    var y = document.getElementById("nu2").value


    res2.innerHTML = Math.pow(x, y)
}


function math3() {
    var z = document.getElementById("rq").value
    document.getElementById("res3").innerHTML = Math.sqrt(z)
}
function math4() {
    var f1 = document.getElementById("num1").value
    var f2 = document.getElementById("num2").value
    var resu = (f1 / f2)

    document.getElementById("res4").innerHTML = Math.floor(resu)
}

function math5() {
    var c1 = document.getElementById("nume1").value
    var c2 = document.getElementById("nume2").value
    var result = (c1 / c2)

    document.getElementById("res5").innerHTML = Math.ceil(result)
}

