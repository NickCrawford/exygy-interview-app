import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { User } from '../_models';
 
@Injectable()
export class UserService {
    private subject = new BehaviorSubject<User>(null);
 
    initUser() {
        let user = JSON.parse(localStorage.getItem('currentUser'))
        if (user) this.setUser(user);
    }

    setUser(user: User) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.subject.next(user);
    }
 
    clearUser() {
        localStorage.removeItem('currentUser');
        this.subject.next(null);
    }
 
    getUser(): Observable<User> {
        return this.subject.asObservable();
    }
}

// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';

// import { User } from '../_models';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//     currentUser: Observable<User>;

//     constructor() { }

//     /** GET current user */
//     getCurrentUser(): Observable<User> {
//         return of(JSON.parse(localStorage.getItem('currentUser')))
//     }

//     setCurrentUser(user: User) {
//         console.log('Set User', user)
//         this.currentUser = user;
//         localStorage.setItem('currentUser', JSON.stringify(user));
//     }

//     removeCurrentUser() {
//         console.log('Removing User')
//         this.currentUser = null;
//         localStorage.removeItem('currentUser');
//     }
// }


