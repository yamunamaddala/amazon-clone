
document.addEventListener("DOMContentLoaded", function () {
  
    const backToTopButton = document.querySelector('.foot-panel1');
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    const cartElement = document.querySelector('.cart');
    let cartCount = 0; 
  

    cartElement.addEventListener('click', function () {
      cartCount++;
      updateCartCount(cartCount);
    });
  
    function updateCartCount(count) {
   
      cartElement.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${count})`;
    }
  
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
  
    searchIcon.addEventListener('click', function () {
      const searchValue = searchInput.value.trim();
      if (searchValue !== "") {
       
        alert(`Searching for: ${searchValue}`);
        searchInput.value = ''; 
      }
    });
  
    const allMenu = document.querySelector('.All');
    allMenu.addEventListener('mouseenter', () => {
      allMenu.style.backgroundColor = 'orange';
    });
  
    allMenu.addEventListener('mouseleave', () => {
      allMenu.style.backgroundColor = ''; 
    });
  
    /
    const seeMoreLinks = document.querySelectorAll('.box-content a');
    
    seeMoreLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const category = this.parentElement.querySelector('h2').innerText;
        alert(`Redirecting to more items in the ${category} section`);
       
      });
    });
  

    const footerLinks = document.querySelectorAll('.foot-panel2 a');
    
    footerLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        alert(`You clicked on: ${this.innerText}`);
       
      });
    });
  });
  