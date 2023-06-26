import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills = [
    {
      skill: 'Python',
      progress: 65,
      icon: 'assets/python.png'
    },

    {
      skill: 'JavaScript',
      progress: 60,
      icon: 'assets/js.png'
    },

    {
      skill: 'HTML',
      progress: 80,
      icon: 'assets/html.png'
    },

    {
      skill: 'CSS',
      progress: 78,
      icon: 'assets/css.png'
    },

    {
      skill: 'Vue.js',
      progress: 58,
      icon: 'assets/vue.png'
    },

    {
      skill: 'Angular',
      progress: 75,
      icon: 'assets/angular.png'
    },

    {
      skill: 'Dart',
      progress: 63,
      icon: 'assets/dart.png'
    },

    {
      skill: 'Flutter',
      progress: 63,
      icon: 'assets/flutter.png'
    },

    {
      skill: 'Wordpress',
      progress: 52,
      icon: 'assets/wordpress.png'
    },

    {
      skill: 'MongoDB',
      progress: 70,
      icon: 'assets/mongodb.png'
    },

    {
      skill: 'SQL',
      progress: 73,
      icon: 'assets/dbs.png'
    },

    {
      skill: 'SEO',
      progress: 50,
      icon: 'assets/SEO.png'
    },

    {
      skill: 'Photoshop',
      progress: 80,
      icon: 'assets/photoshop.png'
    },

  ];

  constructor() { }

  getSkills(): Observable<any[]> {
    return of(this.skills);
  }
}
