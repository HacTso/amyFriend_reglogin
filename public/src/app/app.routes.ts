import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';
import { LoginComponent } from './login/login.component';

const app_routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'new', component: NewComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'show/:id', component: ShowComponent },
    { path: '**', redirectTo: '' },

];

export const routing = RouterModule.forRoot(app_routes);