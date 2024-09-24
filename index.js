let modo = true

function updateClock() {

    const agora = new Date()
    const horas = agora.getHours().toString().padStart(2, 0)
    const meridiem = horas >= 12 ? "PM" : "AM"
    const horas12 = (horas % 12).toString().padStart(2, 0)
    const minutos = agora.getMinutes().toString().padStart(2, 0)
    const segundos = agora.getSeconds().toString().padStart(2, 0)
    const timeString = `${horas}:${minutos}:${segundos}`
    const timeString12 = `${horas12}:${minutos}:${segundos} ${meridiem}`
    if (modo) {
        document.getElementById("clock").textContent = timeString
    } else {
        document.getElementById("clock").textContent = timeString12
    }
    
}

function trocaModo() {
    if (modo) {
        modo = false
    } else {
        modo = true
    }
}

updateClock()
setInterval(updateClock, 1000)