import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdFormComponent } from './td-form/td-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TdfExampleComponent } from './tdf-example/tdf-example.component';
import { TdfValuechangesComponent } from './tdf-valuechanges/tdf-valuechanges.component';
import { TdfStatuschangesComponent } from './tdf-statuschanges/tdf-statuschanges.component';

@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    TdfExampleComponent,
    TdfValuechangesComponent,
    TdfStatuschangesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
