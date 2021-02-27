import '../styles/main.scss';
import { clickEvents } from './helpers/bearForm';
import { bearBuilder } from './helpers/river.js';





const initialize = () => {
  bearBuilder(bears);
  clickEvents();
};

initialize();
