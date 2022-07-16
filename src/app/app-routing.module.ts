import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FAQComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StatusComponent } from './pages/status/status.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'faqs', component: FAQComponent},
  {path: 'team', component:TeamComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'status', component: StatusComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
