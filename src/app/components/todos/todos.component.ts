import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = [
    {
      id: 1, text: 'first Task', completed: false
    },
    {
      id: 2, text: 'second Task', completed: true
    },
    {
      id: 3, text: 'third Task', completed: true
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  toggleTodo(todo){
    this.todos.map(item =>{
      if (todo.id === item.id) {
        item.completed = ! item.completed;
      }
      return item;
    })
  }

  deleteTodo(todo){
    this.todos = this.todos.filter(item => {
      return item.id !== todo.id;
    });
  }

  addTodo(todo){
    this.todos.push(todo);
  }
}
