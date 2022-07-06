
//Fetch de productos
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))


//------------------------------

let mainTitle = document.createElement("h1");
document.body.appendChild(mainTitle);
mainTitle.innerText = "Shop";
mainTitle.style.textAlign = "center";

let buttonHolder = document.createElement("div");
document.body.appendChild(buttonHolder);
buttonHolder.style.display = "flex";
buttonHolder.style.justifyContent = "center";


let url = "https://fakestoreapi.com/products";

//Create button
let shopButton = document.createElement("button");
shopButton.innerText = "Mostrar Productos";
buttonHolder.appendChild(shopButton);
shopButton.style.cursor = "pointer"
shopButton.style.width = "100px";
shopButton.style.height = "50px";
shopButton.style.borderRadius = "10%";
shopButton.style.border = "none";
shopButton.style.backgroundColor = "grey";
shopButton.style.margin = "20px";



//------------------------------

//Fetch tarjetas con título, foto, descripción y precio

shopButton.addEventListener("click", function(value){
    value.preventDefault();
    fetch(url)
.then(response=>response.json())
.then(products=>{
    console.log(products.length);
    
    for(i = 0; i<products.length; i++){
        
    let divCard = document.createElement("div");
    document.body.appendChild(divCard);
    // divCard.style.display = "flex";
    // divCard.style.flexDirection = "column";
    // divCard.style.justifyContent = "center"
    divCard.style.backgroundColor = "#E1D9D1"
    let titleProduct = document.createElement("h2");
    divCard.appendChild(titleProduct);
    let imageProduct = document.createElement("img");
    divCard.appendChild(imageProduct);
    imageProduct.style.width = "50%";
    let paragraph = document.createElement("p");
    divCard.appendChild(paragraph);

    titleProduct.innerText = products[i].title;
    imageProduct.src = products[i].image;
    paragraph.innerText = `Descripción del producto:
    ${products[i].description}

    Precio: ${products[i].price}euros
    `
    }
    
})
})

//Fetch de categorías


fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))



//Fetch de select

let categoryBtn = document.createElement("button");buttonHolder.appendChild(categoryBtn);
categoryBtn.innerText = "Mostras categorías";
categoryBtn.style.cursor = "pointer"
categoryBtn.style.width = "100px";
categoryBtn.style.height = "50px";
categoryBtn.style.borderRadius = "10%";
categoryBtn.style.border = "none";
categoryBtn.style.backgroundColor = "grey";
categoryBtn.style.margin = "20px";

categoryBtn.addEventListener("click", function(value){
    value.preventDefault();
    fetch("https://fakestoreapi.com/products/categories")
    .then(response=>response.json())
    .then(categories=>{
        let categoryList = document.createElement("select");
        buttonHolder.appendChild(categoryList);
        for(i = 0; i < categories.length; i++){
           
            // let options = `<option>${categories[i]}</option>`;
            let options = document.createElement("option"); 
            categoryList.appendChild(options);
            options.innerText = categories[i];
        }
        
        
        
        
        // let categoryList2 = `
        // <select>
        // <option>Todas las categorías</option>
        // <option>${categories[0]}</option>
        // <option>${categories[1]}</option>
        // <option>${categories[2]}</option>
        // <option>${categories[3]}</option>
        // </select>`;
        // return categoryList;
    })
    
});
