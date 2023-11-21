import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoCreateComponent } from './aluno-create/aluno-create.component';
import { AlunoEditComponent } from './aluno-edit/aluno-edit.component';

const routes: Routes = [
  { path: '', component: AlunoListComponent },
  { path: 'create', component: AlunoCreateComponent },
  { path: 'edit/:id', component: AlunoEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
