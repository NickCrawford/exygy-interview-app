import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../_models';
import { UserService } from '../../_services';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  currentUser: Observable<User>;

  constructor(private userService: UserService) {
    this.userService.initUser();
  }

  ngOnInit() {
    this.currentUser = this.userService.getUser();
  }

}
