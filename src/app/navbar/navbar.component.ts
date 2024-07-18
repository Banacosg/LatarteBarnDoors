import { Component, HostListener } from '@angular/core';
import { AppComponent } from '../app.component';
import { NgClass } from '@angular/common';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import { GallaryComponent } from '../gallary/gallary.component';
import { LoginComponent } from '../login/login.component';
import { ProductsComponent } from '../products/products.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { SignupComponent } from '../signup/signup.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    AboutComponent,
    HomeComponent,
    CalculatorComponent,
    GallaryComponent,
    LoginComponent,
    ProductsComponent,
    ReviewsComponent,
    SignupComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  appComponent: AppComponent;
  title: string;
  menuVisible: boolean = false;
  mobile: boolean = false;
  constructor() {
    this.appComponent = new AppComponent();
    this.title = this.appComponent?.getTitle();
  }

  public screenWidth: any;
  public screenHeight: any;

  ngOnInit() {
    this.updateScreen();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateScreen();
  }

  updateScreen() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 850) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    }
  }
  flipMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
