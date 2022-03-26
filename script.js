const endpoint = "https://linedrejer.dk/bikes/wp-json/wp/v2/bike";

getBikes();

function getBikes(){
    fetch(endpoint)
    .then(res=>res.json())
    .then(setupBikes);
}

function setupBikes(bikes){
    const template = document.querySelector("template").content;
    const parentElement = document.querySelector(".bikes");
    bikes.forEach(bike=>{
        const copy = template.cloneNode(true);
        copy.querySelector(".image").src = bike.image.guid;
        copy.querySelector(".brand").textContent = bike.brand;
        copy.querySelector(".name").textContent = bike.title.rendered;
        copy.querySelector(".price span").textContent = "$" + bike.price;
        copy.querySelector(".inStore span").textContent = bike.in_stock;

        parentElement.appendChild(copy);
    })
}