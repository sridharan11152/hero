import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
<<<<<<< HEAD
import { HeroService } from '../hero.service';
=======
import { HEROES } from '../mock-heroes';
>>>>>>> 4e5195e17936b1c108258e030c18bb29f4cf7b79
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
<<<<<<< HEAD
  heroes :Hero[];
  
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);//asynchronous call
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  constructor(private heroService: HeroService) { 

  }

  ngOnInit() {
    this.getHeroes();
=======
  heroes = HEROES;
  selectedHero: Hero;

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  constructor() { }

  ngOnInit() {
>>>>>>> 4e5195e17936b1c108258e030c18bb29f4cf7b79
  }

}