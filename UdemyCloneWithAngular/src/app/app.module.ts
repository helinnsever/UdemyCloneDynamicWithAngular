import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { BillboardComponent } from './billboard/billboard.component';
import { CoursedescriptionComponent } from './coursedescription/coursedescription.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { CourseComponent } from './course/course.component';
import { Course2DesComponent } from './course2-des/course2-des.component';
import { CourseList2Component } from './course-list2/course-list2.component';
import { Category2Component } from './category2/category2.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BillboardComponent,
    CoursedescriptionComponent,
    CourseCategoryComponent,
    CourseComponent,
    Course2DesComponent,
    CourseList2Component,
    Category2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
