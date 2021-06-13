const mainHTML = document.querySelector('main')
const personagemHTML = (name, image) => `
<section>
    <figure>
        <img src="${image}" alt="${name}">
        <figcaption class="nome-personagem">${name}</figcaption>
    </figure>
</section>`

const gerarValorAleatorio = () => Math.floor(Math.random() * 671);

let arrayIdPersonagens = [...Array(4).keys()].map(() => gerarValorAleatorio())

let pegarPersonagem = () => {
    return fetch(`https://rickandmortyapi.com/api/character/${arrayIdPersonagens}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "content-type": 'application/json'
        }
    })
    .then((response)=> response.json())
    .then((data) => {
        const personagens = data;
        const personagensHTML = [...personagens].reduce((acc, crr) => {
            acc += personagemHTML(crr.name, crr.image)
            return acc;
        }, '')
        mainHTML.innerHTML = personagensHTML;
    });
}

pegarPersonagem()