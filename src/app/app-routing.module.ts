import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditarComponent } from './cadastro/produtos/editar.component';
import { ExcluirComponent } from './cadastro/produtos/excluir.component';
import { IncluirComponent } from './cadastro/produtos/incluir.component';
import { ListarComponent } from './cadastro/produtos/listar.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'cadastro', component: CadastroComponent,
    children: [
      {path: "produtos", component: ListarComponent},
      {path: "incluir", component: IncluirComponent},
      {path: "editar", component: EditarComponent},
      {path: "excluir", component: ExcluirComponent},
    ]},
  { path: 'admin', component: AdminComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'cardapio', component: CardapioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
