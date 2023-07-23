import React from 'react'
import { Routes as BrowserRoutes, Route } from 'react-router-dom'
import { Counter } from '@/components'

const Routes: React.FC = () => {
    return (
        <BrowserRoutes>
            <Route path={'/'} element={'hello, please visit /counter'} />
            <Route path={'/counter'} element={<Counter />} />
        </BrowserRoutes>
    )
}

export { Routes }
