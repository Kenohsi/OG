const createNav = () =>{
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `<div class = " nav " >
    <img src = "pictures/ordergreen.jpg" class = " logo " alt = " " >
    <div class ="nav-items">
        <div class = "search">
            <input type = "text" class="search-box" placeholder="search brand, product">
            <button class = "search-btn">Search</button>
            <form action="/logout?_method=DELETE" method="POST">
  <button class = "logout-btn" type="submit">Log Out</button>
</form>
        </div>
        <a href = "#"><img src ="pictures/cart.png" alt=""></a>
    </div>
    </div>
    <ul class ="links-container">
    <li class = "link-item"><a href="index.html" class="link">Shop</a></li>
         <li class = "link-item"><a href="main.html" class="link">About</a></li>
         <li class = "link-item"><a href="Order_Green_curency_convertor.html" class="link">Currency Converter</a></li>
         <li class = "link-item"><a href="FAQs.html" class="link">FAQs</a></li>

         <li class = "link-item"><a href="feedback.html" class="link">Contact Us!</a></li>
    </ul>`;
}

createNav();