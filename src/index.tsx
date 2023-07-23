import React from 'react'
import { createRoot } from 'react-dom/client'
// Children
import App from './App'
import { WithAppProviders } from '@/utils'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
    <WithAppProviders>
        <App />
    </WithAppProviders>
)
