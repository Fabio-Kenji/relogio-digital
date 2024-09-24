function updateClock() {

    const agora = new Date()
    const horas = agora.getHours().toString().padStart(2, 0)
    const minutos = agora.getMinutes().toString().padStart(2, 0)
    const segundos = agora.getSeconds().toString().padStart(2, 0)
    const timeString = `${horas}:${minutos}:${segundos}`
    document.getElementById("clock").textContent = timeString
}

updateClock()
setInterval(updateClock, 1000)