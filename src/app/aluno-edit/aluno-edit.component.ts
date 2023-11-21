import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.component.html',
  styleUrls: ['./aluno-edit.component.css']
})
export class AlunoEditComponent implements OnInit {
  alunoEdit: any = {};

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const alunoId = +this.route.snapshot.paramMap.get('id');

    this.alunoService.getAluno(alunoId).subscribe((data: any) => {
      this.alunoEdit = data;
    });
  }

  updateAluno() {
    this.alunoService.updateAluno(this.alunoEdit).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
