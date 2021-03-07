import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { AppService } from '../../app.service'

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Object = {};

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  getPokemon(): void {
    this.appService.getPokemon(this.route.snapshot.params.id).subscribe(pokemon => this.pokemon = pokemon);
  }

}
