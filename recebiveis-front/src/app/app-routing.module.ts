import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './helpers/auth/auth.guard';
import { PayablesComponent } from './pages/payables/payables.component';
import { PayablesDetailsComponent } from './pages/payables-details/payables-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: LoginComponent,data: { title: 'Login' }, },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard],
    data: { title: 'Cadastro' },
    children: [
      { path: '', redirectTo: 'payable', pathMatch: 'full' },
      { path: 'payable', component: RegisterComponent },
      { path: 'assignor', component: RegisterComponent },
      { path: 'edit-payable/:id',component: RegisterComponent}
    ],
  },
  {
    path: 'payables',
    component: PayablesComponent,
    data: { title: 'Lista de Recebíveis' },
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: PayablesComponent },
    ]
  },
  {
    path: 'payable-details/:id',
    data: { title: 'Detalhes' },
    component: PayablesDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
