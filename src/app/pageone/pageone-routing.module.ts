import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageonePage } from './pageone.page';

const routes: Routes = [
  {
    path: '',
    component: PageonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageonePageRoutingModule {}
