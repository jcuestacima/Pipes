import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, choose: boolean): string {

    if (choose === true) {
       value = value.toUpperCase();
    } else if (choose ===false) {
      value = value.toLowerCase();
    }

    return value;
  }
}
