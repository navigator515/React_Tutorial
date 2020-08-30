import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {  createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

const theme = createMuiTheme({
typography: {
fontFamily: '"Noto Sans KR", serif',
},
});

ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>,
    
document.getElementById('root'));

serviceWorker.unregister();
