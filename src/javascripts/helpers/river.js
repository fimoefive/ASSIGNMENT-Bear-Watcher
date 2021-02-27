
export const bears = [
  {
    name: "",
    description: "",
    tried: ,
    caught: ,
    id: "",
  },
  {
    name: "",
    description: "",
    tried: ,
    caught: ,
    id: "",
  },
  {
    name: "",
    description: "",
    tried: ,
    caught: ,
    id: "",
  },
];

const printToDom = function (divId, printText) {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = printText;
};

export const bearBuilder = function (bearArray) {
  let domString = "";
  bearArray.forEach((element, i) => {
    domString += ``;
  })
  printToDom("#bears", domString);
};
