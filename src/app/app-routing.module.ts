import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'cardapio', component: CardapioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
