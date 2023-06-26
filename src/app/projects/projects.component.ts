import { Component } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects!: any[];

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.projects;
  }
}
