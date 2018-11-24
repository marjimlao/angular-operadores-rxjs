import { Component, OnInit } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.css']
})
export class StartWithComponent implements OnInit {

  numeros = [];

  constructor() { }

  ngOnInit() {
    const source$ = of(1, 2, 3);
    source$.pipe(
      startWith('Comenzamos!')
    ).subscribe(res => this.numeros.push(res));
  }

}
