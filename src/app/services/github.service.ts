import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {
  }

  getRepo(): Observable<any> {
    return this.http.get('/repos/angular/angular').pipe(map(data => data));
  }
}
