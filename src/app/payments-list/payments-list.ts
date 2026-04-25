import { Component,OnInit } from '@angular/core';
import { PaymentService, Payment } from '../services/payment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payments-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './payments-list.html',
  styleUrl: './payments-list.css',
})
export class PaymentsList implements OnInit {
  payments: Payment[] = [];

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.loadPayments();
  }

  loadPayments() {
    this.paymentService.getPayments().subscribe(data => this.payments = data);
  }

  deletePayment(id: number) {
    this.paymentService.deletePayment(id).subscribe(() => this.loadPayments());
  }
}
