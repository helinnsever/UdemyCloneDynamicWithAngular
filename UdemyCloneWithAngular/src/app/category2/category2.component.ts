import { Component, OnInit } from '@angular/core';
import { Category2 } from './category2';



@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.css']
})
export class Category2Component implements OnInit {

 

  category2: Category2[]=[
    {

      img:"https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
      name:"Tasarım"
    },
    {

      img:"https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
      name:"Yazılım Geliştirme"
    },

    {

      img:"https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
      name:"Pazarlama"
    },

    {

      img:"https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
      name:"BT ve Yazılım"
    },
    
  ]

  category3: Category2[]=[
    
    {

      img:"https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
      name:"Kişisel Gelişim"
    },

    {

      img:"https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
      name:"İşletme"
    },

    {

      img:"https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
      name:"Fotoğrafçılık"
    },

    {

      img:"https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
      name:"Müzik"
    },

    
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
