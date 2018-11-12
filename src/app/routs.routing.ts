import { Routes, RouterModule } from '@angular/router';
import { PedidoComponent } from './pedido/pedido.component';
import { ResumenComponent } from './resumen/resumen.component';

const routes: Routes = [
  { path: 'pedido', component: PedidoComponent },
  { path: 'resumen', component: ResumenComponent },
  { path: '', redirectTo: 'pedido', pathMatch: 'full' },
  { path: '**', redirectTo: 'pedido' }
];

export const RoutsRoutes = RouterModule.forRoot(routes);
