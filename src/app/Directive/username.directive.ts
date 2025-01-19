import { Directive, HostListener, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appUsername]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UsernameDirective,
      multi: true,
    },
  ],
})
export class UsernameDirective implements Validator {
  private allowedUsername = 'emilys';
  constructor() {}

  @HostListener('blur', ['$event.target'])
  onBlur(target: HTMLInputElement): any {
    let username = target.value;
    if (username && username !== this.allowedUsername) {
      alert(`Invalid username: ${username}. Only "emilys" is allowed.`);
      target.value='';
    }
  }

  validate(control: AbstractControl): null {
    return null; // No validation is returned as the alert handles feedback
  }
}

