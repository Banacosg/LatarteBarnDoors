import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../products';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {}

  // getImageUrl(): Observable<Photo[]> {
  //   return this.http.get<Photo[]>(this.apiUrl);
  //   const list: Photo[] = [];
  //   return list;
  // }
}
