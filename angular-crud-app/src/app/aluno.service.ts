import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Aluno } from './models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private apiUrl = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) {}

  getAluno(id: number): Observable<Aluno> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Aluno>(url);
  }
}
