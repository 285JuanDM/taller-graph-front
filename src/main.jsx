import { ApolloProvider } from '@apollo/client/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { client } from './ApolloClient.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client} >
      <App />
    </ApolloProvider>
  </StrictMode>,
)
