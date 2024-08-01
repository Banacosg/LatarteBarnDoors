import { AbstractControl } from '@angular/forms';

export default function passwordMatchValidator(control: AbstractControl) {
  return control.get('password')?.value === control.get('passwordCheck')?.value
    ? null
    : { mismatch: true };
}
