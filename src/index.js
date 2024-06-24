import React from 'react';
import ReactDOM from 'react-dom/client';

import Main from "./Main";
import Footer from './Footer';
import Header from './Header';

import './index.css';
import notes from './notes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    return (
        <div>
            <Header/>
            <Main notes={notes} />
            <Footer/>
        </div>
    );
}

root.render(<App/>);
