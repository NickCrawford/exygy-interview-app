import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: Observable<User>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.currentUser = this.userService.getUser();
  }

}
