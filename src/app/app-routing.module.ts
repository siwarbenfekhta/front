import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './Private/admin/dashboard/clients/clients.component';
import { DashboardComponent } from './Private/admin/dashboard/dashboard/dashboard.component';
import { DocumentsComponent } from './Private/admin/dashboard/documents/documents.component';
import { InvoicesComponent } from './Private/admin/dashboard/invoices/invoices.component';
import { QuotationsComponent } from './Private/admin/dashboard/quotations/quotations.component';
import { ResellersComponent } from './Private/admin/dashboard/resellers/resellers.component';
import { SubscriptionsComponent } from './Private/admin/dashboard/subscriptions/subscriptions.component';
import { ChangePasswordComponent } from './Public/auth/change-password/change-password.component';
import { ResetPasswordComponent } from './Public/auth/reset-password/reset-password.component';
import { SigninComponent } from './Public/auth/signin/signin.component';
import { SignupComponent } from './Public/auth/signup/signup.component';
import { PageNotFoundComponent } from './Public/page-not-found/page-not-found.component';

const routes: Routes = [

  { path: 'Signup', component: SignupComponent },
  { path: 'Signin', component: SigninComponent },
  { path: 'ResetPassword', component: ResetPasswordComponent },
  { path: 'ChangePassword', component: ChangePasswordComponent },

  { path: 'AdminDashboard', component: DashboardComponent },
  { path: 'Subscriptions', component: SubscriptionsComponent },
  { path: 'Clients', component: ClientsComponent },
  { path: 'Quotations', component: QuotationsComponent },
  { path: 'Invoices', component: InvoicesComponent },
  { path: 'Resellers', component: ResellersComponent },
  { path: 'Documents', component: DocumentsComponent },


  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
