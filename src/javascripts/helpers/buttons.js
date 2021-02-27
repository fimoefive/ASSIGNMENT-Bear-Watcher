import { printToDom } from './river';

const triedBut = (bearArray) => {
  let domString = '';
  bearArray.forEach((item, i) => {
    domString += `
    <div class="card mb-3" style="width: 18rem;" id=${i}>      
        <div id="bear-card" class="card-body">
          <h4 ${item.name}>Name: ${item.name}</h4>
          <p class="card-text">House: ${item.description}</p>
          <button type="button" class="btn btn-danger" id="${i}">Tried</button> 
        </div>
      </div>`;
  });
  printToDom('#bears', domString);
};

const caughtBut = (caught) => {
  let caughtDom = '';
  caught.forEach((item, i) => {
    caughtDom += `
    <div id="caught-card" class="card mb-3" style="width: 18rem;" id=${i}>
        <div class="card-body">
        <h5>Catch!!</h5>
        <h5 class="card-text">${item.name}</h5>
          <div class="h5 card-text text-dark"></div>
        </div>
      </div>`;
  });
  printToDom('#catches', caughtDom);
};

export { triedBut, caughtBut };
