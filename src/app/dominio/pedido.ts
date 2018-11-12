import Item from "./item";

export default class Pedido {
    public items: Item[] = []
    readonly cantidadMinima = 4

    precioTotal(){
        return this.items.reduce((suma, item) => suma + item.precioTotal(), 0);
    }

    agregarItem(item: Item){
        this.items.push(item)
    }

    quitarItem(item: Item){
        this.items.splice(this.items.indexOf(item), 1);
    }

    cantidadUnidades(){
        return this.items.reduce((suma, item) => item.cantidadUnidades() + suma, 0)
    }

    validar(){
        if (this.cantidadUnidades() < this.cantidadMinima){
            throw new Error('Debe pedir un mínimmo de 4 empanadas')
        }
    }
}