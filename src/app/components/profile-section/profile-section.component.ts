import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css']
})
export class ProfileSectionComponent implements OnInit {

  profile = {
    username: 'crisanto',
    about: 'Computer systems engineering student',
    image: 'https://media-exp1.licdn.com/dms/image/C4D03AQHlqaTit7GZXA/profile-displayphoto-shrink_200_200/0/1640644221915?e=1658966400&v=beta&t=c4MP8lTl9prIBDW4oOBlhhkg4e9q4kGkWsloKcVnPs0',
    firstName: 'Cristian',
    lastName: 'Escalante',
    email: 'heac.creative@gmail.com',
    country: 'El Salvador',
    street: '',
    city: '',
    province: '',
    zipCode: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
