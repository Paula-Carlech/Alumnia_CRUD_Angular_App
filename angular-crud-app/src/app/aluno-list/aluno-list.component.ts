// aluno-list.component.ts
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {
  alunos: any[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit() {
    this.getAlunos();
  }

  getAlunos() {
    this.alunoService.getAlunos().subscribe(
      (data: any) => {
        this.alunos = data;
      },
      (error: any) => {
        console.error('Erro ao obter alunos:', error);
      }
    );
  }

  deleteAluno(id: number) {
    this.alunoService.deleteAluno(id).subscribe(
      () => {
        this.getAlunos();
      },
      (error: any) => {
        console.error('Erro ao excluir aluno:', error);
      }
    );
  }
}
