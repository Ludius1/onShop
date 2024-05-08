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


