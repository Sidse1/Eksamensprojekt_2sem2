let products = ["El-artikler", "Belysning", "tavlemateriale", "LK", "andet"];
let select = document.getElementById("productList");

if (products.length > 0) {
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let option = document.createElement("option");
        option.text = product;
        option.value = product.toLowerCase().replace(/\s+/g, "-");
        select.add(option);
    }
} else {
    console.log("No products available");
}

select.addEventListener('click', function() {
    console.log("Select element clicked");
});

