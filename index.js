const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCardContainer = document.querySelector('#shopping-cart-container');
const productDetailContainer = document.querySelector('.product-detail');

// const shoppingCardContainer = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuBurgerIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoshoppingCardContainer);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu() {
    const isshoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive');
    
    if (!isshoppingCardContainerClosed) {
        shoppingCardContainer.classList.add('inactive');
        
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isshoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive');
    
    if (!isshoppingCardContainerClosed) {
        shoppingCardContainer.classList.add('inactive');
        
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoshoppingCardContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    // shoppingCardContainer.classList.toggle('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
        
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
        
    }
    shoppingCardContainer.classList.toggle('inactive');
}
function openProductDetailAside() {
    shoppingCardContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Computadora',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

    function renderProducts(arr) {
        for (product of arr) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
        
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);

            // product = {name, price, image} -> product.image
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
        
            const productInfoDiv = document.createElement('div');
            
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
            const productName = document.createElement('p');
            productName.innerText = product.name;
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
            
            const productInfoFigure = document.createElement('figure');
            const productImgCart  = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
            productImg.addEventListener('click', openProductDetailAside);

           
            productInfoFigure.appendChild(productImgCart);
        
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
        
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
        
            cardsContainer.appendChild(productCard);
        }
    }

    renderProducts(productList);