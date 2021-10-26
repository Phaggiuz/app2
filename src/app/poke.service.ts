import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  url = 'https://pokeapi.co/api/v2/pokemon/';
  pokeNum!: number;

  constructor(private http: HttpClient) {}

  getData(): Observable<Object> {
    this.pokeNum = Math.floor(Math.random() * 898 + 1);
    return this.http.get(`${this.url}${this.pokeNum}`);
  }
}
