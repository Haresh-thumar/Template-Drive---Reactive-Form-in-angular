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
  @ViewChild('twowaydataform') twowaydataform!: NgForm;
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


  /*--------------------------------------------------------------------------
                              ngModel Group Object
  --------------------------------------------------------------------------*/
  @ViewChild('grouponjectform') grouponjectform!: NgForm;
  groupobjectsubmit() {
    console.log(this.grouponjectform.value);
  }


  /*--------------------------------------------------------------------------
                            Set-Value & Patch-Value
  --------------------------------------------------------------------------*/
  @ViewChild('setpetchvalueform') setpetchvalueform!: NgForm;
  setpatchvaluesubmit() {
    console.log(this.setpetchvalueform.value);
  }
  fillValues() {
    /*------ set value ------*/
    this.setpetchvalueform.form.setValue({
      firstName: 'Hitesh Thumar',
      userdata: {
        username: 'hits@5989kl',
        password: 'hccs564@cvevi59696'
      },
      emails: 'hitesh.t@gurukul.org',
      isMarried: true,
      message: 'very Android phone has Google applications, including the Messages app.'
    });

    /*------ patch value ------*/
    this.setpetchvalueform.form.patchValue(this.setpetchvalueform);
  }



  /*--------------------------------------------------------------------------
                  Show and hide validation error messages
  --------------------------------------------------------------------------*/
  @ViewChild('showhideerrorform') showhideerrorform!: NgForm;
  nameModel: string = '';
  showhideerrorsubmit() {
    console.log(this.showhideerrorform.value);
  }


  /*--------------------------------------------------------------------------
                  Show and hide validation error messages
  --------------------------------------------------------------------------*/
  @ViewChild('contactForm') contactForm!: NgForm;
  contact?: contact = {
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    isToc: true,
  };
  onSubmited() {
    console.log(this.contactForm.value);
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

/*----- Show and hide validation error messages -----*/
export class contact {
  firstname!: string;
  lastname!: string;
  gender!: string;
  isToc!: boolean;
  email!: string;
} 