import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})

export class UserService {
    private api = environment.api.url + "/users";

    constructor(private http: HttpClient) {}

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(this.api);
    }

    get(id){
        return this.http.get<User>(this.api + '/' + id);
    }

    post(user: User) {
        return this.http.post(this.api, user);
    }

    put(id, user: User) {
        return this.http.put(this.api  + '/' + id, user);
    }

    delete(id) {
        return this.http.delete(this.api  + '/' + id);
    }
}
