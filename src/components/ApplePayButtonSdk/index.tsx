import { useEffect, useRef } from 'react';

import { checkoutSimulationService } from '../../services/vtex/checkout/simulation';

const ApplePayButtonSdk = () => {
  const applePayButtonRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const button = applePayButtonRef.current;

    const handleClick = () => handleApplePay();
    if (button) button.addEventListener('click', handleClick);

    return () => {
      if (button) button.removeEventListener('click', handleClick);
    };
  }, []);

  const handleApplePay = async () => {
    console.log('Target handleApplePay...');

    // Only testing the call...
    // TODO: Fix CORS errors
    const resp = await checkoutSimulationService({});
    console.log(resp);

    if (window.ApplePaySession) {
      const session = new window.ApplePaySession(1, {
        supportedMethods: 'https://apple.com/apple-pay',
        data: {
          version: 3,
          merchantIdentifier: 'merchant.com.apdemo',
          merchantCapabilities: ['supports3DS'],
          supportedNetworks: ['amex', 'discover', 'masterCard', 'visa'],
          countryCode: 'US',
        },
      });

      session.onvalidatemerchant = () => {
        // Validação do comerciante
        // Aqui você deve fazer uma requisição ao seu servidor para validar o comerciante
      };

      console.log(session);

      session.begin();
    } else {
      console.error('Apple Pay is not available on this device/browser');
    }
  };

  return (
    <apple-pay-button
      buttonstyle="black"
      type="plain"
      locale="en-US"
      ref={applePayButtonRef}
    ></apple-pay-button>
  );
};

export default ApplePayButtonSdk;
