import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faquestion',
  templateUrl: './faquestion.component.html',
  styleUrls: ['./faquestion.component.css']
})
export class FAQuestionComponent implements OnInit {
  isQuestionOpened: boolean = false;
  @Input() question:string = '';
  @Input() answer:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleQuestion ():void {
    this.isQuestionOpened = !this.isQuestionOpened
  }

  clickedOutsideQuestion (): void {
    this.isQuestionOpened = false;
  }

}
