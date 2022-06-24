import { Component, OnInit } from '@angular/core';

import { ITask } from '../../mock-tasks';
import { TaskService } from './../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: ITask[]): void => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: ITask) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t: ITask) => t.id !== task.id))
      );
  }

  toggleReminder(task: ITask) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: ITask) {
    this.taskService
      .addTask(task)
      .subscribe((task: ITask) => this.tasks.push(task));
  }
}
