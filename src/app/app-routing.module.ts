import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdFormComponent } from './td-form/td-form.component';
import { TdfExampleComponent } from './tdf-example/tdf-example.component';

const routes: Routes = [
  { path: '', redirectTo: 'td-form', pathMatch: 'full' },
  { path: 'td-form', component: TdFormComponent },
  { path: 'tdForm-example', component: TdfExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
