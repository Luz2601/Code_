// this is called storing data 
const products = [{
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    raiting: {
        stars: 4.5,
        count: 87
    },
    priceCents: 1090
},{
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    raiting: {
        stars: 4,
        count: 127
    },
    priceCents: 2095
},{
    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    raiting: {
        stars: 4.5,
        count: 56
    },
    priceCents: 799
}];
// now well generate the html 
//1st loop through this arrey
// foreach takes the object gives it to parameter and runs the fx 
let producstHTML = '';
products.forEach((product) => {
    producstHTML = producstHTML + `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src=${product.image}>
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${product.raiting.stars*10}.png">
                <div class="product-rating-count link-primary">
                ${product.raiting.count}
                </div>
            </div>

            <div class="product-price">
                $${(product.priceCents / 100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary">
                Add to Cart
            </button>
        </div>
    `;
});

document.querySelector('.js-products-grid').innerHTML = producstHTML;
