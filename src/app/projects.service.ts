import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = [
    {
      title: "MK House Consultancy",
      short: "Official website of MK House Consultant that showcases available houses for sale. This website includes the use of database, some Javascript code, and mostly front-end designing.",
      url: "mkhouse",
      cover_img: "assets/mk_house/cover_photo.png"
    },

    {
      title: 'Codebox',
      short: 'A Flutter and Dart project that aims to create an application that serves as a guide for programmers.',
      url: 'codebox',
      cover_img: 'assets/codebox/cover_photo.png'
    },

    {
      title: 'Mommy O Baking',
      short: 'SEO focused project. Learning ways on how to optimize the website using SEO techniques',
      url: 'mommyo',
      cover_img: 'assets/mommyo/home_page.png'
    },

    {
      title: 'Coffee Shop',
      short: 'Utilizing HTML, CSS and PHP in creating a coffee shop website with a CRUD page.',
      url: 'coffeeShop',
      cover_img: 'assets/project.jpg'
    },

    {
      title: "CK Restaurants",
      short: "Integrating MongoDB to the website with a CRUD page.",
      url: "ck",
      cover_img: "assets/project.jpg"
    },
  ]

  constructor() { }
}
