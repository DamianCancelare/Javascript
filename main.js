//Bienvenida
alert('Bienvenido a Gotique Poupee')

const comprarProducto = () => {
    let producto = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = false

    do {
        producto = prompt ('Querés comprar blusa, pollera o vestido?')
        cantidad = parseInt(prompt('Cuantos queres comprar?'))

        let cantidadValidada = validarCantidad(cantidad)

        switch (producto){
            case 'blusa':
                precio = 3500
                break;
            case 'pollera':
                precio = 4000
                break;
            case 'vestido':
                precio = 6000
                break;

            default:
                alert('Alguno de los datos ingresados no es correcto!')
                precio = 0
                cantidadValidada = 0
                break
        }


        subtotal += precio * cantidadValidada

        seguirComprando = confirm('Desea seguir comprando?')
    } while (seguirComprando)

    return subtotal
}

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0 ) {
        alert('Debe de agregar una cantidad válida!')
        cantidad = parseInt(prompt('Cuantos queres comprar?'))
    }

    return cantidad
}

const aplicarDescuento = (subtotal) => {
    const descuento10 = 0.90
    if (subtotal >= 10000){
        return subtotal * descuento10
    }   else {
        return subtotal
    }
}

const calcularEnvio = (subtotal) => {
    const quiereEnvio = confirm ('Quiere envío a domicilio?')

    if (quiereEnvio && subtotal >= 9000){
        alert('Tenés envío gratis! El total de la compra es: $'+subtotal)
    } else if (quiereEnvio && subtotal < 9000){
        subtotal += 1000
    alert('El envío cuesta $1000. El total de la compra con envío es: $'+subtotal)
    } else{
        alert('El total de tu compra es: $'+subtotal)
    }

    return subtotal
}

const mostrarDetalleDeCompra = (precioFinal) => {
    alert('El total a pagar es de $'+precioFinal+'. Gracias por su compra!')
}

const subtotal = comprarProducto()

const subtotalConDescuento = aplicarDescuento (subtotal)

const precioFinal = calcularEnvio(subtotalConDescuento)

mostrarDetalleDeCompra(precioFinal)