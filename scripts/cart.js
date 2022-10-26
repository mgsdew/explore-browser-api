
const getInputValueById = id =>{

    const inputField = document.getElementById(id);
    const inputValue = inputField.value;

    inputField.value = '';    
    return inputValue;
}

const btnAdd = () => {

    const product = getInputValueById('product-name-field')
    const quantity = getInputValueById('product-quantity-field')

    displayItems(product, quantity);
    saveItemToLS(product, quantity);
    
}

const getShoppingCartFromLS = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveItemToLS = (product, quantity) =>{
    const cart = getShoppingCartFromLS();
    // add product to the object as property
    cart[product] = quantity;
    const cartStringyfy = JSON.stringify(cart);

    // Save to local storage
    localStorage.setItem('cart', cartStringyfy);
}

const displayItems = (product, quantity) => {

    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}