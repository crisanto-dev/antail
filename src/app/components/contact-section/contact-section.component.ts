import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  isAlertOpened:boolean = false;
  isTermsPolAccept:boolean = false;

  firstName:string = 'Cristian';
  lastName1:string = 'Escalante';
  companyName:string = 'Glow';
  email1:string = 'crisanto@example.org';
  phoneNumber:string = '';
  message1:string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptates illum debitis autem minima accusamus, laborum eligendi amet velit voluptatem molestiae eos corporis, error sit magnam unde nesciunt! Voluptates, hic!';


  constructor() { }

  ngOnInit(): void {
  }

  sendRequest () {
    this.isAlertOpened = true;
    setTimeout(() => {
      this.isAlertOpened = false;
    }, 5000);
  }

  alertClose(closeNow:boolean):void {
    this.isAlertOpened = closeNow;
  }
  toggleTermsPolAccept():void {
    this.isTermsPolAccept = !this.isTermsPolAccept;
  }
}
