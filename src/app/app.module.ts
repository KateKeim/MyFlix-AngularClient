import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
<<<<<<< HEAD
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule} from '@angular/material/list';
=======
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
>>>>>>> e15b853 (Fixed connection API)
import { FormsModule } from '@angular/forms';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
<<<<<<< HEAD
import { MatIconModule } from '@angular/material/icon';
import { ProfileViewComponent } from './user-profile-page/user-profile-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
=======
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  // { path: 'profile', component: UserProfileComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];
>>>>>>> e15b853 (Fixed connection API)

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
<<<<<<< HEAD
    ProfileViewComponent,
    NavBarComponent,
    MovieDetailComponent
=======
    NavbarComponent
>>>>>>> e15b853 (Fixed connection API)
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    FormsModule, 
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
<<<<<<< HEAD
    MatTooltipModule,
    MatListModule
=======
    FormsModule
>>>>>>> e15b853 (Fixed connection API)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
