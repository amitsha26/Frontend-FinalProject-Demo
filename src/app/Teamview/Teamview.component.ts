import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-teamview',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Teamview.component.html',
  styleUrl: './Teamview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamviewComponent { }
