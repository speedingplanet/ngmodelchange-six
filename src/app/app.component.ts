import { Component, Input } from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  @Input()
  eventText: string;

  @Input()
  modelText: string;

  handlerText: string;

  handleEvent(event) {
    this.handlerText = event;
  }

  handleModel(model: NgModel) {
    console.log('Model: ', model);
    this.handlerText = model.value;
  }
}
