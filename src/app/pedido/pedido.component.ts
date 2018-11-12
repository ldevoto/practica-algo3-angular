import { Component, OnInit } from '@angular/core';
import { TotoService } from '../toto.service';
import Pedido from '../dominio/pedido';
import Item from '../dominio/item';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedido: Pedido;
  items: MatTableDataSource<Item> = new MatTableDataSource();
  columnasAMostrar: string[] = ['gusto', 'cantidad'];

  constructor(private totoService: TotoService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.cargarPedido();
    this.totoService.gustos.then(
      gustos => {
        const items = []
        gustos.forEach(gusto => {items.push(new Item(gusto, 20))})
        this.items.data = items
      }
    )
  }
  
  cargarPedido(){
    this.pedido = this.totoService.pedidoActual;
  }

  finalizarPedido(){
    const pedido = new Pedido()
    this.items.data.forEach(item => {
      if (item.tieneValor()){
        pedido.agregarItem(item)
      }
    })
    try{
      pedido.validar()
      this.totoService.pedidoActual = pedido;
      this.router.navigateByUrl('resumen')
    } catch (e){
      this.snackBar.open(e.toString(), 'Cerrar', {
        duration: 2000
      });
    }
  }

  aplicarFiltro(valor: string){
    this.items.filter = valor.trim().toLowerCase();
  }
}
