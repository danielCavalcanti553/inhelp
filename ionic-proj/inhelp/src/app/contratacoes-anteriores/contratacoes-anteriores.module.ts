import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratacoesAnterioresPageRoutingModule } from './contratacoes-anteriores-routing.module';

import { ContratacoesAnterioresPage } from './contratacoes-anteriores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratacoesAnterioresPageRoutingModule
  ],
  declarations: [ContratacoesAnterioresPage]
})
export class ContratacoesAnterioresPageModule {}
