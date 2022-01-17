let products = [
{
    title: "chic-shirt",
    category: "tops",
    price: "R399.99",
    img: "https://i.postimg.cc/Y0WgG0q8/shirt.jpg",
},
{
    title: "chic leather jacket",
    category: "jackets",
    price: "R450.99",
    img: "https://i.postimg.cc/pTNnN3gy/jacket.jpg",
},{
    title: "brown pants",
    category: "bottoms",
    price: "R299.99",
    img: "https://i.postimg.cc/GmJfs1jn/pants.jpg",
},{
    title: "beige dress",
    category: "dresses",
    price: "R180.00",
    img: "https://i.postimg.cc/3RP1cLZZ/dress.jpg",
}
]

// let cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];

// read

function readProducts(products){
    document.querySelector("#products").innerHTML = "";
    products.forEach((product, i) => {
      document.querySelector("#products").innerHTML += `
    <div class="card" style="width: 18rem;">
   <img src="${product.img}" class="card-img-top" alt="...">
   <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class = "card-text">${product.price}</p>
    <button class="btn btn-danger" onclick="deleteproducts(${i})">Delete</button>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update-modal${i}">Update</button>
    <button class="btn btn-dark" onclick="#addToCart()">Add to cart</button>
  
   </div>
  </div>

  <div class="modal fade" id="update-modal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">update a product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
      TITLE<input type="text" id="update-title${i}"/> <br>
      CATEGORY<select name="category" id="updateCategory${i}"><br>
          <option value="select">-select one-</option><br>
          <option value="tops">tops</option>
          <option value="bottoms">bottoms</option>
          <option value="jackets">jackets</option>
          <option value="dresses">dresses</option>
    </select><br>
    PRICE<input type="text" id="updatePrice${i}" value=""/><br>
    IMG LINK<input type="text" id="updateImg${i}" value=""/><br>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="updateProducts(${i})" data-bs-toggle="modal" data-bs-target="#update-modal${i}">Save changes</button>
        </div>
      </div>
    </div>

  </div>

  `});
};

readProducts(products);
showCartBadge();

function createProduct() {
  let title = document.querySelector("#addTitle").value;
  let price = document.querySelector("#addPrice").value;
  let category = document.querySelector("#addCategory").value;
  let img = document.querySelector("#addImg").value;
  try {
    if (!products) throw new Error("No country to add!!!");
  products.push({
    title,
    category,
    price,
    img,
  });
  localStorage.setItem("products", JSON.stringify(products));
  readProducts(prodcts);
  document.querySelector("#products").value = "";
}catch (err) {
    alert(err);
  }
}

//delete//
function deleteProduct(i) {
  product.splice(i, 1);
  localStorage.setItem("products", JSON.stringify(products));
  readProducts(products);
}

//update//
function updateProduct(i) {
  let title = document.querySelector(`#updateTitle${i}`).value;
  let category = document.querySelector(`#updateCategory${i}`).value;
  let price = document.querySelector(`#updatePrice${i}`).value;
  let img = document.querySelector(`#updateImg${i}`).value;
  try {
    if (!product) throw new Error("No product to update!!!");
    products[i] = {
    title,
    price,
    category,
    img,
    };
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}

function addToCart(i) {
  let qty = document.querySelector(`#addToCart${i}`).value;
  let added = false;
  cart.forEach((product) =>{
  if (product.title == products[i].title){
    alert(
      `You have successfully added ${qty} ${products[i].title} to the cart`
    );
    product.qty = parseInt(product.qty) + parseInt(qty);
    added = true;
  }
});

  if (!added) {
    cart.push({ ...products[i], qty});
    alert(
      `You have successfully added ${qty} ${products[i].title} to the cart`
    );
  }
 showCartBadge();
  
 localStorage.setItem("cart", JSON.stringify(cart));
}

//update cart
function showCartBadge() {
  document.querySelector("badge").innerHTML = cart ? cart.length: "";
}

// sort by category
function sortCategory() {
  let category = document.querySelector("#sortCategory").value;

  if(category =="All") {
    return readProducts(products);
  }

  let foundProducts = products.filter((product) =>{
    return product.category == category;
  });

  readProducts(foundProducts);
  console.log(foundProducts);
}

// sort by name

function sortName() {
  let direction = document.querySelector("#sortName").value;

  let sortedProducts = products.sort((a,b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()){
    return -1;
  }
  return 0;

});

if(direction == "descending") sortedProducts.reverse();
console.log(sortedProducts);
readProducts(products);
} 

//sort by price

function sortPrice() {
  let direction = document.querySelector("#sortPrice").value;

  let sortedProducts = products.sort((a, b) => a.price - b.price);

  console.log(sortedProducts);

  if (direction == "descending") sortedProducts.reverse();
  readProducts(sortedProducts);
}