import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('../app/main/main.module').then(m => m.MainModule) },  
  { path: 'authentication', loadChildren: () => import('../app/authentication/authentication.module').then(m => m.AuthenticationModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
