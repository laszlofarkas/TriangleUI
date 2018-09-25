import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { environment } from '../../../environments/environment';

import { Triangle } from '../triangle';
import { TriangleValidators } from '../triangle.validators';
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
  showError = false;
  serverUrl = environment.serverUrl;

  constructor(
    private triangleService: TriangleService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.triangleForm = new FormGroup({
      'a': new FormControl('', [Validators.required, TriangleValidators.positive]),
      'b': new FormControl('', [Validators.required, TriangleValidators.positive]),
      'c': new FormControl('', [Validators.required, TriangleValidators.positive])
    }, TriangleValidators.triangle);
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
        this.triangleType = (<string>result).toLowerCase();
      }, (error) => {
        this.submitting = false;
        this.showError = true;
      });
    }
  }

  getErrors(controlName: String) {
    const status = this.triangleForm.get(controlName);
    if (status.dirty || status.touched) {
      return status.errors;
    } else {
      return null;
    }
  }

}
