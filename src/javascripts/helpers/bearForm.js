import { bearBuilder, bears } from './river';
import { triedBut, caughtBut } from './buttons';

const getInfo = (event) => {
  event.preventDefault();

  const name = document.querySelector('#bearName').value;
  const stringArray = ['Big', 'Small', 'Male', 'Female', 'Old', 'Young'];
  const randomText = stringArray[Math.floor(Math.random() * stringArray.length)];
  const description = `${name} ${randomText}`;
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
  document.querySelector('#inputForm').reset();
  triedBut(bears);
  caughtBut(bears);
};

const bearFormCard = (event) => {
  const formId = (event.target.id);

  if (formId === 'buttonForm') {
    document.querySelector('#form').innerHTML = `
  <form id="inputForm">
    <div class="card-body">
      <h5 class="card-title">Bear Form</h5>
      <input type="text" class="form-control" id="bearName">Bear Name</input>
      <input type="text" class="form-control" id="bearName">Description</input>
      <div class="text">Track Bear</div>
      <button id="submitB" type="button" class="btn btn-primary">Submit</button>
    </div>
  </form>`;
  }
  document.querySelector('#submitB').addEventListener('click', getInfo);
};

const deleteCard = (e) => {
  const targetType = (e.target.type);
  const targetId = Number(e.target.id);
  if (targetType === 'button') {
    const deleteBear = bears.findIndex((bear) => bear.id === targetId);
    const removeBear = bears.splice(deleteBear, 1);
  }
  bearBuilder(bears);
};

const clickEvents = () => {
  document.querySelector('#buttonForm').addEventListener('click', bearFormCard);
  triedBut(bears);
  caughtBut(bears);
  document.querySelector('#bears').addEventListener('click', deleteCard);
};

export default clickEvents;
