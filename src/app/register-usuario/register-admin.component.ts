import { Component } from '@angular/core';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent {

  showPassword: boolean = false;

  constructor() { }

  VerPassW() {
    this.showPassword = !this.showPassword;
  }
}
