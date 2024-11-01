export interface IValidateMerchantEvent {
  validationURL: string;
  completeMerchantValidation: (merchantSession: any) => void;
}

interface ApplePayPaymentRequest {
  countryCode: string;
  currencyCode: string;
  merchantCapabilities: string[];
  supportedNetworks: string[];
  total: {
    label: string;
    amount: string;
  };
}

interface ApplePaySession {
  new (
    version: number,
    paymentRequest: ApplePayPaymentRequest
  ): ApplePaySession;
  onvalidatemerchant: (event: any) => void;
  onpaymentauthorized: (event: any) => void;
  oncancel: () => void;
  begin: () => void;
  completeMerchantValidation: (merchantSession: any) => void;
  completePayment: (status: number) => void;
}

declare var ApplePaySession: {
  STATUS_SUCCESS: number;
  STATUS_FAILURE: number;
  new (
    version: number,
    paymentRequest: ApplePayPaymentRequest
  ): ApplePaySession;
};
