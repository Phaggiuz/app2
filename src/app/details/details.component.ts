import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';
import { IAccept } from '../iaccept';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  poke: any;
  catchPoke: IAccept[] = [];
  rejectPoke: IAccept[] = [];

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.getPoke();
  }

  getPoke() {
    this.pokeService.getData().subscribe((data) => {
      this.poke = data;
    });
  }

  addPoke(accept: boolean) {
    if (accept && this.catchPoke.length < 6) {
      this.catchPoke.push(this.poke);
    } else {
      this.rejectPoke.push(this.poke);
    }
    this.getPoke();
  }
}
