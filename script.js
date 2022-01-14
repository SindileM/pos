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

readProducts(products)

function createProduct(i) {
  let title = document.querySelector("#addTitle").value;
  let price = document.querySelector("#addPrice").value;
  let category = document.querySelector("#addCategory").value;
  let img = document.querySelector("#addImg").value;
  products.push({
    title,
    category,
    price,
    img
  });
  localStorage.setItem("products", JSON.stringify(products));
  readProducts(prodcts);
  document.querySelector("#products").value = "";
  try {
    if (!country) throw new Error("No country to add!!!");
  } catch (err) {
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
    img
    };
    localStorage.setItem("products", JSON.stringify(products));
    readProducts(products);
  } catch (err) {
    alert(err);
  }
}


