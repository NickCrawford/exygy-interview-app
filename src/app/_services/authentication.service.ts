import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    private authUrl = 'http://exygy-challenge-backend.herokuapp.com/users/login'; // Ideally we would keep this in a seperate config file hidden on the server

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>(`${this.authUrl}`, { email: email, password: password }, httpOptions)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}