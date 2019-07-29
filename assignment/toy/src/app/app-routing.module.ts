import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToygalleryComponent} from './toygallery/toygallery.component';
import {CreatetoyComponent} from './createtoy/createtoy.component';
import {PnfComponent} from './pnf/pnf.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'toylist',
        pathMatch: 'full'
    },
      {
          path: 'toylist',
          component: ToygalleryComponent
      },
    {
        path: 'create',
        component: CreatetoyComponent
    },
    {
        path: '**',
        component: PnfComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
