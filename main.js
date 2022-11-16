const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleDesktopMenu(){
    const asideOpen = !aside.classList.contains('inactive');

    if(asideOpen){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside(){
    const mobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopClose = desktopMenu.classList.contains('inactive');

    if(mobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopClose){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Guitar',
    price: 75,
    image:'https://images.pexels.com/photos/12189103/pexels-photo-12189103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Nux',
    price: 110,
    image:'https://m.media-amazon.com/images/I/61ZWzndFLsL._AC_SX679_.jpg'
})

for (product of productList){
    console.log(product.name);//elemento
}
for(product in productList){
    console.log(product);//indice
}

function renderProducts(arr){
    for(product of arr){
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
        //product={name,price,image}
        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
    
        const productPrice=document.createElement('p');
        productPrice.innerText='$'+product.price;
        const productName=document.createElement('p');
        productName.innerText=product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);