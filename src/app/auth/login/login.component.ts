import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent implements OnInit {
  loginForm: any;
  submitted = false;

  constructor(
    private toastr: ToastrService,
    private dataservice: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const passwordPattern =
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$';

    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(passwordPattern),
      ]),
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  IntoDashboard() {
    if (this.loginForm.valid) {
      let payloader = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

      this.dataservice.dataView(payloader).subscribe((res: any) => {
        if (res.status == true) {
          this.toastr.success('Login Succesfull');
          console.log('response', res);
          console.log('data', res.data);

          var data = localStorage.setItem('Details', JSON.stringify(res.data));
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.toastr.error('Login Invalid');
          console.log('error');
        }
      });
    } else {
      console.log('elseee');
      this.dataservice.markFormGroupTouched(this.loginForm);
    }
  }
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.toastr.error('please fill the all fields in the form');
    }
  }
}
