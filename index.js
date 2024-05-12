//  Promises

//new ways of using promises

//ASYNC 
//anything running through it will be synchronose

//Crate our varibles and stire them in a const

// first step, fetch our API
const loading = document.querySelector(".loader")
const baseUrl = "https://fakestoreapi.com"

const extractProducts = async () => {
    try{
        loading.innerHTML = "Loading..."
        const reponseFromAPI = await fetch (`${baseUrl}/products`)
       
        const decodeResponseToData = await reponseFromAPI.json()
        console.log(decodeResponseToData)
        loading.innerHTML = ""

        createProduct(decodeResponseToData)
        
    }catch (error) {
        console.log(error)
    }
}

extractProducts()


const createProduct = (products) => {
    products.map((item) => {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
        
        const allproductContainer = document.querySelector(".products__container")
        allproductContainer.appendChild(productCard)

        // const btn = document.createElement("button")
        // btn.innerText = "Buy Now"
        // btn.classList.add("btn")

        // productContainer.appendChild(btn)

        const productContainer = `
        <div class="inside_container">
            <img src=${item.image} alt="">
            <h2 class="title">${item.title.slice(0, 19)}</h2>
            <p class="description">${item.description.slice(0, 60)}...</p>

            <div class="product__sub__text">
                <h4 class="price">$${item.price.toFixed(3)}</h4>
                <h4 class="ratings">${item.rating.rate}</h4>
            </div>
            
            <div class="product__btn">
                <button class="btn"> Shop Now</button>
                <button class="add__to__cart"> Add to cart</button>
            </div>
        </div>
        `


        productCard.innerHTML = productContainer
    })

    const searchBox = document.querySelector("input")
    

    searchBox.addEventListner("input", async (e) => {
        allproductContainer.style.display = "none"
        const data = fetchProduct(e.target.value);
        console.log(data);
    })

    const fetchProduct = async (searchText) => {
        console.log(fetchProduct)
    }
}



document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.fa-bars');
    const menu = document.querySelector('.side-menu');
    const exitBtn = document.querySelector('.fa-circle-xmark');

    menuBtn.addEventListener('click', () => {
        menu.style.display = 'block'
        menuBtn.style.display = 'none'
        exitBtn.style.display = 'block'
    })


    exitBtn.addEventListener('click', () => {
        menu.style.display = 'none'
        exitBtn.style.display = 'none'
        menuBtn.style.display = 'block'
    })



    // const exitBtn = document.createElement('div');
    // // exitBtn.textContent = 'Exit';
    // exitBtn.classList.add('fa-circle-xmark');
    
    // menuBtn.addEventListener('click', function() {
    //   if (menu.style.display === 'none' || menu.style.display === '') {
    //     menu.style.display = 'block';
    //     exitBtn.style.display = 'block';
    //     // menuBtn.style.display = 'none';
    //     menuBtn.textContent = '';
    //     // exitBtn.style.display = 'block';
    //     menuBtn.appendChild(exitBtn);
    //   } else {
    //     menu.style.display = 'none';
    //     menuBtn.removeChild(exitBtn);
    //     exitBtn.style.display === 'none'
    //   }
    // });
  });

  const searchEl = document.querySelector("input");
const allProdContainer = document.querySelector(".products__container");


  searchEl.addEventListener("input", async (e) => {
    console.log(e.target.value);
    allProdContainer.style.display = "none";
    const data = fetchProduct(e.target.value);
    console.log(data);
    // createProduct(data);
    if (e.target.value.trim() == "") {
      allProdContainer.style.display = "flex";
    }
  });
  
  // Fetch product from server and filter through
  
  const fetchProduct = async (searchText) => {
    console.log(searchText);
    const response = await fetch(`${baseUrl}/products`);
    // console.log(response);
    const data = await response.json();
    loading.innerHTML = "";
    // filter with search text
    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filtered);
    // Remove existing content from the DOM
    allProdContainer.innerHTML = "";
    // Create products with the new filtered array
    allProdContainer.style.display = "flex";
    createProduct(filtered);
  };
  

