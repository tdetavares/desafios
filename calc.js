function calculo() {
    var v1 = Number(document.getElementById("n1").value)
    var v2 = Number(document.getElementById("n2").value)
    var calc = Number(document.getElementById("calc").value)


    if (calc == "1") {
        var soma = v1+v2
        document.getElementById("result").value = soma
    }
    if (calc == "2") {
        var sub = v1-v2
        document.getElementById("result").value = sub
    }
    if (calc == "3") {
        var mult = v1*v2
        document.getElementById("result").value = mult
    }
    else {
        var divis = v1 / v2
        document.getElementById("result").value = divis
    }


}