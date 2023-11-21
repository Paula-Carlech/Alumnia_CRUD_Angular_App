import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-details',
  templateUrl: './aluno-details.component.html',
  styleUrls: ['./aluno-details.component.css']
})
export class AlunoDetailsComponent implements OnInit {
  alunoDetalhes: any = {};

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.has('id')) {
      const alunoId = +this.route.snapshot.paramMap.get('id');

      this.alunoService.getAluno(alunoId).subscribe((data: any) => {
        this.alunoDetalhes = data;
      });
    } else {
      console.error('ID do aluno não encontrado na rota.');
    }
  }
}
