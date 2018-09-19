import { TriangleModule } from './triangle.module';

describe('TriangleModule', () => {
  let triangleModule: TriangleModule;

  beforeEach(() => {
    triangleModule = new TriangleModule();
  });

  it('should create an instance', () => {
    expect(triangleModule).toBeTruthy();
  });
});
