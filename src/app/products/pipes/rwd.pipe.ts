import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rwd'
})

export class RwdPipe implements PipeTransform {
  transform(value: boolean): string {
    if (value === true) {
         return 'tracción trasera';
    } else if (value ===false) {
      return 'tracción delantera';
    }else{
      return 'no especificado'
    }

  }
}
