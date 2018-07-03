import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowseComponent } from './browse/browse.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module'; // Where our core components live that are used once. Header Bar, footer, etc
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './profile/profile.component'; // This is where our "dumb" reusable components live. Typically come from the pattern library

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BrowseComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
