import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export class TriangleValidators {

  /**
   * Validate that the given value is greater than 0
   * @param control which hold value information (Angular will pass that)
   */
  static positive(control: AbstractControl): ValidationErrors | null {
    return control.value > 0 ? null : { positive : 'nope' };
  }

  /**
   * Check whether any of the sides (a, b, c) is less than the other two side
   * @param control which hold value information (Angular will pass that)
   */
  static triangle(control: AbstractControl): ValidationErrors | null {
    // check whether all value is a non-zero number.
    // If not then we ignore validation (other validation should catch them)
    // NaN * number -> 0 | NaN * NaN -> NaN => both falsy
    if (!(control.value.a * control.value.b * control.value.c)) {
      return null;
    }
    if (+control.value.a >= (+control.value.b + +control.value.c) ||
      +control.value.b >= (+control.value.a + +control.value.c) ||
      +control.value.c >= (+control.value.a + +control.value.b)) {
        return {triangle: 'nope'};
    }
    return null;
  }
}
