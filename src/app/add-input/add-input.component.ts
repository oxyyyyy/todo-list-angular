import { Component, OnInit, Input } from '@angular/core';

import { TodoList } from '../mock-todo-list';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.css']
})
export class AddInputComponent implements OnInit {

  InputText: string;

  id: 0;
  TodoList = TodoList;

  constructor() { }

  ngOnInit() {
  }

  addItemToList() {
    this.TodoList.push({
      id: this.id++,
      text: this.InputText,
      isActive: true
    });
    this.InputText = '';
  }

}
