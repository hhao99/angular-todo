import { Component } from '@angular/core';
import { Todo } from 'todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo Application';
  todo_list: Todo[] = [
    { id: 1, task: 'task 1'},
    { id: 2, task: 'task 2'},
    { id: 3, task: 'task 3', isDone: true},
    
  ]

  onAddTodo(todo) {
    todo.id = this.todo_list.length + 1;
    todo.isDone = false;
    this.todo_list.push(todo)
  }
}
