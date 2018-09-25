import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { Triangle } from './triangle';

@Injectable({
  providedIn: 'root'
})
export class TriangleService {

  constructor(
    private http: HttpClient
  ) { }

  getTriangleType(triangle: Triangle): Observable<any> {
    return this.http.post(environment.serverUrl, triangle);
  }

}
