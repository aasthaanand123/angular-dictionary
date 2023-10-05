import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-component',
  templateUrl: './heading-component.component.html',
  styleUrls: ['./heading-component.component.css'],
})
export class HeadingComponentComponent {
  @Input() word: string = '';
  @Input() phonetic: string = '';
  @Input() audiosrc: string = '';
}
