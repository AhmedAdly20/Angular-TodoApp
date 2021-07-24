import { Component, EventEmitter, Input, Output } from '@angular/core';
import Todo from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() toggleEvent = new EventEmitter;
  @Output() deleteEvent = new EventEmitter;

  constructor(private todoService: TodoService) { }

  toggle(todo: Todo){
    this.toggleEvent.emit(todo);
  }

  delete(todo: Todo){
    this.todoService.delete(todo.id).subscribe(() => {
      this.deleteEvent.emit(todo);
    });
  }

  hi(todo: Todo){
    console.log(`Hello from todo ${todo.id}`);
  }
}
