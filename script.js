console.log("hei")
const url = "https://localhost/flower-power/wp-json/wc/v3/products";
const resultsContainer = document.querySelector(".gamelist")
let username = 'ck_088360557fdab3e8e37c569ed4a1568f630aa162';
let password = 'cs_cd00a52a79bb4ea96bae0cced5139ef6c6b9b1ec';

let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
//headers.set("Access-Control-Allow-Origin", "*");

async function getInfo() {

    const response =  await fetch(url, {method:'GET',
    headers: headers, 
    });

    const object = await response.json();

    const info = object;

    //resultsContainer.innerHTML = "";

    try {
    
        for(let i = 0; i < info.length; i++) {
console.log(info[i].name)
            if (i === 8) {
                break;
            }
            resultsContainer.innerHTML += `<div class="gamelist">${info[i].name}</div>`;
        }

        for(let i = 0; i < info.length; i++) {

            if (i === 8) {
                break;
           }
           resultsContainer.innerHTML += `<div class="gamelist">${info[i].rating}</div>`;
       }

       for(let i = 0; i < info.length; i++) { 

           if (i === 8) {
               break;
           }
           resultsContainer.innerHTML += `<div class="gamelist">${info[i].tags}</div>`;
       } 
    } catch (error) {
    resultsContainer.innerHTML = displayError("An error occurred when calling the API")
}
// I tried to use (toString) but could not make the array turn into numbers
    
  

}

getInfo();