const printToDom = (divId, printText) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = printText;
};

const bearBuilder = (bearsArray) => {
  let domString = '';
  bearsArray.forEach((element, i) => {
    domString += ` 
    <div class="card text-danger" style = "width: 16rem;" id = "${i}">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">Description: ${element.description}</p>
          <button type="button" class="btn btn-primary" id="triesBut-${i}">Attempts</button>
          <p class="card-text">${element.tries} times</p>
          <button type="button" class="btn btn-primary mt-3" id="caughtBut-${i}">Caught</button>
          <p id="caughtNum-${i}">Catches: ${element.caught}</p>
          <div class="caughtBear" id="caughtBear-${i}"></div>
          <button type="button" class="btn btn-danger" id="${i}">Delete</button> 
        </div>
      </div >`;
  });
  printToDom('#bears', domString);
};

export default bearBuilder;
