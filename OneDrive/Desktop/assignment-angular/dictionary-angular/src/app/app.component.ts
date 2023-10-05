import { Component, OnInit } from '@angular/core';
import { DictionaryServiceService } from './dictionary-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dictionary-angular';
  word_array: Array<any> = [];
  constructor(private DictionaryServiceService: DictionaryServiceService) {}
  ngOnInit(): void {
    this.DictionaryServiceService.requestData('crystals').subscribe(
      (data: any) => {
        this.word_array = data;
      }
    );
  }

  handleRequest(event: string): void {
    this.DictionaryServiceService.requestData(event).subscribe((data: any) => {
      this.word_array = data;
      console.log(this.word_array[0].phonetics[0].audio);
    });
  }
}
