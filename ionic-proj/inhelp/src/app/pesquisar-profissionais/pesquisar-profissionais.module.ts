import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisarProfissionaisPageRoutingModule } from './pesquisar-profissionais-routing.module';

import { PesquisarProfissionaisPage } from './pesquisar-profissionais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisarProfissionaisPageRoutingModule
  ],
  declarations: [PesquisarProfissionaisPage]
})
export class PesquisarProfissionaisPageModule {}
