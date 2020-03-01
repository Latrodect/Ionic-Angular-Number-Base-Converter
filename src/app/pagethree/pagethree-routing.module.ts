import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagethreePage } from './pagethree.page';

const routes: Routes = [
  {
    path: '',
    component: PagethreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagethreePageRoutingModule {}
