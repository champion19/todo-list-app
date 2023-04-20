import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';
import{ Guid }from "guid-typescript";
import { Todo } from 'src/models/todo.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos: Todo[] = []
  todosCompleted: Todo[]= [];

  ngOnInit(){
    this.getIsCompleted();
  }

  getIsCompleted(): Todo[] {
    return this.todosCompleted = this.todos.filter(todo => todo.isComplete);
  }

  onSubmit(form:NgForm){
    let todo = new Todo(Guid.create(),form.value.title,false);
    this.todos.push(todo);
    form.resetForm();
  }

  onComplete(id:Guid){
    let todo=this.todos.filter(x=>x.id===id)[0];
    todo.isComplete=true;
  }

  onDelete(id:Guid){
    let todo=this.todos.filter(x=>x.id ===id)[0];
    let index=this.todos.indexOf(todo,0);
    if(index>-1){
      this.todos.splice(index,1);
    }
  }
}
