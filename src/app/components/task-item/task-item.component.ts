import { ITask } from './../../mock-tasks';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: ITask;

  constructor() {}

  ngOnInit(): void {}
}
