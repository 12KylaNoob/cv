import { Component, OnInit } from '@angular/core';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educ!: any[];
  achieve!: any[];
  exp!: any[];

  constructor(private educService: EducationService) { }

  ngOnInit(): void {
    this.educ = this.educService.educ;
    this.achieve = this.educService.achieve;
    this.exp = this.educService.exp;
  }
}
