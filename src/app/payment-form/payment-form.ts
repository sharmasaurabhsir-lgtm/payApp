import { Component } from '@angular/core';
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
export class  PaymentForm {
  payment: Payment = { id: 0, amount: 0, currency: 'USD', clientRequestId: uuidv4() };
  id?: number;

  constructor(private service: PaymentService, private route: ActivatedRoute, private router: Router) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  save() {
    if (this.id) {
      this.service.updatePayment(this.id, this.payment).subscribe(() => this.router.navigate(['/']));
    } else {
      this.service.addPayment(this.payment).subscribe(() => this.router.navigate(['/']));
    }
  }
}
