import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService, Payment } from '../services/payment.service';
import { v4 as uuidv4 } from 'uuid';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-payment-form',
  imports: [FormsModule],
  templateUrl: './payment-form.html',
  styleUrl: './payment-form.css',
})
export class  PaymentForm implements OnInit {
  payment: Payment = { id: '', amount: 0, currency: 'USD', clientRequestId: uuidv4() };
  id?: string;

  constructor(private service: PaymentService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = idParam;
      this.payment.id = this.id;
      this.service.getPaymentById(this.id).subscribe(payment => {
        this.payment = payment;
      });
    }
  }

  save() {
    debugger;
    if (this.id) {
      this.service.updatePayment(this.id, this.payment).subscribe(() => this.router.navigate(['/']));
    } else {
      this.service.addPayment(this.payment).subscribe(() => this.router.navigate(['/']));
    }
  }
}
