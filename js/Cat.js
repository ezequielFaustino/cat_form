
export class Cat {
  constructor() {
  }

  // pega os dados do form e exibe na pagina
  show() {
    let checkBoxes = document.querySelectorAll("input[name='personality']");
    let checkRadio = document.querySelectorAll("input[name='indoor-outdoor']");
    let result = document.querySelector("#result");
    let selected = 0;

    let btnSubmit = document.querySelector("#send");

    btnSubmit.addEventListener("click", (e) => {
      e.preventDefault();

      selected = 0;
      // radio option selecionada
      result.innerHTML += `<p>My cat is a:</p>`;
      checkRadio.forEach((el) => {
        if (el.checked) {
          selected++
          result.innerHTML += `<ul><li>${el.value} cat</li></ul>` 
        }
      })

      // checkboxs selecionadas
      result.innerHTML += `<p>And my cat is:</p>`;
      checkBoxes.forEach((el) => {
        if (el.checked) {
          selected++
          result.innerHTML += `<ul><li>${el.value}</li></ul>`
        }
      })
    })
  }
}