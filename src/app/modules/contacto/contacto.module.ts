import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';


@NgModule({
  declarations: [ContactopageComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule { }
