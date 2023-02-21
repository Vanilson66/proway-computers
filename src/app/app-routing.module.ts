import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  { path: '', redirectTo: 'proway-computers/produtos', pathMatch: 'full'},
  { path: 'proway-computers', redirectTo: 'proway-computers/produtos', pathMatch: 'full'},
  { path: 'proway-computers/produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: 'proway-computers/contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  { path: '**', component: NaoEncontradoComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
