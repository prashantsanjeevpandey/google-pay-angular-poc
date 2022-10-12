import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'POCs';

  onLoadPaymentData = (event: any): void => {
    console.log('load payment data', event.detail);
  };

  onClick = (event: any): void => {
    console.log('click', event);
  };

  onCancel = (event: any): void => {
    console.log('click', event);
  };

  onPaymentDataAuthorized = (paymentData) => {
    console.log('payment authorized', paymentData);

    return {
      transactionState: 'SUCCESS',
    };
  };

  onClickPreventDefault = (event: Event): void => {
    console.log('prevent default');
    event.preventDefault();
  };
}
