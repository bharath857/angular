import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authenticate/guard/auth.guard';
import { LoginComponent } from './authenticate/login/login.component';
import { FirstPageFirstChildComponent } from './first-page/first-page-first-child/first-page-first-child.component';
import { FirstPageSecoundChildComponent } from './first-page/first-page-secound-child/first-page-secound-child.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecoundPageFirstChildComponent } from './secound-page/secound-page-first-child/secound-page-first-child.component';
import { SecoundPageSecoundChildComponent } from './secound-page/secound-page-secound-child/secound-page-secound-child.component';
import { SecoundPageComponent } from './secound-page/secound-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'firstPage',
    component: FirstPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'FirstPageFirstChild', component: FirstPageFirstChildComponent },
      { path: 'FirstPageSecoundChild', component: FirstPageSecoundChildComponent },
    ]
  },
  {
    path: 'secoundPage',
    component: SecoundPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'secoundPageFirstChild', component: SecoundPageFirstChildComponent },
      { path: 'secoundPageSecoundChild', component: SecoundPageSecoundChildComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
