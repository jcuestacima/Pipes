import { Component } from '@angular/core';
import { Car, Modelo } from '../../interfaces/car.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Car;

  public cars: Car[]=[
    {
      marca: "Honda",
      traccionRWD: false,
      modelo: Modelo.civic
  },
  {
    marca: "Honda",
    traccionRWD: false,
    modelo: Modelo.integra
  },
  {
    marca: "Honda",
    traccionRWD: true,
    modelo: Modelo.nsx
  },
  {
    marca: "Honda",
    traccionRWD: true,
    modelo: Modelo.s2000
  },
  {
    marca: "Toyota",
    traccionRWD: true,
    modelo: Modelo.supra
  }



  ]




  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Car ){
    this.orderBy = value;
  }
}
