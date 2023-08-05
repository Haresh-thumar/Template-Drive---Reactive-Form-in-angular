import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-valuechanges',
  templateUrl: './tdf-valuechanges.component.html',
  styleUrls: ['./tdf-valuechanges.component.scss']
})
export class TdfValuechangesComponent {

  @ViewChild('templateForm') templateForm!: NgForm;

  contact!: contact;

  onSubmit() {
    console.log(this.templateForm.value);
  }

  ngOnInit() {
    setTimeout(() => {
      this.templateForm.control.get("firstname")?.valueChanges.subscribe((selectedValue: any) => {
        console.log('firstname value changed');
        console.log(selectedValue);
      })

      this.templateForm.control.get("address")?.valueChanges.subscribe((selectedValue: any) => {
        console.log('address changed');
        console.log(selectedValue);
      })

      this.templateForm.valueChanges?.subscribe((selectedValue: any) => {
        console.log('form value changed');
        console.log(selectedValue);
      })
    });
  }


  setValue() {
    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
      address: {
        city: "Bangalore",
        street: "Brigade Road",
        pincode: "600070"
      }
    };
    this.templateForm.setValue(contact);
  }

  setAddress() {
    let address = {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600070"
    };
    this.templateForm.control.get("address")?.setValue(address);
  };

  setFirstname() {
    this.templateForm.control.get("firstname")?.setValue("Saurav")
  }

  withouEmitEvent() {
    this.templateForm.control.get("firstname")?.setValue("Sachin");
  }
  withEmitEvent() {
    this.templateForm.control.get("firstname")?.setValue("", { emitEvent: false });
  }

  reset() {
    this.templateForm.resetForm();
  }

}



export class contact {
  firstname!: string;
  lastname!: string;
  gender!: string;
  email!: string;
  isMarried!: boolean;
  country!: string;
  address!: {
    city: string;
    street: string;
    pincode: string;
  }
} 