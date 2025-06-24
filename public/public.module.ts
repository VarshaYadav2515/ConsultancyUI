import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PublicRoutingModule } from "./public.routing.module";
import { HomeComponent } from "../src/app/public/home/home.component";
import { LoginComponent } from "../src/app/public/login/login.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PublicRoutingModule,
      //  SharedModule
    ],
    declarations: [
    //HomeComponent,
    // LayoutComponent,
    // HeaderComponent,
    // FooterComponent,
    // CourselistComponent,
    // CoursesComponent,
    // FullsizeLayoutComponent,
    //LoginComponent,
    // SignupComponent,
    // NotfoundComponent,
    // UnauthorizeComponent,
    // CourseComponent,
    // CartComponent,
    // PaymentComponent,
    // ReceiptComponent
    ],
    providers: [
    ],
})
export class PublicModule { }
