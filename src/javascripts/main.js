import '../styles/main.scss';
import { clickEvents } from './helpers/bearForm';
import { bearBuilder, bears } from './helpers/river';

const initialize = () => {
  bearBuilder(bears);
  clickEvents();
};

initialize();
