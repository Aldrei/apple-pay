import './App.css';
import { IApp } from './types';

function App({ message }: IApp) {
  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <a
          className="App-link"
          href="https://applepaydemo.apple.com/payment-request-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple Pay Demo
        </a>
        <a
          className="App-link"
          href="https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForms/simulation"
          target="_blank"
          rel="noopener noreferrer"
        >
          VTEX API
        </a>
      </header>
    </div>
  );
}

export default App;
