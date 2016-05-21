import Imoto from 'imoto';
import ImotoRouter from '../src/index.js';
import Index from './pages/index.js';
import Cart from './pages/cart.js';

Imoto.use(ImotoRouter);
let router = new ImotoRouter({
  hashbang: false,
  history: true
});

router.map({
  '/index': Index,
  '/cart/:cartId': Cart
});

router.redirect({
  '/': '/index'
});

class App extends Imoto {
  get template() {
    return `
      <a href=""></a>
      <a></a>
      <router-view></router-view>
    `;
  }
}

router.start(App);
