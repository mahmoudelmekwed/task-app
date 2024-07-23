import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './task.model';
import { TaskService } from '../shared/services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required:true}) id!: string;
  @Input({required:true}) name?:string;
  isAddTask = false;

  private taskService = inject(TaskService); 


  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.id);
  }

  onAddTask(){
    this.isAddTask = true;
  }

  onCloseTask(){
    this.isAddTask = false;
  }

}
