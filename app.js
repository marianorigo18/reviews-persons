const products = [
    {
        id: 1,
        marca: "cambre",
        model: "bauhaus",
        img: "./imgs/bauhaus-green-doble-toma.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor obcaecati ipsum praesentium. Quidem dolorum fuga, nostrum harum dicta odit. Rem cumque libero nisi doloremque repudiandae optio ad veritatis !"
    },
    {
        id: 2,
        marca: "cambre",
        model: "bauhaus",
        img: "./imgs/bauhaus-madera-3p.jpg",
        info: "Lorem ipsum  sit amet consectetur adipisicing elit. Unde dolor obcaecati ipsum praesentium.  dolorum fuga, nostrum harum dicta odit. Rem cumque libero nisi doloremque repudiandae optio ad veritatis molestiae!"
    },
    {
        id: 3,
        marca: "cambre",
        model: "bauhaus",
        img: "./imgs/bauhaus-madera.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor obcaecati ipsum praesentium. Quidem dolorum fuga, nostrum harum dicta odit. Rem cumque libero nisi doloremque repudiandae optio veritatis molestiae!"
    },
    {
        id: 4,
        marca: "cambre",
        model: "bauhaus",
        img: "./imgs/bauhaus-orange-2p-1t.jpg",
        info: "Lorem ipsum dolor sit ametr adipisicing elit. Unde dolor obcaecati ipsum praesentium. Quidem dolorum fuga, nostrum harum dicta odit. Rem cumque libero nisi doloremque repudiandae optio ad veritatis molestiae!"
    },
    {
        id: 5,
        marca: "cambre",
        model: "bauhaus",
        img: "./imgs/bauhaus-red-2p-1t.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor obcaecati ipsum praesentium. Quidem dolorum fuga, nostrum harum dicta odit. Rem cumque libero nisi doloremque repudiandae optio ad  molestiae!"
    },
]
//capturar elementos
const personImg = document.querySelector('#person-img');
const marca = document.querySelector('#marca');
const model = document.querySelector('#model');
const info = document.querySelector('#info');
//capturar buttons
const randomBtn = document.querySelector('.random');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson()
})

function showPerson(){
    const item = products[currentItem];
    personImg.src = item.img;
    marca.textContent = item.marca;
    model.textContent = item.model;
    info.textContent = item.info;
}

//show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > products.length -1){
        currentItem = 0;
    }
    showPerson()
})

//show next person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = products.length - 1;
    }
    showPerson()
})

//random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random()* products.length);
    showPerson();
})