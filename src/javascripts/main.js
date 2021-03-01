import '../styles/main.scss';
import { bearBuilder, bears } from './helpers/river';
import clickEvents from './helpers/bearForm';

const initialize = () => {
  bearBuilder(bears);
  clickEvents();
};

initialize();
