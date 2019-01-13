import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscComponent } from './components/disc/disc.component';
import { DiscListComponent } from './components/disc-list/disc-list.component';
import { CounterComponent } from './components/counter/counter.component';
import { MainComponent } from './views/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './views/main/header/header.component';
import { SubheaderComponent } from './views/main/subheader/subheader.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NewDiscComponent } from './components/new-disc/new-disc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DiscComponent,
    DiscListComponent,
    CounterComponent,
    MainComponent,
    HeaderComponent,
    SubheaderComponent,
    NewDiscComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    NewDiscComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
