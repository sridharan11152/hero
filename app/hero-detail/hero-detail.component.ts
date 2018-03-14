<<<<<<< HEAD
import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';
=======
import { Component, OnInit } from '@angular/core';

>>>>>>> 4e5195e17936b1c108258e030c18bb29f4cf7b79
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
<<<<<<< HEAD
  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  goBack(): void {
    this.location.back();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
  ngOnInit() {
    this.getHero();
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 4e5195e17936b1c108258e030c18bb29f4cf7b79
  }

}
