import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesOneComponent } from './components/features-one/features-one.component';
import { BannerComponent } from './components/banner/banner.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { AlertComponent } from './components/alert/alert.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { FAQComponent } from './pages/faq/faq.component';
import { FAQuestionComponent } from './components/faquestion/faquestion.component';
import { SupportSectionComponent } from './components/support-section/support-section.component';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { TeamComponent } from './pages/team/team.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StatsSectionComponent } from './components/stats-section/stats-section.component';
import { StatusComponent } from './pages/status/status.component';
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    ClickOutsideDirective,
    FooterComponent,
    ContentSectionComponent,
    HeroComponent,
    FeaturesOneComponent,
    BannerComponent,
    PricingComponent,
    CheckoutFormComponent,
    AlertComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    FAQComponent,
    FAQuestionComponent,
    SupportSectionComponent,
    TestimonialSectionComponent,
    ContactSectionComponent,
    TeamSectionComponent,
    TeamComponent,
    ProfileComponent,
    PageNotFoundComponent,
    StatsSectionComponent,
    StatusComponent,
    ProfileSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
