export const bears = [
  {
    name: 'Ed',
    description: 'Senior bear',
    tried: 15,
    caught: 6,
    id: '1',
  },
  {
    name: 'Carl',
    description: 'patient',
    tried: 16,
    caught: 9,
    id: '2',
  },
  {
    name: 'Kathy',
    description: 'energetic',
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
    domString += '';
  });
  printToDom('#bears', domString);
};
