import { MatButton } from '@angular/material';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent, empty, of } from 'rxjs';
import { switchMap, tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements AfterViewInit {
  @ViewChild('parButton') parButton: MatButton;

  contador = 0;
  resultado = '';

  constructor() { }

  ngAfterViewInit() {
    const click$ = fromEvent(this.parButton._elementRef.nativeElement, 'click')
      .pipe(
        tap(() => {
          this.contador++;
          this.resultado = 'Clic impar';
        }),
        switchMap(() => {
          if (this.contador % 2 === 0) {
            return of(true);
          }

          return empty();
        })
      );

    click$.subscribe(
      () => this.resultado = 'Clic par!'
    );
  }

}
