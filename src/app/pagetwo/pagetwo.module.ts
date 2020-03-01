import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagetwoPageRoutingModule } from './pagetwo-routing.module';

import { PagetwoPage } from './pagetwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagetwoPageRoutingModule
  ],
  declarations: [PagetwoPage]
})
export class PagetwoPageModule {}
