import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratacoesAnterioresPage } from './contratacoes-anteriores.page';

const routes: Routes = [
  {
    path: '',
    component: ContratacoesAnterioresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratacoesAnterioresPageRoutingModule {}
