import createMenu from './menu';
import '../sass/styles.scss';

var menu = createMenu(['Главная','Обо мне','Портфолио'], 'menu');
document.body.appendChild(menu);