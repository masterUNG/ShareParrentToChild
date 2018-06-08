import { Component } from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [ChildComponent]
})
export class AppComponent {

  nameParrentString = 'App Component';
  nameChildString = 'Child Component';
  numberInt = 0;

  numberFromChidInt = 0;

  onChangeNumberByChild(numberChange) {
    this.numberFromChidInt = numberChange;
  }

  onClickCount() {
    this.numberInt = this.numberInt + 1;
  }


} // AppComponent Class
