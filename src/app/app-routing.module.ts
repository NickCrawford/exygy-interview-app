import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { BrowseComponent } from './browse/browse.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'browse', component: BrowseComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/edit', component: EditProfileComponent },
  { path: 'login', component: LoginComponent },
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
