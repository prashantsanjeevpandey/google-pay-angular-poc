import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'POCs';

  payRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'mpgs',
            gatewayMerchantId: 'TESTMCDONATION02',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  };

  onLoadPaymentData = (event: any): void => {
    const tokenData = JSON.parse(
      event.detail.paymentMethodData.tokenizationData.token
    );
    const signedMessage = JSON.parse(tokenData.signedMessage);
    tokenData.signedMessage = signedMessage;
    console.log('load payment data', tokenData);
    console.log(JSON.stringify(tokenData));
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
