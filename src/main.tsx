import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline';
import { CardProvider } from './Common/Context/Card.context';
import { StepsProvider } from './Common/Context/Steps.context';
import { KeyboardProvider } from './Common/Context/Keyboard.context';
import { PersonagensAPIProvider } from './Common/Context/PersonagensAPI';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StepsProvider>
      <KeyboardProvider>
        <PersonagensAPIProvider>

          <CardProvider>
            <CssBaseline />
            <App />
          </CardProvider>
        </PersonagensAPIProvider>
      </KeyboardProvider>
    </StepsProvider>
  </React.StrictMode>,
)
