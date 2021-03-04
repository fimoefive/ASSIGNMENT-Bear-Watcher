import bearBuilder from './river';

export const bears = [];

const getInfo = (event) => {
  event.preventDefault();

  const name = document.querySelector('#bearName').value;
  const description = document.querySelector('#bearDescription').value;
  const tries = 0;
  const caught = 0;
  const bearId = bears.map((bear) => bear.id).sort((a, b) => a - b);
  const id = bearId.length ? bearId[(bearId.length - 1)] + 1 : 1;

  const bearObj = {
    name,
    description,
    tries,
    caught,
    id,
  };

  bears.push(bearObj);
  bearBuilder(bears);
  document.querySelector('#inputForm').reset();
};

const bearFormCard = (event) => {
  const formId = (event.target.id);

  if (formId === 'buttonForm') {
    document.querySelector('#form').innerHTML = `
  <form id="inputForm">
    <div class="card-body">
      <h4 class="card-title">Bear Name</h4>
      <input type="text" class="form-control" id="bearName" placeholder="Bear Name..."></input>
      <div>Description</div>
      <input type="text" class="form-control" id="bearDescription" placeholder="Description..."></input>
      <div class="text">Track Bear</div>
      <button id='submitB' type='button' class="btn btn-primary">Submit</button>
    </div>
  </form>`;
  }
  document.querySelector('#submitB').addEventListener('click', getInfo);
};

// const deleteCard = (e) => {
//   const targetType = (e.target.type);
//   const targetId = Number(e.target.id);
//   if (targetType === 'button') {
//     const deleteBear = bears.findIndex((bear) => bear.id === targetId);
//     bears.splice(deleteBear, 1);
//   }
//   bearBuilder(bears);
// };

const handleButton = (e) => {
  const targetId = (e.target.id);
  const targetType = (e.target.type);

  if (targetType === 'button' && targetId.includes('triesBut')) {
    const bearIndex = Number(targetId.split('-')[1]);
    bears[bearIndex].tries += 1;
    bearBuilder(bears);
  } else if (targetType === 'button' && targetId.includes('caughtBut')) {
    const bearIndex = Number(targetId.split('-')[1]);
    bears[bearIndex].caught += 1;
    bearBuilder(bears);
  } else if (targetType === 'button') {
    bears.splice(targetId, 1);
    bearBuilder(bears);
  }
};

export const clickEvents = () => {
  document.querySelector('#buttonForm').addEventListener('click', bearFormCard);
  document.querySelector('#bears').addEventListener('click', handleButton);
  // document.querySelector('#bears').addEventListener('click', deleteCard);
};
