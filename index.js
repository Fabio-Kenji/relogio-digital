function updateClock() {

    const agora = new Date()
    let horas = agora.getHours()
    const meridiem = horas >= 12 ? "PM" : "AM"
    horas = horas % 12 || 12
    horas = horas.toString().padStart(2, 0)
    const minutos = agora.getMinutes().toString().padStart(2, 0)
    const segundos = agora.getSeconds().toString().padStart(2, 0)
    const timeString = `${horas}:${minutos}:${segundos} ${meridiem}`
    document.getElementById("clock").textContent = timeString
}

updateClock()
setInterval(updateClock, 1000)