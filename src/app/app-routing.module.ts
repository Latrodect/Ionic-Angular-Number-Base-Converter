import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pageone',
    loadChildren: () => import('./pageone/pageone.module').then( m => m.PageonePageModule)
  },
  {
    path: 'pagetwo',
    loadChildren: () => import('./pagetwo/pagetwo.module').then( m => m.PagetwoPageModule)
  },
  {
    path: 'pagethree',
    loadChildren: () => import('./pagethree/pagethree.module').then( m => m.PagethreePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
