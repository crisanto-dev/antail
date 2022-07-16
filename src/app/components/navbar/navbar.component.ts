import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  links= [
    {path: '/', name: 'Home'},
    {path: '/team', name: 'Team'},

  ];

  isProfileOpened: boolean = false;
  isDropdownOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleProfile ():void {
    this.isProfileOpened = !this.isProfileOpened;
  }

  toggleDropdown (): void {
    this.isDropdownOpened = !this.isDropdownOpened;
  }

  clickedOutsideProfile (): void {
    this.isProfileOpened = false;
  }

  clickedOutsideDropdown (): void {
    this.isDropdownOpened = false;
  }

}
