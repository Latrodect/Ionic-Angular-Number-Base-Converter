import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagetwoPage } from './pagetwo.page';

const routes: Routes = [
  {
    path: '',
    component: PagetwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagetwoPageRoutingModule {}
