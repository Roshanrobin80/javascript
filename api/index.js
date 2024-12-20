fetch("https://dummyjson.com/products").then(response=>response.json()).then(data=>{
    // console.log(data.products);
    data.products.forEach(element=>{
        const row=document.querySelector(".row")
        const col=document.createElement("div")
        col.classList.add("col-lg-3")
        col.innerHTML=`
        <div class="container mt-3">
            <div class="card" style="width:100%">
                <img class="card-img-top" src="${element.thumbnail}" alt="Card image" style="width:100%">
                <div class="card-body">
                <h4 class="card-title">${element.title}</h4>
                <p class="card-text">${element.description}</p>
                <a href="#" class="btn btn-primary">See product</a>
                </div>
            </div>
        
        `
        row.appendChild(col)

    });
})