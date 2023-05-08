import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/data.service';
import { HttpClient } from '@angular/common/http';
import { error } from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  submitted = false;
  data: any;
  signupForm: any;
  todo: any;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private dataservice: DataService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z][A-Za-z0-9_]{2,20}$'),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      number: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      interests: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[A-Za-z][A-Za-z0-9_]{2,20}$'),
        ])
      ),
      company: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z][A-Za-z0-9_]{2,20}$'),
      ]),
      designation: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z][A-Za-z0-9_]{2,20}$'),
      ]),
      experience: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{2}$'),
        Validators.maxLength(2),
      ]),
    });
  }
  // Method Define

  get name() {
    return this.signupForm.get('name');
  }
  get designation() {
    return this.signupForm.get('designation');
  }
  get experience() {
    return this.signupForm.get('experience');
  }

  get interests() {
    return this.signupForm.get('interests');
  }

  get email() {
    return this.signupForm.get('email');
  }
  get number() {
    return this.signupForm.get('number');
  }

  get company() {
    return this.signupForm.get('company');
  }

  IntoLogin() {
    console.log('this.form.value', this.signupForm.value);
    console.log('this.signupForm.valid', this.signupForm.valid);

    if (this.signupForm.valid == true) {
      console.log('Data True');
    } else {
      console.log('elseee');
    }

    if (this.signupForm.valid == true) {
      var data = localStorage.setItem(
        'dataa',
        JSON.stringify(this.signupForm.value)
      );
    } else {
      console.log('err');
    }

    if (this.signupForm.valid) {
      let payload = {
        "full_name": this.signupForm.value.name,
       "designation": this.signupForm.value.designation,
        "work_experience": this.signupForm.value.experience,
        "interests": this.signupForm.value.interests,
        "email": this.signupForm.value.email,
        "mobile_no": this.signupForm.value.number,
        "user_company": this.signupForm.value.company,
      };

      this.dataservice.saveUser(payload).subscribe((response: any) => {
        console.log('response', response.status);
        if (response.status == true) {
          this.toastr.success('Account Created Succesfully');
          this.router.navigate(['/auth/login']);
        } else {
          this.toastr.error('Account Not Created PLease Check again');
        }
      });
    } else {
      this.dataservice.markFormGroupTouched(this.signupForm);
    }
  }
}
