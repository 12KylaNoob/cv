import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = [
    {
      title: "MK House Consultancy",
      short: "Official website of MK House Consultant that showcases available houses for sale. This website is currently on revision for rebranding.",
      //url: "mkhouse",
      url: "https://www.mkhouseconsultancy.com",
      cover_img: "assets/mk_house/cover_photo.png"
    },

    {
      title: "Hospital Information Management System (HIMS)",
      short: "This is our thesis project where we made a simulated HIMS for students in HAU.", 
      url: "https://www.figma.com/design/lQFGfg3gnnjDg4VZO62lpL/HIMS?node-id=1132-11141&t=Ic2v9kSz87gTQSLT-1",
      cover_img: "assets/mk_house/HIMS.png"
    },

    //{
    //  title: 'Codebox',
    //  short: 'A Flutter and Dart project that aims to create an application that serves as a guide for programmers.',
    //  url: 'codebox',
    //  cover_img: 'assets/codebox/cover_photo.png'
    //},

    //{
    //  title: 'Mommy O Baking',
    //  short: 'SEO focused project. Learning ways on how to optimize the website using SEO techniques',
    //  url: 'mommyo',
    //  cover_img: 'assets/mommyo/home_page.png'
    //},

    //{
    //  title: 'Coffee Shop',
    //  short: 'Utilizing HTML, CSS and PHP in creating a coffee shop website with a CRUD page.',
    //  url: 'coffeeShop',
    //  cover_img: 'assets/project.jpg'
    //},

    //{
    //  title: "CK Restaurants",
    //  short: "Integrating MongoDB to the website with a CRUD page.",
    //  url: "ck",
    //  cover_img: "assets/project.jpg"
    //},
  ]

  constructor() { }
}
