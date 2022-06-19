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

