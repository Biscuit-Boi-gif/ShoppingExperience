let cartCardContainer = document.getElementById("cartCardContainer");

function displayCartProducts() {
    clearStorageAndCart();
    console.log(cart);
    cartCardContainer.innerHTML = "";
    if (cart.length > 0) {
        console.log(cart);
        cart.forEach( (cartItem) => {
            cartCardContainer.innerHTML += `<div class="cartCard">
        <div class="cartCardFlex">
            <img src="${cartItem.image}" alt="${cartItem.description}">
            <p class="cartTitle">${cartItem.productName}</p>
            <p class="cartDescription">${cartItem.description}</p>
            <div class="cartQuantity">
                <input type="number" value="1" min="1" max="5">
            </div>
            <p class="cartPrice">&dollar;${cartItem.price}</p>
        </div>
        <p class="textAlignRight removeMargins"><a href="#" id=${cartItem.id} class="removeLink">Remove</a></p>
    </div>`;
    removeFromCart();
    });
        } else {
        cartCardContainer.innerHTML = '<p id=emptyCart>The cart is empty</p>';
    }
}
displayCartProducts();