import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'browse', component: BrowseComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
