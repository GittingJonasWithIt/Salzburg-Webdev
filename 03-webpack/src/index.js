import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import printMe from './print.js';


function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'World'],' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    element.appendChild(myIcon);

    return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if(module.hot){
    module.hot.accept('./print.js',function () {
        console.log('Accepting the updated print module');
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    });
}
