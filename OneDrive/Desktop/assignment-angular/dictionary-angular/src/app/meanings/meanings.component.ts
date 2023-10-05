import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meanings',
  templateUrl: './meanings.component.html',
  styleUrls: ['./meanings.component.css'],
})
export class MeaningsComponent {
  @Input() meanings_array: any;

  printdata(): void {
    console.log(this.meanings_array);
  }
}
