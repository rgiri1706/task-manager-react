import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from './test';

const App = () => <Test />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);