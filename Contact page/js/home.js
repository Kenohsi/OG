
const createNav = () =>{
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `<div class = " nav " >
    <img src = "ordergreen.jpg" class = " logo " alt = " " >
    <div class ="nav-items">
        <div class = "search">
            <input type = "text" class="search-box" placeholder="search brand, product">
            <button class = "search-btn">Search</button>
        </div>
        <a href = "#"><img src=cart.png alt=""></a>
    </div>
</div>
    <ul class ="links-container">
         <li class = "link-item"><a href="#" class="link">About</a></li>
         <li class = "link-item"><a href="#" class="link">Fruits</a></li>
         <li class = "link-item"><a href="#" class="link">Vegetables</a></li>
         <li class = "link-item"><a href="FAQs.html" class="link">FAQs</a></li>
         <li class = "link-item"><a href="feedback.html" class="link">Contact Us!</a></li>
    </ul>`;
}

createNav();



const productContainers = [...document.querySelectorAll('.product-container')];
const nextButton = [...document.querySelectorAll('.next-button')];
const previousButton = [...document.querySelectorAll('.previous-button')];

productContainers.forEach((item,i)=>{
let containerDimenstions = item.getBoundingClientRect();
let containerWidth = containerDimenstions.width;

nextButton[i].addEventListener('click',()=>{
item.scrollLeft += containerWidth ;
})
previousButton[i].addEventListener ('click',()=> {
item.scrollLeft -= containerWidth;
})
})