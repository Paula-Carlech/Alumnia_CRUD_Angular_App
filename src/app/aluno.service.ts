import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private apiUrl = 'http://seuservidor/api/alunos';

  constructor(private http: HttpClient) {}

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAluno(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addAluno(aluno: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, aluno);
  }

  updateAluno(aluno: any): Observable<any> {
    const url = `${this.apiUrl}/${aluno.id}`;
    return this.http.put<any>(url, aluno);
  }

  deleteAluno(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
