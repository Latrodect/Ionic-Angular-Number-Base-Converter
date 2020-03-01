import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagethreePageRoutingModule } from './pagethree-routing.module';

import { PagethreePage } from './pagethree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagethreePageRoutingModule
  ],
  declarations: [PagethreePage]
})
export class PagethreePageModule {}
