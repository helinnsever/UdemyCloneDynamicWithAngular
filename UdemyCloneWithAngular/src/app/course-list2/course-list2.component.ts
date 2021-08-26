import { Component, OnInit } from '@angular/core';
import { Course2 } from './course-list2';

@Component({
  selector: 'app-course-list2',
  templateUrl: './course-list2.component.html',
  styleUrls: ['./course-list2.component.css']
})
export class CourseList2Component implements OnInit {

  courses2: Course2[]=[

    {

    img:"https://img-c.udemycdn.com/course/240x135/1565838_e54e_12.jpg",
    name:"The Complete 2021 Web Development Bootcamp",
    instructor:"Dr.Angela Yu",
    price:"₺409,99"
  },

  {
      
    img:"https://img-c.udemycdn.com/course/240x135/793796_0e89.jpg",
    name:"Microsoft Excel - Excel from Beginner to Advanced",
    instructor:"Kyle Pew",
    price:"₺309,99"
  },

  {
      
    img:"https://img-c.udemycdn.com/course/240x135/1643044_e281.jpg",
    name:"Graphic Design Masterclass - Learn GREAT Design",
    instructor:"Lindsay Marsh",
    price:"₺399,99"
  },

  {
      
    img:"https://img-c.udemycdn.com/course/240x135/614772_233b_9.jpg",
    name:"The Complete Cyber Security Course : Hackers Exposed!",
    instructor:"Nathan House",
    price:"₺249,99"
  },

  {
      
    img:"https://img-c.udemycdn.com/course/240x135/914296_3670_8.jpg",
    name:"The Complete Digital Marketing Course - 12 Courses in 1",
    instructor:"Rob Percival",
    price:"₺409,99"
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
