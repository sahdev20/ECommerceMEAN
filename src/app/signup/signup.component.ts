import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm:FormGroup

  users: Array<any> = []

  constructor(private router:Router,private sessionService:SessionService, private toastr:ToastrService) { 

    this.myForm = new FormGroup({
      id : new FormControl(0),
      first_name : new FormControl(""),
      last_name : new FormControl(""),
      email : new FormControl(""),
      password : new FormControl(""),
      gender : new FormControl("")
    })
  }

  ngOnInit(): void {
  }

  signup(){
    console.log("from signup");
    console.log(this.myForm.value);
    this.sessionService.saveUser(this.myForm.value).subscribe(resp=>{
      this.toastr.success("SignUp Done","",{timeOut:3000})
      this.router.navigateByUrl("/login")
    })
    
  }
}
