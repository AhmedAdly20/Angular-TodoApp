import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todo from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() toggleEvent = new EventEmitter;
  @Output() deleteEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(todo: Todo){
    this.toggleEvent.emit(todo);
  }

  delete(todo: Todo){
    this.deleteEvent.emit(todo);
  }

  hi(todo: Todo){
    console.log(`Hello from todo ${todo.id}`);
  }
}
