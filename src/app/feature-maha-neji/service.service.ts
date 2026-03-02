import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { residences } from '../model-maha-neji/model.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = 'http://localhost:3000/residences';

  constructor(private http: HttpClient) {}

  getSuggestionList(): Observable<residences[]> {
    return this.http.get<residences[]>(this.baseUrl);
  }

  getSuggestionById(id: number): Observable<residences> {
    return this.http.get<residences>(`${this.baseUrl}/${id}`);
  }

  addSuggestion(suggestion: residences): Observable<residences> {
    return this.http.post<residences>(this.baseUrl, suggestion);
  }

  updateSuggestion(id: number, suggestion: residences): Observable<residences> {
    return this.http.put<residences>(`${this.baseUrl}/${id}`, suggestion);
  }

  deleteSuggestion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
