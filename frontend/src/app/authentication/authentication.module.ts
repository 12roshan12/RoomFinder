import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./auth.service";
import { AuthenticationRoutingModule } from "./authentication.routing";
import { SignupComponent } from "./signup/signup.component";


@NgModule({
    imports: [
        AuthenticationRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        SignupComponent
    ],
    providers: [
        AuthService
    ]
})

export class AuthenticationModule { }