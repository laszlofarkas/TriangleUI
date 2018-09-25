import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Triangle } from '../triangle';
import { TriangleService } from '../triangle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  triangleForm = null;
  triangle: Triangle;
  triangleType = null;
  submitting = false;

  constructor(
    private triangleService: TriangleService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.triangleForm = new FormGroup({
      'a': new FormControl('', [Validators.required, Validators.min(0)]),
      'b': new FormControl('', [Validators.required, Validators.min(0)]),
      'c': new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  onSubmit() {
    if (this.triangleForm.valid && !this.submitting) {
      this.submitting = true;
      const values = this.triangleForm.value;
      this.triangle = new Triangle();
      this.triangle.a = values.a;
      this.triangle.b = values.b;
      this.triangle.c = values.c;

      this.triangleService.getTriangleType(this.triangle).subscribe((result) => {
        this.submitting = false;
        this.triangleType = result;
      });
    }
  }

}
