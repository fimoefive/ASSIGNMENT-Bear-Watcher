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
          <div id="picture"><img src="${element.imgUrl}" alt="${element.imgUrl}"></div>
          <p class="card-text">Description: ${element.description}</p>
          <button type="button" class="btn btn-primary" id="triesBut-${i}">Attempt</button>
          <p class="card-text">Tries: ${element.tries}</p>
          <p class="card-text">Time: ${element.timeTried}</p>
          <button type="button" class="btn btn-primary mt-3" id="caughtBut-${i}">Caught</button>
          <p id="caughtNum-${i}">Catches: ${element.caught}</p>
          <p class="card-text">Time: ${element.timeCaught}</p>
          <div class="caughtBear" id="caughtBear-${i}"></div>
          <button type="button" class="btn btn-danger" id="${i}">Delete</button> 
        </div>
      </div >`;
  });
  printToDom('#bears', domString);
};

export default bearBuilder;
