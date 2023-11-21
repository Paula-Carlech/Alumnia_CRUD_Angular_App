import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoCreateComponent } from './aluno-create/aluno-create.component';
import { AlunoEditComponent } from './aluno-edit/aluno-edit.component';
import { AlunoDetailsComponent } from './aluno-details/aluno-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoListComponent,
    AlunoCreateComponent,
    AlunoEditComponent,
    AlunoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
