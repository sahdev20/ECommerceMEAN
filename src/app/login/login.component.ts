import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup

  constructor(private router:Router, private sessionService:SessionService , private toastr:ToastrService) { 
    
    this.loginForm = new FormGroup({
      email : new FormControl(""),
      password : new FormControl("")
    })
  }

  ngOnInit(): void {
  }

  login(){
    console.log("from login");
    console.log(this.loginForm.value);
    this.sessionService.authenticate(this.loginForm.get("email").value,this.loginForm.get("password").value).subscribe(resp=>{
      this.toastr.success("Logged In","",{timeOut:3000})
      this.router.navigateByUrl("/homepage")
    },err=>{
      this.toastr.error("Invalid Credentials","",{timeOut:3000})
    })
  }

}
