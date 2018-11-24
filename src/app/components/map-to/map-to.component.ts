import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { mapTo } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { MatButton } from '@angular/material';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.css']
})
export class MapToComponent implements AfterViewInit {

  @ViewChild('onButton') onButton: MatButton;
  @ViewChild('offButton') offButton: MatButton;

  public estado = 'encendido';

  ngAfterViewInit(): void {
    const encender$ = fromEvent(this.onButton._elementRef.nativeElement, 'click');
    const apagar$ = fromEvent(this.offButton._elementRef.nativeElement, 'click');

    encender$.pipe(mapTo('encendido')).subscribe(res => this.estado = res);
    apagar$.pipe(mapTo('apagado')).subscribe(res => this.estado = res);

  }

}
