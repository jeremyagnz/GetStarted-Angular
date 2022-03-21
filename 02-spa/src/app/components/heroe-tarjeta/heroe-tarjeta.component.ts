import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService,Heroe } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

    heroes:Heroe[] = [];

    @Input() heroe:any = {};
    @Input() index:number;

    @Output() heroeSeleccionado: EventEmitter<number>

  constructor(private router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe ( idx:number){
    this.router.navigate(['/heroe', this.index]);
   /*  this.heroeSeleccionado.emit(this.index); */
  }

}
