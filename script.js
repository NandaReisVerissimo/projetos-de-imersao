function converter () {
    let grausCelsius = document.getElementById ("valor")
    let grausCelsiusValor = grausCelsius.value
    let grausCelsiusDecimal = parseFloat (grausCelsiusValor)
    let grausFahrenheit = grausCelsiusDecimal * 1.8 + 32

    console.log (grausFahrenheit)

    let grauConvertido = document.getElementById ("tempConvertida")
    let valorConvertido = "A Temperatura é " + grausFahrenheit + " °F"
    grauConvertido.innerHTML = valorConvertido
}

//pegar o valor do input
//transformar em valor
//definir como decimal
//fazer a conta
//gerar o resultado
//mostrar o resultado na tela
