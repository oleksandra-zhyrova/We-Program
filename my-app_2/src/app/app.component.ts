import { Component, OnInit } from '@angular/core';
// import { Component, EventEmitter, OnInit, Output } from '@angular/core'

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Validators } from '@angular/forms';
import { MyValidator } from './my.validator';

import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 

export class AppComponent implements OnInit{
  title = 'my-app_2';

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(null)
  })


 ngOnInit() {
  this.form = new FormGroup({
    email: new FormControl('',[Validators.email, Validators.required, MyValidator.restrictedEmails]),
    password: new FormControl(null,[Validators.required, Validators.minLength(6)]),
    address: new FormGroup({
 country: new FormControl('ua'),
 city: new FormControl('Запорожье', Validators.required)
}),
    skills: new FormArray([])
 })
  }

 
 submit() {
  const formControl = {...this.form.value}
  console.log(formControl)
  this.form.reset()
 }


setCapital() {

type tmapCity = {
    [key: string]: string
}

 const mapCity : tmapCity = {
 ua: "Киев",
 pl: "Варшава",
 de: "Берлин"
 }

  const getCity = this.form.get('address').value.country

  this.form.get('address').patchValue({city: mapCity[getCity]});

 }

addSkill() {
const control = new FormControl('', Validators.required);
 (<FormArray>this.form.get('skills')).push(control);
};


getControls() {
  return (this.form.get('skills') as FormArray).controls;
}

} 

   

