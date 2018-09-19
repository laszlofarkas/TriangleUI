import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TriangleRoutingModule } from './triangle-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TriangleRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class TriangleModule { }
