type Todo = {
    id: number,
    todo: string,
    completed: boolean,
}
type TodoType = Todo[];

export const todos: TodoType = [
  {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: true,
  },
  {
    id: 2,
    todo: "Memorize the fifty states and their capitals",
    completed: false,
  },
];
