import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { WalletProvider } from './context/WalletContext';

ReactDOM.render(
  <WalletProvider>
    <App />
  </WalletProvider>,
  document.getElementById('root')
);

