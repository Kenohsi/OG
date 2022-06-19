

const submitBtn = document.querySelector('.submit-btn') ;
const name = document.querySelector ('#name' ) ;
const email = document.querySelector('#email');
const password = document.querySelector ('#password');




//submit form
submitBtn.addEventListener('click',()=>{
sendData('/signup',{
    name: name.value,
    email: email.value,
    password: password.value,

})
}
)



// send data funktion
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'aplication/json' }),
        body: JSON.stringify(data)
}).then((res) => res.json())
    .then(response => {
        console.log(response)
    })
}