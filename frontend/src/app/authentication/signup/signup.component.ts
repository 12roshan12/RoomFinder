
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {

    registerForm: any = new FormGroup({})

    constructor(private authService : AuthService,private fb:FormBuilder)
    {
        
    }

    ngOnInit(): void {
        this.buildForm()
    }

    buildForm(){
        this.registerForm = this.fb.group({
            name:[''],
            email:[''],
            phone:[]
        })
    }

    save(){
        this.authService.signUp(this.registerForm.value).subscribe((e:any)=>{
            console.log(e);
            
        })
    }

}