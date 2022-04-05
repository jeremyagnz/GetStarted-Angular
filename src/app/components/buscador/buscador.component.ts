import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.services';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService,
               private router:Router ) {
    
     this.heroes = this._heroesService.getHeores();

     this.activatedRoute.params.subscribe( params =>{
     this.termino = params['termino'];
     this.heroes = this._heroesService.buscarHeroes(params['termino']);
     console.log(this.heroes);
      } )

    
                  
   }



  ngOnInit(): void {
    
  }

}
