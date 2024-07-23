import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../task.model';
import { CardComponent } from "../../shared/card/card.component";
import { CommonModule } from '@angular/common';
import { TaskService } from '../../shared/services/task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required:true}) task!: Task;

  private taskService = inject(TaskService)

  onComplete(){
    this.taskService.removeTask(this.task.id)
  }
}
