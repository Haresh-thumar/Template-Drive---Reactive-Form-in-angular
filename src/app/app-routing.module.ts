import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdFormComponent } from './td-form/td-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'td-form', pathMatch: 'full' },
  { path: 'td-form', component: TdFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
