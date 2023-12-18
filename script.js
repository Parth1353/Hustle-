const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
};

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
};

document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.querySelector(".pro-container");
  const products = Array.from(document.querySelectorAll(".pro"));

  
  const sortByPrice = (order) => {
    products.sort((a, b) => {
      const priceA = parseFloat(a.querySelector("h4").innerText.slice(1));
      const priceB = parseFloat(b.querySelector("h4").innerText.slice(1));

      if (order === "lowToHigh") {
        return priceA - priceB;
      } else if (order === "highToLow") {
        return priceB - priceA;
      }
    });

    
    productContainer.innerHTML = "";

    
    products.forEach((product) => {
      productContainer.appendChild(product);
    });
  };

 
  const sortPrices = () => {
    const sortOrderSelect = document.getElementById("sortOrder");
    const selectedOrder = sortOrderSelect.value;
    sortByPrice(selectedOrder);
  };

  
  document.getElementById("sortOrder").addEventListener("change", sortPrices);

  
  document.querySelector(".btne").addEventListener("click", () => {
    const sortOrderSelect = document.getElementById("sortOrder");
    const selectedOrder = sortOrderSelect.value;
    sortByPrice(selectedOrder);
  });
});
