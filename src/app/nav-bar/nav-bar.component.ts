import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toMovies(): void {
    this.router.navigate(['movies']);
  }

  toProfile(): void {
    this.router.navigate(['profile']);
  }

  // This method will log the user out by removing the user's token and user info from local storage
  logOut(): void {
    localStorage.clear();
=======
import { UserRegistrationService } from '../fetch-api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavbarComponent {
  constructor(
    public fetchApiData: UserRegistrationService,
    public router: Router
  ) { }

  logoutUser(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
>>>>>>> e15b853 (Fixed connection API)
    this.router.navigate(['welcome']);
  }
}
