import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService,Heroe } from '../../services/heroes.services';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router               ) { 
    this.heroes = this._heroesService.getHeores();
  }

  verHeroe ( idx:number){
    this.router.navigate(['/heroe', idx]);
  }

}
