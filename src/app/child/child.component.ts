import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() receiveFromParrent: string;
  @Input() receiveNumber: number;

  @Output() eventChangeNumberByChild = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClikcChildCount() {
    this.receiveNumber = this.receiveNumber + 1;
    this.eventChangeNumberByChild.emit(this.receiveNumber);
  }



} // ChildComponet Class
