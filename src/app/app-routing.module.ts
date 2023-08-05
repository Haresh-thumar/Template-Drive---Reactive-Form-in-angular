import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdFormComponent } from './td-form/td-form.component';
import { TdfExampleComponent } from './tdf-example/tdf-example.component';
import { TdfValuechangesComponent } from './tdf-valuechanges/tdf-valuechanges.component';
import { TdfStatuschangesComponent } from './tdf-statuschanges/tdf-statuschanges.component';
import { RfValuechangesComponent } from './rf-valuechanges/rf-valuechanges.component';
import { RfStatuschangesComponent } from './rf-statuschanges/rf-statuschanges.component';

const routes: Routes = [
  { path: '', redirectTo: 'tdForm-example', pathMatch: 'full' },
  { path: 'td-form', component: TdFormComponent },
  { path: 'tdForm-example', component: TdfExampleComponent },
  { path: 'td-valuechanges', component: TdfValuechangesComponent },
  { path: 'td-statuschanges', component: TdfStatuschangesComponent },
  { path: 'rf-valuechanges', component: RfValuechangesComponent },
  { path: 'rf-statuschanges', component: RfStatuschangesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
