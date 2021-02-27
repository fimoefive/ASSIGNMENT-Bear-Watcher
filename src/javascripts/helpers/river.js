export const bears = [
  {
    name: 'Ed',
    description: 'Senior bear',
    tried: 15,
    caught: 6,
    id: '1',
  },
  {
    name: 'Carla',
    description: 'Patient',
    tried: 16,
    caught: 9,
    id: '2',
  },
  {
    name: 'Kathy',
    description: 'Energetic',
    tried: 14,
    caught: 7,
    id: '3',
  },
];

export const printToDom = (divId, printText) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = printText;
};

export const bearBuilder = (bearArray) => {
  let domString = '';
  bearArray.forEach((element, i) => {
    domString += ` 
    <div class="card text-danger" style = "width: 16rem;" id = "${i}">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.description}</p>
          <button class="btn btn-primary" id="tried-${i}">Tried to catch a fish</button>
          <div class="hidden">Tried <span id="triedNum-${i}">${element.tried}</span> times</div>
          <div class="triedBear" id="triedBear-${i}"></div>
          <button type="increment" class="btn btn-primary mt-3" id="caught-${i}">Caught a fish</button>
          <div class="hiddenAgain">Caught <span id="caughtNum-${i}">${element.caught}</span> times</div>
          <div class="caughtBear" id="caughtBear-${i}"></div>
        </div>
      </div >`;
  });
  printToDom('#bear-container', domString);
};
