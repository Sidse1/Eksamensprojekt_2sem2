let products = ["Lampe", "Stikkontakt", "Kabel", "Elektrisk skruetrækker", "Sikringsboks"];
    let select = document.getElementById("productList");

    if (products.length > 0) {
        products.forEach(function(product) {
            let option = document.createElement("option");
            option.text = product;
            option.value = product.toLowerCase().replace(/\s+/g, "-");
            select.add(option);
        });
    } else {
        console.log("No products available");
    }

    select.addEventListener('click', function() {
        console.log("Select element clicked");
    });
