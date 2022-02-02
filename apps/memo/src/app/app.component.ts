import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from '@chaz/data';

@Component({
  selector: 'chaz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'memo';

  todos: Todo[] = []

  constructor(private httpClient: HttpClient){
    this.fetch();
  }

  fetch(){
    this.httpClient.get<Todo[]>('api/todos').subscribe(todos => this.todos = todos);
  }

  addTodo(title: string){
    this.httpClient.post('api/addTodo', {title}).subscribe(()=>this.fetch());
  }
}