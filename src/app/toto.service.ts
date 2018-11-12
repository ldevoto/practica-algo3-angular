import { Injectable } from '@angular/core';
import Pedido from './dominio/pedido';
import { of } from 'rxjs';

const GUSTOS = [
  'Carne la Reina',
  'Queso y Cebolla',
  'Roquefort y Apio',
  'Humita',
  'Atún',
  'Caprese'
]

@Injectable({
  providedIn: 'root'
})
export class TotoService {
  private _pedidoActual: Pedido = new Pedido();
  
  constructor() { }
  
  public get gustos(){
    return of(GUSTOS).toPromise();
  }
  
  public get pedidoActual(): Pedido {
    return this._pedidoActual;
  }
  
  public set pedidoActual(pedido: Pedido) {
    this._pedidoActual = pedido;
  }
}
