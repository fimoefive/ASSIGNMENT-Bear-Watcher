import '../styles/main.scss';
import bearBuilder from './helpers/river';
import { clickEvents, bears } from './helpers/bearForm';

const initialize = () => {
  bearBuilder(bears);
  clickEvents();
};

initialize();
