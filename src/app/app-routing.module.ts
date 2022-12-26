import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BranchComponent } from './branch/branch.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
    path: '',
   redirectTo: 'home',
   pathMatch: 'full'
  },
  {
    component:HomeComponent,
    path:"home"
  },
  {
    component:AccountComponent,
    path:"account"
  },
  {
    component:CustomerComponent,
    path:"customer"
  },
  {
    component:LoanComponent,
    path:"loan"
  },
  {
    component:BranchComponent,
    path:"branch"
  },
  {
    component:TransactionComponent,
    path:"transaction"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
