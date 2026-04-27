import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export interface Payment {
  id: string;
  reference?: string;
  amount: number;
  currency: string;
  createdAt?: string;
  clientRequestId?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
    private apiUrl = 'https://localhost:7282/api/Payments'; // backend URL

  constructor(private http: HttpClient) {}

  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.apiUrl);
  }

  getPaymentById(id: string): Observable<Payment> {
    return this.http.get<Payment>(`${this.apiUrl}/${id}`);
  }

  addPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.apiUrl, payment);
  }

  updatePayment(id: string, payment: Payment): Observable<Payment> {
    debugger;
    return this.http.put<Payment>(`${this.apiUrl}/${id}`, payment);
  }

  deletePayment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
