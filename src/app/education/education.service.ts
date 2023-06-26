import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educ = [
    {
      year: '2022 - 2023',
      grade: 'Third Year College',
      school: 'Holy Angel University',
      course: 'Information Technology with specialization in Web Development',
      color: '#497FBF'
    },

    {
      year: '2021 - 2022',
      grade: 'Second Year College',
      school: 'Holy Angel University',
      course: 'Information Technology with specialization in Web Development',
      color: '#FF4B41'
    },

    {
      year: '2020 - 2021',
      grade: 'First Year College',
      school: 'Holy Angel University',
      course: 'Information Technology with specialization in Web Development',
      color: '#FFDD63'
    },

    {
      year: '2018 - 2020',
      grade: 'Senior High School',
      school: 'Holy Angel University',
      course: 'Academic Track: Accountancy, Business & Management (ABM)',
      color: '#497FBF'
    },

    {
      year: '2014 - 2018',
      grade: 'Junior High School',
      school: 'Dominican School',
      course: '',
      color: '#FF4B41'
    },

    {
      year: '2008 - 2014',
      grade: 'Elementary',
      school: 'Dominican School (2011-2014)',
      course: 'International Philippine School in Al-Khobar (2008-2011)',
      color: '#FFDD63'
    },
  ]

  achieve = [
    {
      title: "Dean's List",
      year: "2020 - 2022",
      description: "For the 1st and 2nd semester of the academic year 2020 - 2021 & 2021 - 2022 Holy Angel University School of Computing"
    },

    {
      title: "With Honors",
      year: "2019 - 2020",
      description: "For the academic year of 2019 - 2020 from Accounting, Business, and Management course"
    },

    {
      title: "With Honors",
      year: "2018 - 2019",
      description: "For the academic year of 2018 - 2019 from Accounting, Business, and Management course"
    },
  ]

  exp = [
    {
      title: "MK House Consultancy",
      date: "December 2022",
      role: "Web Developer and Designer",
      description: "I created a website for a house consultant using Wix, designing the front- end and database.Focused on UX design, thanks to Wix's tools, the database setup was quick. Though I didn't use all my coding skills, it was a great learning experience for knowing where I am best and lack at."
    },

    {
      title: "School of Computing Senator",
      date: "2021",
      role: "Associate Chief of Multimedia, Arts, and Creatives (MAC) team for the Student Council of Holy Angel University",
      description: "During this time, I lead and collaborated with my peers to design public materials for the student council and make important decisions for the good of all Angelites."
    },

    {
      title: "I.V.Y League",
      date: "2020 - 2021",
      role: "Multimedia, Arts, and Creatives team member",
      description: "I volunteered for the organization that serves as the man-power of Student Council of Holy Angel University."
    },
  ]

  constructor() { }
}
