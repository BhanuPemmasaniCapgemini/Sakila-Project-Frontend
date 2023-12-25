import { Component } from '@angular/core';
import { Films } from '../models/addfilm';
import { FilmService } from '../services/film.service';
@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent {
  film: Films = {
    filmId: this.generateFilmId(), 
    title: '',
    description: '',
    releaseYear: 0,
    language: { languageId: 1 },
    rentalDuration: 0,
    rentalRate: 0,
    length: 0,
    replacementCost: 0,
    rating: '',
    specialFeatures: '',
    lastUpdate: ''
  };
  constructor(private filmService: FilmService) { }
  addFilm(): void {
    this.film.lastUpdate = new Date().toISOString();
    this.filmService.addFilm(this.film)
      .subscribe(
        (response) => {
          console.log('Film added successfully');
          alert('Film added successfully');
          this.film = {
            filmId: 0,
            title: '',
            description: '',
            releaseYear: 0,
            language: { languageId: 1 },
            rentalDuration: 0,
            rentalRate: 0,
            length: 0,
            replacementCost: 0,
            rating: '',
            specialFeatures: '',
            lastUpdate: ''
          };
          // Reset the form or perform any other desired actions
        },
        (error) => {
          // console.log('Error adding film:', error);
          alert("Error in adding film" + error)
        }
      );
  }

  private generateFilmId(): number {
    return Math.floor(Math.random() * 10000);
  }
}