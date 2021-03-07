import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pokemons: any[] = [];
  imageUrl: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(): void {
    this.appService.getPokemons().subscribe(pokemons => this.pokemons = pokemons.results)
  }

  getImageUrl(url: string): string {
     const urlSplit = url.split('/');
     const pokemonId = urlSplit[urlSplit.length - 2]
    return `${this.imageUrl}/${pokemonId}.png`
  }
}
