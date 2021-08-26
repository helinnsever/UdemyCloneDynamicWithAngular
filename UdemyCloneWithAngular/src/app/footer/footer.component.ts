import { Component, OnInit } from '@angular/core';
import { Footer } from './footer';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  list1: Footer[]=[
    {name:"Udemy Business"},
    {name:"Udemy'de Eğitim Verin"},
    {name:"Uygulamayı Edinin"},
    {name:"Hakkımızda"},
    {name:"İletişim"}
  ]

  list2: Footer[]=[
    {name:"Kariyer"},
    {name:"Blog"},
    {name:"Yardım ve Destek"},
    {name:"İş Ortaklığı"},
  ]

  list3: Footer[]=[
    {name:"Koşullar"},
    {name:"Gizlilik Politikası"},
    {name:"Site Haritası"},
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
