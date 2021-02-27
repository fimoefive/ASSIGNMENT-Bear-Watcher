import { bearBuilder, bears, printToDom } from '../helpers/river.js';


const getInfo = (event) => {
  event.preventDefault();

  const name = document.querySelector("#bearName").value;
  const stringArray = ["Big", "Small", "Male", "Female", "Old", "Young"];
  const randomText = stringArray[Math.floor(Math.random() * stringArray.length)];
  const description = `${name} ${text}`;
  const tried = Math.floor(Math.random() * 35);
  const caught = Math.floor(Math.random() * 15);

  const bearId = bears.map((bear) => bear.id).sort((a, b) => a - b);
  const id = bearId.length ? bearId[(bearId.length - 1)] + 1 : 1;

  const bearObj = {
    name,
    description,
    tried,
    caught,
    id,
  };

  bears.push(bearObj);
  bearBuilder(bears);
  document.querySelector("#inputForm").reset();
  triedBut(bears);
  caughtBut(bears);
};

const bearFormCard = (event) => {
  let formId = event.target.id;

  if (formId === "button") {
    document.querySelector("#form").innerHTML = `
  <form id="inputForm">
    <div class="card-body">
      <h5 class="card-title">New Bear</h5>
      <input type="text" class="form-control" id="bearName">Bear Name</input>
      <div class="text">Track Bear</div>
      <button id="submitB" type="button" class="btn btn-primary">Submit</button>
    </div>
  </form>`;
  }
  document.querySelector("#submitB").addEventListener('click', getInfo);
};

const triedBut = (bearArray) => {
  let domString = "";
  bearArray.forEach((item, i) => {
    domString += `
    <div class="card mb-3" style="width: 18rem;" id=${i}>      
        <div id="bear-card" class="card-body">
          <h4 ${item.name}>Name: ${item.name}</h4>
          <p class="card-text">House: ${item.}</p>
          <button type="button" class="btn btn-danger" id="${i}">Tried</button> 
        </div>
      </div>`;
  })
  printToDom("#bears", domString);
};

const caughtBut = (caught) => {
  let caughtDom = "";
  caught.forEach((item, i) => {
    caughtDom +=
      `<div id="caught-card" class="card mb-3" style="width: 18rem;" id=${i}>
        <div class="card-body">
        <h5>Catch!!</h5>
        <h5 class="card-text">${item.name}</h5>
          <div class="h5 card-text text-dark"></div>
        </div>
      </div>`;
  })
  printToDom("#catches", caughtDom);
};

export const clickEvents = () => {
  document.querySelector("#submitB").addEventListener('click', bearFormCard);
  document.querySelector("#tries").addEventListener('click', triedBut);
  document.querySelector("#catches").addEventListener('click', caughtBut);
};
