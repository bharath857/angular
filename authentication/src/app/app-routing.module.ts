import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authenticate/guard/auth.guard';
import { LoginComponent } from './authenticate/login/login.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecoundPageComponent } from './secound-page/secound-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'firstPage', component: FirstPageComponent, canActivate: [AuthGuard],},
  { path: 'secoundPage', component: SecoundPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
