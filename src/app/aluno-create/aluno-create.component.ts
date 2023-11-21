import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent {
  novoAluno = {
    nome: '',
    email: '',
    numeroMatricula: ''
  };

  constructor(private alunoService: AlunoService, private router: Router) {}

  createAluno() {
    this.alunoService.addAluno(this.novoAluno).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
