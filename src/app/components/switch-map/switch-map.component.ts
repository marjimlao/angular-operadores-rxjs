import { MatButton } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {
  @ViewChild('contadorButton') contadorButton: MatButton;

  resultado;

  constructor() { }

  ngOnInit() {
    const contador$ = fromEvent(this.contadorButton._elementRef.nativeElement, 'click');
    const resultado$ = contador$.pipe(
      tap(() => this.resultado = ''),
      switchMap(() => interval(1000))
    );

    resultado$.subscribe(() => this.resultado = 'Ha pasado un segundo desde el último click');
  }
}
