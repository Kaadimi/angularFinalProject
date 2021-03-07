import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AppService {
    URL: string = "https://pokeapi.co/api/v2/pokemon";

    constructor(private http: HttpClient) {}

    getPokemons(): Observable<any> {
        console.log("helllllo")
        return this.http.get(this.URL)
                .pipe(
                    tap(data => console.log(data))
                    // catchError(console.log("error occured while fetching pokemons"))
                )
    }

    getPokemon(id: number): Observable<any> {
        console.log("poke Detail")
        return this.http.get(`${this.URL}/${id}`)
                .pipe(
                    tap(data => console.log(data))
                    // catchError(console.log("error occured while fetching pokemons"))
                )
    }
}