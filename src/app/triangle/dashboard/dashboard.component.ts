import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  triangleForm = null;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.triangleForm = new FormGroup({
      'a': new FormControl('', [Validators.required]),
      'b': new FormControl('', [Validators.required]),
      'c': new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.triangleForm.valid) {
      const values = this.triangleForm.value;
      console.log(values.a, values.b, values.c);
    } else {
      console.log('not valid', this.triangleForm);
    }
  }

}
