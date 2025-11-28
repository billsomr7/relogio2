function chmaRelogio() {
    const spanRelogio = document.getElementById('relogio')
    const date = new Date()
    const horas = date.getHours().toString().padStart(2, '0')
    const minutos = date.getMinutes().toString().padStart(2, '0')
    const segundos = date.getSeconds().toString().padStart(2, '0')


 spanRelogio.innerHTML = `${horas}:${minutos}:${segundos}`

}
chmaRelogio()

setInterval(chmaRelogio, 1000)  

