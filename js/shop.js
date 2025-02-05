const cardContainer = document.querySelector("#cardContainer");
function addProducts() {
    products.forEach( individualCard => {
        cardContainer.innerHTML += `
        <div class="card" id="cardNumber${individualCard.id}">
                    <img src="images/images/shop/thumbnails/${individualCard.image}" alt="${individualCard.description}">
                    <div class="cardText">
                        <h4>${individualCard.productName}</h4>
                        <p>${individualCard.description}</p>
                        <p>&dollar;${individualCard.price}</p>
                        <button id="${individualCard.id}" class="cartButton">Add to Cart</button>
                    </div>
                </div>`;
    });
}
addProducts();

/*
                <div class="card" id="cardNumber1">
                    <img src="images/images/shop/thumbnails/ClownUmbrella_Thumb.jpg">
                    <div class="cardText">
                        <h4>Clown Umbrella</h4>
                        <p>A porcelain figurine of a clown holding an umbrella and riding a unicycle</p>
                        <p>&dollar;29.95</p>
                        <button class="cartButton">Add to Cart</button>
                    </div>
                </div>
*/