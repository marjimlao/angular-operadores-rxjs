import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  todo;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      pluck('title')
    ).subscribe(res => this.todo = res);
  }

}
