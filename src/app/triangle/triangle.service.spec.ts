import { defer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TriangleService } from './triangle.service';
import { Triangle } from './triangle';

describe('TriangleService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let triangleService: TriangleService;

  function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    triangleService = new TriangleService(<any>httpClientSpy);
  });

  it('should be created', () => {
    expect(triangleService).toBeTruthy();
  });

  it('getTriangleType should post request', () => {
    const stubValue = 'test';
    const triangle: Triangle = { a: 12, b: 13, c: 14 };

    httpClientSpy.post.and.returnValue(asyncData(stubValue));

    triangleService.getTriangleType(triangle).subscribe(
      (result) => expect(result).toEqual(stubValue, 'should return http response'),
      fail
    );

    expect(httpClientSpy.post.calls.count()).toBe(1, 'request send once');
  });
});
