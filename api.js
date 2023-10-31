const emojis = ['😀', '😍', '🚀', '🌟', '🎉', '🍔', '🎈', '🌺', '📦', '🔥'];

// Function to get a random emoji from the array
function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

let api = async () => {

    const res = await fetch('http://localhost:3000/api/products');
    const data = await res.json();


    const List = document.querySelector('.product-items');

    const ProductHTML = data.map(product => {
        return `
        <li class="card">
        <h2>Title: ${product.title}</h2>
        <p class="desc">Description: ${product.description}</p>
        <p class="price">Price:  &#8377; ${product.price}</p>
        <span>${getRandomEmoji()}</span>
        </li>
        `;
    });

    List.innerHTML = ProductHTML.join('');
}

api();