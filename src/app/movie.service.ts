import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {

  }

  getMovies() {
    return this.http.get('http://localhost:3000/movies')
  }
  addMovieToRentals(flop){
    flop.id = undefined;
    return this.http.post(
       'http://localhost:3000/rentalList',
       flop);
   }
  
}