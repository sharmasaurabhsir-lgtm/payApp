
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsList } from './payments-list/payments-list';
import { PaymentForm } from './payment-form/payment-form';

export const routes: Routes = [
  { path: '', component: PaymentsList },
  { path: 'add', component: PaymentForm },
  { path: 'edit/:id', component: PaymentForm }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}