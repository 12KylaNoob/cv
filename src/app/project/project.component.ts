import { Component, OnInit, HostListener } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects!: any[];
  projectsLimit: number = 3;

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.projects;
  }

  ngOnInit(): void {
    this.updateProjectsLimit();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.updateProjectsLimit();
  }

  updateProjectsLimit() {
    if (this.isScreenSizeSmall()) {
      this.projectsLimit = 2;
    } else if (this.isScreenSizeLarge()) {
      this.projectsLimit = 4;
    } else {
      this.projectsLimit = 3;
    }
  }

  // getLimitedProjects(): any[] {
  //   return this.projects.slice(0, this.getProjectsLimit());
  // }

  isScreenSizeSmall(): boolean {
    return window.innerWidth < 1000;
  }

  isScreenSizeLarge(): boolean {
    return window.innerWidth >= 1000;
  }

}
