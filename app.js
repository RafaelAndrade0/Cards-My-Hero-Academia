let listaDePersonagens = [
    { nome: 'Izuku Midoriya', img: './img/midoriya.jpg' },
    { nome: 'Shoto Todoroki', img: './img/shoto.jpg' },
    { nome: 'All Might', img: './img/allmight.png' },
    { nome: 'All for One', img: './img/allforone.jpeg' },
    { nome: 'MT. Lady', img: './img/mtlady.png' },
    { nome: 'Katsuki Bakugou', img: './img/bakugou.jpg' },
    { nome: 'Tomura Shigaraki', img: './img/tomura.png' }
];

// function fetchFromJson() {
//     // Fetch Json
//     fetch('./personagens.json')
//         .then(resp => resp.json())
//         .then(data => {
//             data.personagens.map((personagem) => {
//                 listaDePersonagens.push(personagem);
//             })
//         })
//         .catch(err => console.log(err))
// }

const addCard = document.querySelector('#addCard');
addCard.addEventListener('click', handleAddCard);

const cardsList = document.querySelector('#cards-list');
cardsList.addEventListener('click', handleDeleteCard);

function handleDeleteCard(e) {
    let targetElement = e.target;
    let elementClassName = targetElement.className;

    if(elementClassName.includes('btn')) {
        let idToDelete = targetElement.getAttribute('data-id');
        console.log(idToDelete);
        listaDePersonagens.splice(idToDelete, 1);
        addCardsLoad();
    }
}


const deleteAllCards = document.querySelector('#deleteAllCards');
deleteAllCards.addEventListener('click', handleDeleteAllCards);

function handleDeleteAllCards() {
    listaDePersonagens = [];
    addCardsLoad();
}

// const inputNomeCard = document.querySelector('#inputNomeCard');
// console.log(inputNomeCard.value);

function handleAddCard() {
    let nome = document.querySelector('#inputNomeCard').value;
    let img = document.querySelector('#inputLinkImg').value;
    // id++;

    const novoInput = { nome, img };
    listaDePersonagens.push(novoInput);
    addCardsLoad();
    // nome.value = '';
    // img.value = '';
}

function addCardsLoad() {
    const cardsList = document.querySelector('#cards-list');
    cardsList.innerHTML = '';

    listaDePersonagens.map((personagem, index) => {
        let output = '';
        output += `
        <div class="col-md-3 d-flex flex-wrap">
            <div class="card">
            <img class="card-img-top" src="${personagem.img}"
                alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${personagem.nome}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button data-id="${index}" type="button" class="btn btn-danger btn-sm">Remover Card</button>
                </div>
            </div>
        </div>
        `
        cardsList.insertAdjacentHTML('beforeend', output);
    });
}

// fetchFromJson();
addCardsLoad();