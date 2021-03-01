const triedBut = (tries) => {
  tries.forEach((element, i) => {
    document.querySelector(`#tried-${i}`).addEventListener('click', () => {
      const tried = {};
      tried.time = new Date();
      tried.type = 'Tried to catch @';
      tried.score = Number(`${element.tried}`);
      const triedScore = tried.score + 1;
      document.querySelector(`#triedNum-${i}`).textContent = triedScore;
      const htmlSentence = `${tried.type} ${tried.time}`;
      document.querySelector(`#triedBear-${i}`).innerHTML = htmlSentence;
    });
  });
};

const caughtBut = (catches) => {
  catches.forEach((element, i) => {
    document.querySelector(`#caught-${i}`).addEventListener('click', () => {
      const caught = {};
      caught.time = new Date();
      caught.type = 'Got fish @';
      caught.score = Number(`${element.caught}`);
      caught.score += 1;
      document.querySelector(`#caughtNum-${i}`).textContent = caught.score;
      const htmlSentence = `${caught.type} ${caught.time}`;
      document.querySelector(`#caughtBear-${i}`).innerHTML = htmlSentence;
    });
  });
};

export { triedBut, caughtBut };
