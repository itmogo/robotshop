
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';


const router = () => {

    const main = document.getElementById('main-container');
    main.innerHTML = HomeScreen.render();
};

window.addEventListener('load', router);
