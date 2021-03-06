import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Example Pages'
    },
    children: [
    //   {
    //     path: '404',
    //     component: P404Component,
    //     data: {
    //       title: 'Page 404'
    //     }
    //   },
    //   {
    //     path: '500',
    //     component: P500Component,
    //     data: {
    //       title: 'Page 500'
    //     }
    //   },
    //   {
    //     path: 'login',
    //     component: LoginComponent,
    //     data: {
    //       title: 'Login Page'
    //     }
    //   },
    //   {
    //     path: 'register',
    //     component: RegisterComponent,
    //     data: {
    //       title: 'Register Page'
    //     }
    //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalPagesRoutingModule {}
