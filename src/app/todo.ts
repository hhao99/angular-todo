export class Todo {
  id: number = 0;
  task: String = "new task";
  isDone: boolean = false;
  
  constructor(values: Object = {}) {
    Object.assign(this, values)
  }
}
