import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeadingComponentComponent } from './heading-component/heading-component.component';
import { MeaningsComponent } from './meanings/meanings.component';

@NgModule({
  declarations: [AppComponent, InputBoxComponent, HeadingComponentComponent, MeaningsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
