import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TriangleRoutingModule } from './triangle-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    TriangleRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class TriangleModule { }
