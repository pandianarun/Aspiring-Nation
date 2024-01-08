import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getImageUrl(imageName: string): string {
    return `${this.baseUrl}/images/${imageName}`;
  }
}
