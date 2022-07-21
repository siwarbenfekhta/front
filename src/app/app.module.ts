import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Public/auth/signup/signup.component';
import { SigninComponent } from './Public/auth/signin/signin.component';
import { ResetPasswordComponent } from './Public/auth/reset-password/reset-password.component';
import { ChangePasswordComponent } from './Public/auth/change-password/change-password.component';
import { PageNotFoundComponent } from './Public/page-not-found/page-not-found.component';
import { NavbarComponent } from './Private/admin/dashboard/navbar/navbar.component';
import { DashboardComponent } from './Private/admin/dashboard/dashboard/dashboard.component';
import { SubscriptionsComponent } from './Private/admin/dashboard/subscriptions/subscriptions.component';
import { ClientsComponent } from './Private/admin/dashboard/clients/clients.component';
import { QuotationsComponent } from './Private/admin/dashboard/quotations/quotations.component';
import { InvoicesComponent } from './Private/admin/dashboard/invoices/invoices.component';
import { ResellersComponent } from './Private/admin/dashboard/resellers/resellers.component';
import { DocumentsComponent } from './Private/admin/dashboard/documents/documents.component';
import { SidebarComponent } from './Private/admin/dashboard/sidebar/sidebar.component';
import { MobileComponent } from './Private/admin/dashboard/mobile/mobile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'  

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SignupComponent,
    SigninComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    PageNotFoundComponent,
    NavbarComponent,
    DashboardComponent,
    SubscriptionsComponent,
    ClientsComponent,
    QuotationsComponent,
    InvoicesComponent,
    ResellersComponent,
    DocumentsComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatPaginatorModule,
    MatInputModule,  
    MatTableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
