import { Component, OnInit } from '@angular/core';
import Pedido from '../dominio/pedido';
import { TotoService } from '../toto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {
  pedido: Pedido;
  columnasAMostrar: string[] = ['gusto', 'cantidad'];

  constructor(private totoService: TotoService, private router: Router) { }

  ngOnInit() {
    this.pedido = this.totoService.pedidoActual
  }

  nuevoPedido(){
    this.totoService.pedidoActual = new Pedido()
    this.router.navigateByUrl('pedido')
  }
}
