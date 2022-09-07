function converter() {
    let grausCelsius = document.getElementById ("valor")
    let temperatura = grausCelsius.value
    let temperaturaDecimal = parseFloat (temperatura)
    let grausFahrenheit = temperaturaDecimal * 1.8 + 32

    console.log (grausFahrenheit)
}