import { Todo } from '@chaz/data';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {

  todos: Todo[] = [
    {title: 'Todo1'}, {title: 'Todo2'}
  ]

  getData(): Todo[] {
    return this.todos;
  }

  addTodo(title: string){
    this.todos.push(
      {title: title + Math.floor(Math.random()*1000)}
    )
  }
}
