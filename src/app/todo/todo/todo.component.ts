import { Component, inject } from '@angular/core';
import { Todo, TodoStatus } from '../model/todo';
import { TodoService } from '../service/todo.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
  standalone: true,
  imports: [FormsModule],
})
export class TodoComponent {
  private todoService = inject(TodoService);

  todos: Todo[] = [];
  todo = new Todo();

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  constructor() {
    this.todos = this.todoService.getTodos();
  }

  getByStatus(status: TodoStatus) {
    return this.todoService.getByStatus(status);
  }

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  changeNextStatus(todo: Todo) {
    this.todoService.changeNextStatus(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
