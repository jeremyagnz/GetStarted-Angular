import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  constructor( private _heroesService:HeroesService) { }

  ngOnInit(): void {
  }

}
