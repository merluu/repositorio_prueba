import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarContraseniaPageRoutingModule } from './recuperar-contrasenia-routing.module';

import { RecuperarContraseniaPage } from './recuperar-contrasenia.page';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarContraseniaPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [RecuperarContraseniaPage]
})
export class RecuperarContraseniaPageModule {}
