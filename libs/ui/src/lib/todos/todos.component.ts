import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '@chaz/data';

@Component({
  selector: 'chaz-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input()
  todos: Todo[] = []

  @Output() 
  addNew = new EventEmitter<string>();

  // constructor() { }

  ngOnInit(): void {
    console.log(this.todos);
  }

  addTodo(title: string) {
    this.addNew.emit(title)
  }
}
