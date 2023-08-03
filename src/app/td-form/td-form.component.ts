import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent {

  /*--------------------------------------------------------------------------
                              One Way Data Binding
  --------------------------------------------------------------------------*/
  @ViewChild('contactForm') onewaydataform!: NgForm;
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
  checkdata() {
    console.log(this.onewaydataform.value);
  }
  onSubmit() {
    console.log(this.onewaydataform);
  }


  /*--------------------------------------------------------------------------
                              Two Way Data Binding
  --------------------------------------------------------------------------*/
  @ViewChild('contactForm') twowaydataform!: NgForm;
  /*----- Bydefault Fill the Data in Form -----*/
  name: string = 'haresh';
  messages: string = 'Messages by Google is the official Google app for messaging over Rich Communication Services';
  gender: string = 'male';
  onSubmitdata() {
    if (this.twowaydataform.valid) {
      console.log(this.twowaydataform);
    } else {
      alert('please fill the proper data.')
    }
  }


}


/*----- one way data binding -----*/
export class country {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}