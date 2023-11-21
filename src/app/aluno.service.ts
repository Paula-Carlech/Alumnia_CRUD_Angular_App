// aluno.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private apiUrl = 'assets/alunos.json';
  private alunoUrl = 'http://localhost:4200/alunos';

  constructor(private http: HttpClient) {}

  getAlunos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getAluno(id: number): Observable<any> {
    const url = `${this.alunoUrl}/${id}`;
    return this.http.get(url);
  }

  addAluno(aluno: any): Observable<any> {
    return this.http.post(this.alunoUrl, aluno);
  }

  updateAluno(id: number, aluno: any): Observable<any> {
    const url = `${this.alunoUrl}/${id}`;
    return this.http.put(url, aluno);
  }

  deleteAluno(id: number): Observable<any> {
    const url = `${this.alunoUrl}/${id}`;
    return this.http.delete(url);
  }
}
