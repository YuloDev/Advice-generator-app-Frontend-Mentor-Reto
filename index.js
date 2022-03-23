let URL = `https://api.adviceslip.com/advice`;
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const advice = document.querySelector("#advice");
    const advice_text = document.querySelector("#advice_text");
    advice.append(`Advice # ${data.slip.id}`);
    advice_text.append(`${data.slip.advice}`);
  });

const btn = document.querySelector("#btn-siguiente");
const advice = document.querySelector("#advice");
const advice_text = document.querySelector("#advice_text");
async function fetchingData() {
  advice.removeChild(advice.lastChild);
  advice_text.removeChild(advice_text.lastChild);
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      advice.append(`Advice # ${data.slip.id}`);
      advice_text.append(`${data.slip.advice}`);
    });
}
