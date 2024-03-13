import { Component, OnInit } from '@angular/core';
import { HouseholdTasksService } from '../services/household-tasks.service';
import { HouseholdTask } from '../shared/model/household-task';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-household-task-assignment',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './household-task-assignment.component.html',
  styleUrl: './household-task-assignment.component.css'
})
export class HouseholdTaskAssignmentComponent  implements OnInit{
  
  allTasks : HouseholdTask[] = [];
selectedTask? : HouseholdTask;
  
constructor(
    private householdTasksService : HouseholdTasksService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    }

