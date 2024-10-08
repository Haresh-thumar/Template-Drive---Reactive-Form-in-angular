import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf-valuechanges',
  templateUrl: './rf-valuechanges.component.html',
  styleUrls: ['./rf-valuechanges.component.scss']
})
export class RfValuechangesComponent {

  title = 'Reactive Forms';

  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl()
    })
  })

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  ngOnInit() {

    this.reactiveForm.get("firstname")?.valueChanges.subscribe((selectedValue: any) => {
      console.log('firstname value changed');
      console.log(selectedValue);

    })

    this.reactiveForm.get("address")?.valueChanges.subscribe((selectedValue: any) => {
      console.log('address changed');
      console.log(selectedValue);
    })

    this.reactiveForm.valueChanges.subscribe((selectedValue: any) => {
      console.log('form value changed');
      console.log(selectedValue);
    })
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
    this.reactiveForm.setValue(contact);
  }

  setAddress() {
    this.reactiveForm.get("address")?.setValue(
      {
        city: "Bangalore",
        street: "Brigade Road",
        pincode: "600070"
      }
    );
  }

  setFirstname() {
    this.reactiveForm.get("firstname")?.setValue("Saurav")
  }

  withoutOnlySelf() {
    this.reactiveForm.get("firstname")?.setValue("");
  }
  withOnlySelf() {
    this.reactiveForm.get("firstname")?.setValue("", { onlySelf: true });
  }

  withEmitEvent() {
    this.reactiveForm.get("firstname")?.setValue("Sachin");
  }
  withoutEmitEvent() {
    this.reactiveForm.get("firstname")?.setValue("", { emitEvent: false });
  }

  reset() {
    this.reactiveForm.reset();
  }

}
