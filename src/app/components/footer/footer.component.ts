import { Component, OnInit } from '@angular/core';
import { SocialMediaLinksService } from 'src/app/services/social-media-links.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  links = [
    {path: '/contact', name: 'Contact'},
    {path: '/about', name: 'About'},
    {path: '/faqs', name: 'faqs'}
  ]
  constructor(
    public socialMediaService: SocialMediaLinksService
  ) { }

  ngOnInit(): void {
  }

  socialMediaLinks(){
    return this.socialMediaService._socialMediaLinks;
  }

}
