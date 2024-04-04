import { Pipe, PipeTransform } from '@angular/core';
import { Modelo } from '../interfaces/car.interface';

@Pipe({
  name: 'modeloPipe'
})

export class modeloCasePipe implements PipeTransform {
  transform(value: Modelo): string {
    switch (value) {
      case Modelo.civic:
          return 'Civic';
      case Modelo.integra:
          return 'Integra';
      case Modelo.nsx:
            return 'NSX';
      case Modelo.s2000:
          return 'S2000';
      case Modelo.supra:
          return 'Supra';
      default:
        return value;
    }

  }
}
