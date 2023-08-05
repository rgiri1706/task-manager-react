import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './Components/LoginPage';


const App = () => {
    return (
        <div className='w-[100vw] h-[100vh] bg-slate-100 flex justify-center items-center'>
            <LoginPage />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);