import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css'],
})
export class InputBoxComponent {
  form_input: string = '';
  @Output() sendRequest: EventEmitter<string> = new EventEmitter<string>();
  handleClick(): void {
    this.sendRequest.emit(this.form_input);
    this.form_input = '';
  }
}
