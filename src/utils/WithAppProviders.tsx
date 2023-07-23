import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { store } from '@/redux/app/store'

interface IWithAppProvidersProps {
    children: ReactNode
}

const WithAppProviders: React.FC<IWithAppProvidersProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <HashRouter>{children}</HashRouter>
        </Provider>
    )
}

export { WithAppProviders }
