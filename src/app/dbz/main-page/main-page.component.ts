import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  // personajes : Personaje[] = []

  nuevo : Personaje = {
    nombre:"Maestro Roshi",
    poder: 1000
  }

  constructor(){

  }

  // get personajes(): Personaje[]{
  //   return this.dbzservice.personajes;
  // }

  // agregarNuevoPersonaje(argummento: Personaje){
  //   // debugger;
  //   this.personajes.push(argummento);
  // }

  // constructor(private dbzservice : DbzService) {
  //   // this.personajes = this.dbzservice.personajes;
  // }

}
