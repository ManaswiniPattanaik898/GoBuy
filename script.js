document.addEventListener("DOMContentLoaded", () => {

    const searchButton = document.querySelector(".search-bar button");
    const searchInput = document.querySelector(".search-bar input");
  
    searchButton.addEventListener("click", () => {
      const searchQuery = searchInput.value.trim();
      if (searchQuery) {
        alert(`Searching for: ${searchQuery}`);
      } else {
        alert("Please enter a search term.");
      }
    });
  
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    addToCartButtons.forEach(button => {
      button.addEventListener("click", () => {
        button.innerText = "Added to Cart!";
        button.style.backgroundColor = "#4CAF50"; 
        setTimeout(() => {
          button.innerText = "Add to Cart";
          button.style.backgroundColor = "#f90"; 
        }, 2000); 
      });
    });
  
});