const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const resultsContainer = document.querySelector(".gameinfo")
const resultsContainer2 = document.querySelector(".grid-item")

const url = `https://skadbergworks.com:9001/wp-json/wc/v3/products/${id}`;
let username = 'ck_1d95b6fd427f69c4b10ad77decaaacdfc1141cfb';
let password = 'cs_985e8abe6a6192424a607d3f26479b190e4d1a7a';

let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));


async function getInfo() {

    const response =  await fetch(url, {method:'GET',
    headers: headers, 
    });

    
    const object = await response.json();
    const info = object;

    resultsContainer2.innerHTML += `<img alt="${info.images[0].alt}" class="smallgame" src="${info.images[0].src}"/>`; 

    resultsContainer.innerHTML += ` <div>Game name: ${info.name}<div/>`;
    resultsContainer.innerHTML += ` <div>Price: ${info.price_html}<div/>`;

    if (info.stock_status === "instock") {
        resultsContainer.innerHTML += ` <div> Availability: In stock <div/>`;
    } else {
        resultsContainer.innerHTML += ` <div> Availability: Not in stock <div/>`;
    }
    
    



}

getInfo();