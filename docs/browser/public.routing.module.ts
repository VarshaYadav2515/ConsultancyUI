import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from "../src/app/registration/registration.component";
import { LoginComponent } from "../src/app/public/login/login.component";
import { HomeComponent } from "../src/app/public/home/home.component";


const routes: Routes = [
  // {
  //   path: '', component: FullsizeLayoutComponent, children: [
  //     { path: '', component: HomeComponent },
  //     { path: 'courses/:name', component: CourseComponent }
  //   ]
  // },
  {
    path: '', component: HomeComponent, children: [
      // { path: 'payment', component: PaymentComponent },
      // { path: 'receipt', component: ReceiptComponent },
      // { path: 'courses', component: CoursesComponent },
      // { path: 'cart', component: CartComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: RegistrationComponent },
      // { path: 'notfound', component: NotfoundComponent },
      // { path: 'unauthorize', component: UnauthorizeComponent },
      // { path: '**', redirectTo: '/notfound' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
