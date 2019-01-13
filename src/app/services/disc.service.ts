import { Injectable } from '@angular/core';
import { Disc } from '../models/disc';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscService {

  constructor(private http: HttpClient) { }

  getDiscs(): Observable<Disc[]> {
    return this.http.get<Disc[]>('assets/data/discs.json');
  }
}
