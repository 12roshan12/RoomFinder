import { NgModule } from "@angular/core";
import { AuthenticationRoutingModule } from "./authentication.routing";
import { SignupComponent } from "./signup/signup.component";


@NgModule({
    imports: [
        AuthenticationRoutingModule
    ],
    declarations: [
        SignupComponent
    ],
    providers: []
})

export class AuthenticationModule { }