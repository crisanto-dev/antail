import { Component, OnInit } from '@angular/core';
import {faFacebook, faTelegram, faTwitch, faTwitter, faLinkedin, faBehance} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.css']
})
export class TeamSectionComponent implements OnInit {
  teams = [
    {
      name: 'Whitney Francis', 
      occupation: 'Copywriter', 
      image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      socialLinks: [
        {
          path: '#rediretToFacebook',
          name: 'Facebook',
          icon: faFacebook
        },
        {
          path: '#redirectToTwich',
          name: 'Twitch',
          icon: faTwitch
        }
      ]
    },
    {
      name: 'Aiony Haust', 
      occupation: 'Copywriter', 
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      socialLinks: [
        {
          path: '#rediretToLinkedin',
          name: 'Linkedin',
          icon: faLinkedin
        },
        {
          path: '#redirectToTwich',
          name: 'Twitch',
          icon: faTwitch
        },
        {
          path: '#redirectToTwitter',
          name: 'Twitter',
          icon: faTwitter
        }
      ]
    },
    {
      name: 'Jhon Cajiina', 
      occupation: 'UI/UX Designer', 
      image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      socialLinks: [
        {
          path: '#rediretToBehance',
          name: 'Behance',
          icon: faBehance
        },
        {
          path: '#redirectToTwich',
          name: 'Twitch',
          icon: faTwitch
        },
        {
          path: '#redirectToTwitter',
          name: 'Twitter',
          icon: faTwitter
        }
      ]
    }
  ]
 
  constructor() { }

  ngOnInit(): void {
  }

}
