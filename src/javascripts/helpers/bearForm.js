import bearBuilder from './river';

export const bears = [];

const getInfo = (event) => {
  event.preventDefault();

  const name = document.querySelector('#bearName').value;
  const description = document.querySelector('#bearDescription').value;
  const imgUrl = document.querySelector('#picture').value;
  const tries = 0;
  const timeTried = Date();
  const caught = 0;
  const timeCaught = Date();
  const bearId = bears.map((bear) => bear.id).sort((a, b) => a - b);
  const id = bearId.length ? bearId[(bearId.length - 1)] + 1 : 1;

  const bearObj = {
    name,
    description,
    imgUrl,
    tries,
    timeTried,
    caught,
    timeCaught,
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
      <div class="mb-3">
      <div>Picture</div>
      <input type="url" class="form-control" id="picture" placeholder="Insert Image"></input>
      </div>
      <button id='submitB' type='button' class="btn btn-primary">Track Bear</button>
    </div>
  </form>`;
  }
  document.querySelector('#submitB').addEventListener('click', getInfo);
};

const deleteCard = (e) => {
  const targetType = (e.target.type);
  const targetId = (e.target.id);
  if (targetType === 'button' && targetId.includes('unTrack')) {
    bears.splice(targetId, 1);
  }
  bearBuilder(bears);
};

const handleButton = (e) => {
  const targetId = (e.target.id);
  const targetType = (e.target.type);

  if (targetType === 'button' && targetId.includes('triesBut')) {
    const bearIndex = Number(targetId.split('-')[1]);
    bears[bearIndex].tries += 1;
    bears[bearIndex].timeTried = new Date();
    bearBuilder(bears);
  } else if (targetType === 'button' && targetId.includes('caughtBut')) {
    const bearIndex = Number(targetId.split('-')[1]);
    bears[bearIndex].caught += 1;
    bears[bearIndex].timeCaught = new Date();
    bearBuilder(bears);
  }
};

export const clickEvents = () => {
  document.querySelector('#buttonForm').addEventListener('click', bearFormCard);
  document.querySelector('#bear-container').addEventListener('click', handleButton);
  document.querySelector('#bear-container').addEventListener('click', deleteCard);
};
