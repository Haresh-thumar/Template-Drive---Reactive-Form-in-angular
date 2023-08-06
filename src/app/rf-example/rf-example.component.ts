import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf-example',
  templateUrl: './rf-example.component.html',
  styleUrls: ['./rf-example.component.scss']
})
export class RfExampleComponent {

  studentForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    middlename: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    fullName: new FormControl(''),
    dob: new FormControl('', [Validators.required, Validators.minLength(2)]),
    age: new FormControl('', [Validators.required, Validators.minLength(2)]),
    licenceNo: new FormControl(''),
    country: new FormControl('', [Validators.required, Validators.minLength(2)]),
    state: new FormControl(''),
    identityType: new FormControl(''),
    cardno: new FormControl(''),
  });

  ngOnInit(): void {
    this.studentForm.controls['firstname'].valueChanges.subscribe(res => {
      console.log(res);
      this.createFullName();
    });
    this.studentForm.controls['middlename'].valueChanges.subscribe(res => {
      console.log(res);
      this.createFullName();
    });
    this.studentForm.controls['lastname'].valueChanges.subscribe(res => {
      console.log(res);
      this.createFullName();
    });
  }

  ngAfterViewInit(): void {
    /*============ for dob ============*/
    this.studentForm.controls['dob'].valueChanges.subscribe(res => {
      console.log(res);
      /*----- calculate age ------*/
      const selectDob = new Date(res);
      const dobYear = selectDob.getFullYear();
      const currentYear = new Date().getFullYear();
      const finalAge = currentYear - dobYear;
      this.studentForm.controls['age'].setValue(finalAge);
      /*----- Set Required Validation if Age is 18 plus ------*/
      if (finalAge > 18) {
        this.studentForm.controls['licenceNo'].addValidators(Validators.required);
      } else {
        this.studentForm.controls['licenceNo'].removeValidators(Validators.required);
      }
    });
    /*============ for country ============*/
    this.studentForm.controls['country'].valueChanges.subscribe(res => {
      if (res === 'India') {
        this.studentForm.controls['state'].addValidators(Validators.required);
      } else {
        this.studentForm.controls['state'].removeValidators(Validators.required);
      }
    });
    /*============ for Identity Card ============*/
    this.studentForm.controls['identityType'].valueChanges.subscribe(res => {
      if (res === 'aadharCard') {
        this.studentForm.controls['cardno'].setValidators(Validators.pattern('^[A-Za-z]{5}[0-9]{4}[A-Za-z]$'));
      } else {
        this.studentForm.controls['cardNo'].setValidators(Validators.pattern('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$'));
      }
    });
  }

  createFullName() {
    /*------ Join the Full Name ------*/
    const fullName = this.studentForm.controls['firstname'].value + ' ' + this.studentForm.controls['middlename'].value + ' ' + this.studentForm.controls['lastname'].value;
    this.studentForm.controls['fullName'].setValue(fullName);
    if (this.studentForm.controls['fullName'].value.trim() !== '') {
      this.studentForm.controls['fullName'].disable();
    } else {
      this.studentForm.controls['fullName'].enable();
    }
  }

}
