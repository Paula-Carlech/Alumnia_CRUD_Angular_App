import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.component.html',
  styleUrls: ['./aluno-edit.component.css']
})
export class AlunoEditComponent implements OnInit {
  aluno: any = {};

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const alunoIdParam = this.route.snapshot.paramMap.get('id');
    if (alunoIdParam !== null) {
      const alunoId = +alunoIdParam;
      this.alunoService.getAluno(alunoId).subscribe((data: any) => {
        this.aluno = data;
      });
    } else {
      console.error("ID do aluno não fornecido na URL.");
    }
  }

  updateAluno() {
    const alunoId = this.aluno.id;
    this.alunoService.updateAluno(alunoId, this.aluno).subscribe(() => {
      this.router.navigate(['/aluno-edit']);
    });
  }
}
