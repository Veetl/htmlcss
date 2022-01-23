const url = "https://skadbergworks.com:9001/wp-json/wc/v3/products";
const resultsContainer = document.querySelector(".gamelist")
const resultsContainer2 = document.querySelector(".featured")
let username = 'ck_1d95b6fd427f69c4b10ad77decaaacdfc1141cfb';
let password = 'cs_985e8abe6a6192424a607d3f26479b190e4d1a7a';

let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
//headers.set("Access-Control-Allow-Origin", "*");

async function getInfo() {

    const response =  await fetch(url, {method:'GET',
    headers: headers, 
    });

    const object = await response.json();

    const info = object;
    info.sort((a,b) => a.name > b.name);

    try {
    
        for(let i = 0; i < info.length; i++) {
            if (i === 10) {
                break;
            }
            resultsContainer.innerHTML += `<a href="product.html?id=${info[i].id}"><img alt="${info[i].images[0].alt}" class="games withinbox" src="${info[i].images[0].src}"></a>`;
        }
    } catch (error) {
    resultsContainer.innerHTML = displayError("An error occurred when calling the API")
}

    try {
    
        for(let i = 0; i < info.length; i++) {
            if (info[i].featured === true) {
                resultsContainer2.innerHTML += `<a href="product.html?id=${info[i].id}"><img alt="${info[i].images[0].alt}" class="games withinbox" src="${info[i].images[0].src}"></a>`;
            }   
        }
    } catch (error) {
    resultsContainer2.innerHTML = displayError("An error occurred when calling the API")
}};

getInfo();