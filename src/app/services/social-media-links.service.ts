import { Injectable } from '@angular/core';
import { faFacebook , faInstagram, faTwitter, faTelegram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaLinksService {

   _socialMediaLinks = [
    { 
      path: 'facebook.com',
      name: 'Facebook',
      icon: faFacebook,
    },
    { 
      path: 'twitter.com',
      name: 'Twitter',
      icon: faTwitter,
    },
    { 
      path: 'instagram.com/_pireno_',
      name: 'Instagram',
      icon: faInstagram,
    },
    { 
      path: 'Telegram.com',
      name: 'Telegram',
      icon: faTelegram,
    },
    { 
      path: 'whatsapp.com',
      name: 'Whatsapp',
      icon: faWhatsapp,
    }
  ]

  constructor() { }

  socialMedia ():Array<Object> {
    return this._socialMediaLinks;
  }
}
