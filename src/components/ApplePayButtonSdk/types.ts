export interface IValidateMerchantEvent {
  validationURL: string;
  completeMerchantValidation: (merchantSession: any) => void;
}
