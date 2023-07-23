import React from 'react'
import '@/styles/index.scss'
import { Routes } from '@/utils'
import { useNavigate } from 'react-router-dom'

const App: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className={'app'}>
            <Routes />
            <button onClick={() => navigate('/')}>Go home</button>
            <button onClick={() => navigate('/counter')}>Go to counter</button>
        </div>
    )
}

export default App
