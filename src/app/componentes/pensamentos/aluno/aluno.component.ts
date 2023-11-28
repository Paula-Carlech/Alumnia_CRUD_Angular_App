import { Aluno } from '../aluno';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html', 
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  @Input() aluno: Aluno = {
    id: 0,
    conteudo: 'teste@email.com',
    autoria: 'Fulano',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraAluno(): string {
    if(this.aluno.conteudo.length >= 256) {
      return 'aluno-g';
    }
    return 'aluno-p';
  }

}
