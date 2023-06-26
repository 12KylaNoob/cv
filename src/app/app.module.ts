import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CodeboxComponent } from './project/codebox/codebox.component';
import { MommyoComponent } from './project/mommyo/mommyo.component';
import { CoffeeShopComponent } from './project/coffee-shop/coffee-shop.component';
import { CkComponent } from './project/ck/ck.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectLayoutComponent } from './projects/project-layout/project-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ProjectComponent,
    ContactsComponent,
    NavigationComponent,
    CodeboxComponent,
    MommyoComponent,
    CoffeeShopComponent,
    CkComponent,
    ProjectsComponent,
    ProjectLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
