import { Directive } from '@angular/core';
import { FormGroup, Validator, NG_VALIDATORS } from '@angular/forms';
import { on } from 'process';

@Directive({
  selector: '[validateLocation]',
  providers: [ { provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true} ]
})
export class LocationValidator implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any } {
    const addressControl = formGroup.controls['address'];
    const cityControl = formGroup.controls['city'];
    const countryControl = formGroup.controls['country'];
    const onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if ((addressControl && addressControl.value &&
      cityControl && cityControl.value &&
      countryControl && countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)) {
        return null; // It mean that there is no problem
      } else {
        return { validateLocation: false }; // This is an error object
      }
  }
}
