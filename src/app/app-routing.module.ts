import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ProfileViewComponent } from './user-profile-page/user-profile-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
]; 

=======

const routes: Routes = [];
>>>>>>> e15b853 (Fixed connection API)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }