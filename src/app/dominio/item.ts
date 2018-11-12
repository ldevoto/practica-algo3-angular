export default class Item {
    gusto: string;
    cantidad: number = 0;
    precio: number;
    
    constructor(gusto: string, precio: number){
        this.gusto = gusto;
        this.precio = precio;
    }

    puedeSumar(){
        return this.cantidad < 30;
    }

    puedeRestar(){
        return this.cantidad > 0
    }

    sumar(){
        if (this.puedeSumar()){
            this.cantidad++
        }
    }

    restar(){
        if (this.puedeRestar()){
            this.cantidad--
        }
    }

    tieneValor(){
        return this.cantidad > 0
    }

    cantidadUnidades(){
        return this.cantidad
    }

    precioTotal(){
        return this.precio * this.cantidad;
    }
}