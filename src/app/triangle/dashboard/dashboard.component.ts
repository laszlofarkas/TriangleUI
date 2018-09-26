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

  // Angular form
  triangleForm = null;
  // determinate is there any request is in progress
  submitting = false;
  // result of the success response
  triangleType = null;
  // result of the fail response
  error: {title: string, messages: string[]} = null;

  constructor(
    private triangleService: TriangleService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   * Initialize Angular FormGroup to use in HTML
   */
  private initForm() {
    this.triangleForm = new FormGroup({
      'a': new FormControl('', [Validators.required, TriangleValidators.positive]),
      'b': new FormControl('', [Validators.required, TriangleValidators.positive]),
      'c': new FormControl('', [Validators.required, TriangleValidators.positive])
    }, TriangleValidators.triangle);
  }

  /**
   * processing the submitted form's data and post a request to the server
   */
  onSubmit() {
    if (this.triangleForm.valid && !this.submitting) {
      this.submitting = true;

      // prepare sent data
      const values = this.triangleForm.value;
      const triangle: Triangle = new Triangle();
      triangle.a = values.a;
      triangle.b = values.b;
      triangle.c = values.c;

      // send request
      this.triangleService.getTriangleType(triangle).subscribe((result) => {
        // successful response
        this.submitting = false;
        this.triangleType = (<string>result).toLowerCase();
      }, (err) => {
        // handling error
        this.submitting = false;
        if (err.status === 0) {
          // UI is not able to reach server
          this.error = {
            title: 'Service unavailable',
            messages: [
              'Please check the server is running on ' + environment.serverUrl
            ]
          };
        } else {
          // server response but not with 2xx
          this.error = {
            title: err.error.error,
            messages: []
          };
          err.error.errors.forEach(element => {
            this.error.messages.push((element.field ? (element.field + ' ') : '') + element.defaultMessage);
          });
        }
      });
    }
  }

  /**
   * Get all validation errors for the given field.
   * If there is no error or the user has not been touched that field it returns null
   * @param controlName Name of the FormControl
   */
  getErrors(controlName: String) {
    const status = this.triangleForm.get(controlName);
    if (status.dirty || status.touched) {
      return status.errors;
    } else {
      return null;
    }
  }

}
