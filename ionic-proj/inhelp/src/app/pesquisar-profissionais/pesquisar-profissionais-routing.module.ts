import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisarProfissionaisPage } from './pesquisar-profissionais.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisarProfissionaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisarProfissionaisPageRoutingModule {}
