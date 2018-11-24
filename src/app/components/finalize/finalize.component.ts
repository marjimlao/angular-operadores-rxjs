import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.css']
})
export class FinalizeComponent implements OnInit {

  todo;
  cargando = true;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      finalize(() => this.cargando = false)
    ).subscribe(res => this.todo = res);
  }

}
