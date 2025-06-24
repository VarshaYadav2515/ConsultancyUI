import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styles: [
  ],
  imports: [HeaderComponent,RouterOutlet]
})
export class UserLayoutComponent{

  constructor() { }


}
