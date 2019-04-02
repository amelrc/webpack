
// import _ from 'lodash';
const hello = require('./js/hello');
const hi = require('./js/hi');
const sass = require('../src/main.scss');


function component( ) {
    let element = document.createElement('div');

    // element.innerHTML = _.join( [ 'Hello', 'webpack' ], ' ');
    element.innerHTML = 'Hello webpack';
    element.classList.add('hello');

    return element;
  }

document.body.appendChild(component( ) );
