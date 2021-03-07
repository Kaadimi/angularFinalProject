import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './containers/dashboard/dashboard.component'
import { PokemonDetailComponent } from './containers/pokemon-detail/pokemon-detail.component'

const routes: Routes = [
  {path: "", component: DashboardComponent, pathMatch: 'full'},
  {path: "pokemon/:id", component: PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
