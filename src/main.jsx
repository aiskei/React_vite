import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/banner.jsx'
import Home from './components/home.jsx'
import UserList from './components/UserList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <Home />
        <UserList />
    </React.StrictMode>
)
