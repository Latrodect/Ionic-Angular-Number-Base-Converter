import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageonePageRoutingModule } from './pageone-routing.module';

import { PageonePage } from './pageone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageonePageRoutingModule
  ],
  declarations: [PageonePage]
})
export class PageonePageModule {}
