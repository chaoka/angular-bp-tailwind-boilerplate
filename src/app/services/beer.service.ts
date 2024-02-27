import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Beer } from '../interfaces/beer.interface'

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private url = 'https://random-data-api.com/api/v2/beers?size=9'
  private http = inject(HttpClient)

  getBeers() {
    return this.http.get<Beer[]>(this.url)
  }
}
