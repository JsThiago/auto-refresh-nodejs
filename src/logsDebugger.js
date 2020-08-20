
function connected() {

    setTimeout(() => {
        console.log('Conectado');
    }, 1000)
}
function connecting() {
    console.log('Conectando');
}

module.exports = { connected, connecting }