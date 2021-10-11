import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Auth />, rootElement);

// 0 нужно сделать верстку если ее нет
// 1 разбеваем проект на компоненты
// 2 статическая весия - отрисовываем
// 3 разобраться что будет в стейте а потом где он будет "жить"
// 4 пишем логику