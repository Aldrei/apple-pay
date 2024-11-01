import { useEffect, useRef } from 'react';
import { merchantValidationService } from '../../services/vtex/applePay/merchantValidation';
import { IValidateMerchantEvent } from './types';

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
    // const resp = await checkoutSimulationService({});
    // console.log(resp);

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

      session.onvalidatemerchant = async (event: IValidateMerchantEvent) => {
        try {
          // Validate the merchant in own API
          const response = await merchantValidationService({
            validationURL: event.validationURL,
          });
          console.log('merchantValidationService response:', response);

          // Complete the Merchant validation in Apple server
          event.completeMerchantValidation(response);
        } catch (error) {
          console.error(error);
        }
      };

      console.log('ApplePaySession:', session);

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
