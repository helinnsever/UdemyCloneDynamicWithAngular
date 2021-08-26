import { Component, OnInit } from '@angular/core';
import { CourseCategory } from './courseCategory';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css']
})
export class CourseCategoryComponent implements OnInit {

  category1: CourseCategory[]=[
    {name:"Python"},
    {name:"Excel"},
    {name:"Web Geliştirme"},
    {name:"JavaScript"},
    {name:"Veri Bilimi"},
    {name:"AWS Sertifikasyonu"},
    {name:"Çizim"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
