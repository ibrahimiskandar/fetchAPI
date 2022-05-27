document
  .querySelector(".buttonsinglesafe")
  .addEventListener("click", renderSingleSafeJokes);
document
  .querySelector(".buttonsingle")
  .addEventListener("click", renderSingleJokes);

let urlsinglesafe = "https://v2.jokeapi.dev/joke/Any?type=single&safe-mode";

let urlsingle = "https://v2.jokeapi.dev/joke/Any?type=single";
let table = document.querySelector("table");

//--------------single:safe------------------------//
async function getSingleSafeJokes() {
  let url = urlsinglesafe;
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function createSingleSafeJokes() {
  let jokes = await getSingleSafeJokes();

  let tr = `
            <tr >
              <td >${jokes.category}</td>
              <td >${jokes.joke}</td>
              <td >${jokes.safe}</td>
            </tr>`;

  return tr;
}

async function renderSingleSafeJokes() {
  let row = await createSingleSafeJokes();

  table.lastElementChild.innerHTML += row;
}
//--------------single:not safe------------------------//
async function getSingleJokes() {
  let url = urlsingle;
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function createSingleJokes() {
  let jokes = await getSingleJokes();

  let tr = `
            <tr >
              <td >${jokes.category}</td>
              <td >${jokes.joke}</td>
              <td >${jokes.safe}</td>
            </tr>`;

  return tr;
}

async function renderSingleJokes() {
  let row = await createSingleJokes();

  table.lastElementChild.innerHTML += row;
}
