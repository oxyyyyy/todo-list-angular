import { Component, OnInit } from '@angular/core';

import { TodoList } from '../mock-todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  TodoList = TodoList;

  constructor() { }

  ngOnInit() {
  }

}
