import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Person } from '../shared/model/person';
import { PersonsService } from '../services/person.service';
import { PersonCardComponent } from "../person-card/person-card.component";

@Component({
    selector: 'app-teamview',
    standalone: true,
    templateUrl: './Teamview.component.html',
    styleUrl: './Teamview.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        PersonCardComponent
    ]
})
export class TeamviewComponent implements OnInit {
  allPersons : Person[] = [];
  readonly PERSONS_PER_TEAM = 4;
constructor(private personService : PersonsService){}

  ngOnInit(): void {
    this.allPersons = this.personService.list();
  } 

}
