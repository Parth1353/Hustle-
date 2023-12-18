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

  // Updated function to handle "Add to Cart" button click
  const openModal = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling on the body
  };

  // Function to close the modal
  const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Restore scrolling on the body
  };

  // Event listener for the "Add to Cart" button
  products.forEach((product) => {
    product.querySelector(".cart").addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default behavior (scrolling to the top)
      openModal();
    });
  });

  // Your existing modal code
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  // Event listener to close the modal when the close button is clicked
  span.addEventListener("click", () => {
    closeModal();
  });

  // Event listener to close the modal when clicking outside the modal
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      closeModal();
    }
  });
});
