import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  numeros = [];

  constructor() { }

  ngOnInit() {
    const source$ = of(1, 2, 3);
    source$.pipe(
      toArray()
    ).subscribe(res => this.numeros = res);
  }

}
