import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { partition } from 'rxjs/operators';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.css']
})
export class PartitionComponent implements OnInit {

  pares = [];
  impares = [];

  constructor() { }

  ngOnInit() {
    const source$ = range(1, 7);
    const [pares$, impares$] = partition((val: number) => val % 2 === 0)(source$);

    pares$.subscribe(res => this.pares.push(res));
    impares$.subscribe(res => this.impares.push(res));
  }

}
