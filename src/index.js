
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => {
    return (
        <div className='header'>
            <h1>Keep</h1>
        </div>
    );
}

const Main = () => {
    return(
        <div className='container'>
            <div className='item'>
                <h1>Heading</h1>
                <p>Sample text goes on and on and on.</p>
            </div>
        </div>
    );
}

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            <p>Copyright &copy; {year}</p>
        </div>
    );
}

const App = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}

root.render(<App/>);
