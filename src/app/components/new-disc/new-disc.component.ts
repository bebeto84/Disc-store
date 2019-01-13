import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {uuidv1} from 'uuid/v1';

@Component({
  selector: 'app-new-disc',
  templateUrl: './new-disc.component.html',
  styleUrls: ['./new-disc.component.scss']
})
export class NewDiscComponent implements OnInit {

  discForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.discForm = this.formBuilder.group({
      id: [uuidv1()],
      artist: ['', Validators.required],
      name: ['', Validators.required],
      year: ['', [ Validators.min(1900), Validators.max(2019)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.discForm.controls; }


}
