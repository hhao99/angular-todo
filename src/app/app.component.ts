import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo Application';
  message = '';
  todo_list: Todo[] = [
    { id: 1, task: 'task 1', isDone: false},
    { id: 2, task: 'task 2', isDone: false},
    { id: 3, task: 'task 3', isDone: true},
    
  ]

  onAddTodo(todo) {
    todo.id = this.todo_list.length + 1;
    todo.isDone = false;
    this.todo_list.push(todo)
    this.message =`add new todo: ${todo.task}`;
  }
  onAbout() {
    this.message ='About button clicked';

  }
}
