import { IMerchantValidationServiceService } from './types';

const accountName = 'apiexamples';
const environment = 'vtexcommercestable';

const endpoint = `https://${accountName}.${environment}.com.br/api/applePay/merchantValidation`;

export const merchantValidationService = async (
  data: IMerchantValidationServiceService
) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return { error };
  }
};
