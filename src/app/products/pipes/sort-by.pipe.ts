import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../interfaces/car.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform( cars: Car[], sortBy?: keyof Car | '' ): Car[] {

    // console.log({ heroes, sortBy });

    switch( sortBy ) {

      case 'marca':
        return cars.sort( (a,b) => ( a.marca > b.marca ) ? 1 : -1 );

      case 'traccionRWD':
        return cars.sort( (a,b) => ( a.traccionRWD > b.traccionRWD ) ? 1 : -1 );

      case 'modelo':
        return cars.sort( (a,b) => ( a.modelo > b.modelo ) ? 1 : -1 );

      default:
        return cars;
    }


  }

}
