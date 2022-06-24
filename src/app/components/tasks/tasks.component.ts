import { Component, OnInit } from '@angular/core';
import { TASKS, ITask } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = TASKS;

  constructor() {}

  ngOnInit(): void {}
}
