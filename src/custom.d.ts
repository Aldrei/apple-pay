interface ApplePaySession {
  new (version: number, request: ApplePayPaymentRequest): ApplePaySession;
  onvalidatemerchant: (event: ApplePayValidateMerchantEvent) => void;
  begin: () => void;
  // Adicione outros métodos e propriedades conforme necessário
}

interface Window {
  ApplePaySession: typeof ApplePaySession;
}

declare namespace JSX {
  interface IntrinsicElements {
    'apple-pay-button': {
      buttonstyle?: string;
      type?: string;
      locale?: string;
      onClick?: () => any;
      ref?: any;
    };
  }
}
