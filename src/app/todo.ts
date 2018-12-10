export class Todo {
    id: number;
    task: String = '';
    isDone: boolean;

    constructor(values: Object = {}) {
        Object.assign(
            this, values
        )
    }
}
