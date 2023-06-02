import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Movie } from './Movie';
import { MovieService } from './movie.service';
import { RentalListService } from './rental-list.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  flops$;
  rentalList:any = [];

  constructor(private movieService: MovieService, 
    private rentalListService: RentalListService) {
  }

  ngOnInit() {
    this.flops$ = this.movieService.getMovies();
    this.getRentalList();
  }

  getRentalList(){
    this.rentalListService.getMovies().subscribe( movies=> {
      this.rentalList = movies;
    })
  }

  addToRentalList(flop) {
    this.movieService.addMovieToRentals(flop).subscribe( response =>
      this.getRentalList()
    );
  }

  onDeleteItem(id:number){
    this.rentalListService.deleteItem(id).subscribe( response => {
      this.getRentalList();
    })
  }

}
