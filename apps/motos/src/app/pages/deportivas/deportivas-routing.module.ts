import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeportivasComponent } from './deportivas.component';

const routes: Routes = [
  {
    path: '',
    // loadComponent: () => import('./deportivas.component').then(m => m.DeportivasComponent),
    component: DeportivasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeportivasRoutingModule { }
