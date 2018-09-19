import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const triangleRoutes: Routes = [
  { path: 'triangle', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(triangleRoutes)],
  exports: [RouterModule]
})
export class TriangleRoutingModule { }
