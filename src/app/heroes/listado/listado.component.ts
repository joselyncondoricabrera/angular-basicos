import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Iroman','Hulk', 'Thor', 'Capitán América'];
  heroeEliminado: string= '';

  borrarHeroe() {
    console.log("borrando...");
    
    const heroeBorrado = this.heroes.shift();
    this.heroeEliminado = heroeBorrado || '';

  } 

}
