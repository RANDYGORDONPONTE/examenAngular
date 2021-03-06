import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent} from './layout/layout.component';
import { NotFoundComponent} from './core/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m=>m.HomeModule)
      },
      {
        path: 'course',
        loadChildren: () => import('./modules/course/course.module').then(m=>m.CourseModule)
      },
      {
        path: 'course',
        loadChildren: () => import('./modules/course/course.module').then(m=>m.CourseModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./modules/contacto/contacto.module').then(m=>m.ContactoModule)
      },
      {
        path: 'administrador',
        loadChildren: () => import('./modules/administrador/administrador.module').then(m=>m.AdministradorModule)
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
