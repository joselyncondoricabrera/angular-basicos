import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  // @Input('per')
  // personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre:'',
    poder:0
  }

  constructor( private dbzService: DbzService){

  }

  // @Output () onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();


  agregar(){
    // e.preventDefault();
    if(this.nuevo.nombre.trim().length ===  0){
      console.log("esta vacio");
      return;
    }

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    // limpiar esos valores del nuevo en cadena vacia
    this.nuevo = {nombre: '', poder: 0}
  }

}
