import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[]=[

    {

    img:"https://img-c.udemycdn.com/course/240x135/1235124_7c5f_6.jpg",
    name:"(40+ Saat) Python | Sıfırdan İleri Seviye Programlama (2020)",
    instructor:"Mustafa Murat Coşkun",
    oldPrice: "₺27.99",
    newPrice:"₺219.99" 
  },

  {
      
    img:"https://img-c.udemycdn.com/course/240x135/2496622_433f.jpg",
    name:"(100+ Saat) Aranan Programcı Olma Kamp Kursu| Python,Java,C#",
    instructor:"Engin Demiroğ",
    oldPrice: "₺27.99",
    newPrice:"₺219.99" 
  },

  {
      
    img:"https://img-c.udemycdn.com/course/240x135/2310884_04cd_6.jpg",
    name:"(50 Saat) Python A-Z™: Veri Bilimi ve Machine Learning",
    instructor:"Mustafa Vahit Keskin",
    oldPrice: "₺27.99",
    newPrice:"₺219.99" 
  },

  {
      
    img:"https://img-c.udemycdn.com/course/240x135/629302_8a2d_2.jpg",
    name:"Learn Python Programming Masterclass",
    instructor:"Tim Buchalka,Jean-Paul Roberts..",
    oldPrice: "₺27.99",
    newPrice:"₺219.99" 
  },

  {
      
    img:"https://img-c.udemycdn.com/course/240x135/1586464_cae5_3.jpg",
    name:"Python ile Makine Öğrenmesi",
    instructor:"Prof.Dr.Şadi Evren Şeker",
    oldPrice: "₺27.99",
    newPrice:"₺219.99" 
  }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
