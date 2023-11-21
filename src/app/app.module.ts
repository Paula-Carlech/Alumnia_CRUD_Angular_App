import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
