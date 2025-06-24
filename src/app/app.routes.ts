import { Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './public/home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { userAuthGuard } from './guards/user-auth.guard';

export const routes: Routes = [

  //  {
  //   path: 'admin', canActivate: [adminAuthGuard]
  //   , loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  // },
  {
    path: 'user', canActivate: [userAuthGuard]
    , loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: '', loadChildren: () => import('../../public/public.module').then(m => m.PublicModule) },
  {path:'',component:HomeComponent,pathMatch : 'full'},
  {path:'home',component:HomeComponent},
  {path:'registration/login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent}
];
