import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from 'shared/src/components/ErrorBoundary';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {/* <ErrorBoundary> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ErrorBoundary> */}
  </StrictMode>
);
