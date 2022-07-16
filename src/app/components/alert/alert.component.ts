import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() title:string = '';
  @Input() description:string = '';
  @Output() closedAlert = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    return this.closedAlert.emit(false);
  }

}
