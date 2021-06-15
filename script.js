const mainHTML = document.querySelector('main')
const personagemHTML = (name, image) => `
<section>
    <figure>
        <img src="${image}" alt="${name}">
        <figcaption class="nome-personagem">${name}</figcaption>
    </figure>
</section>`

const gerarValorAleatorio = () => Math.floor(Math.random() * 671);

const arrayIdPersonagens = [...Array(4).keys()].map(() => gerarValorAleatorio())

const URL = `https://rickandmortyapi.com/api/character`

const pegarPersonagem = async (URL, param) => {
    let html = ''
    try{
      const result = await fetch(`${URL}/${param}`)
      const personagens = await result.json();
      const personagensHTML = [...personagens].reduce((acc, crr) => {
          acc += personagemHTML(crr.name, crr.image)
          return acc;
      }, '');
      html = personagensHTML;
    } catch(e){
        html = `<h1>Request error - ${e} </h1>`;
    }
      mainHTML.innerHTML = html;
  }

pegarPersonagem(URL, arrayIdPersonagens)