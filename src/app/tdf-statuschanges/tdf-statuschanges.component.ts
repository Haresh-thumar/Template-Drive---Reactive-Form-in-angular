import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-statuschanges',
  templateUrl: './tdf-statuschanges.component.html',
  styleUrls: ['./tdf-statuschanges.component.scss']
})
export class TdfStatuschangesComponent {

  @ViewChild('templateForm') templateForm!: NgForm;

  contact!: contact;



  ngOnInit() {
    setTimeout(() => {
      this.templateForm.control.get("firstname")?.statusChanges.subscribe((selectedValue: any) => {
        console.log('firstname status changed');
        console.log(selectedValue);
      })

      this.templateForm.control.get("address")?.statusChanges.subscribe((selectedValue: any) => {
        console.log('address status changed');
        console.log(selectedValue);
      })

      this.templateForm.statusChanges?.subscribe((selectedValue: any) => {
        console.log('form status changed');
        console.log(selectedValue);
      })
    });
  }

  onSubmiteed() {
    console.log(this.templateForm);
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