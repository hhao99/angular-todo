export class Todo {
    id: number;
    task: String = '';
    isDone: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(
            this, values
        )
    }
}
