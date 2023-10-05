import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DictionaryServiceService {
  constructor(private http: HttpClient) {}
  requestData(word: string) {
    return this.http.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
  }
}
