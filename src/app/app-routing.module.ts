import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NF404Component } from './components/nf404/nf404.component';
import { FrontComponent } from './templates/front/front.component';
import { AdminComponent } from './templates/admin/admin.component';

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  {
    path: 'rh',
    loadComponent: () => import('./optimizationPattern/rh/rh.component').then(m => m.RhComponent),
  },
  {
    path: 'ttc',
    loadComponent: () => import('./ttccalculator/ttccalculator.component').then(m => m.TTCCalculatorComponent),
  },
  {
    path: 'cv',
    children: [
      { path: '', loadComponent: () => import('./cv/cv/cv.component').then(m => m.CvComponent) },
      { path: 'add', loadComponent: () => import('./cv/add-cv/add-cv.component').then(m => m.AddCvComponent) },
      { path: ':id', loadComponent: () => import('./cv/details-cv/details-cv.component').then(m => m.DetailsCvComponent) },
    ],
  },
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'todo', loadComponent: () => import('./todo/todo/todo.component').then(m => m.TodoComponent) },
      { path: 'word', loadComponent: () => import('./directives/mini-word/mini-word.component').then(m => m.MiniWordComponent) },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'color', loadComponent: () => import('./components/color/color.component').then(m => m.ColorComponent) },
    ],
  },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
