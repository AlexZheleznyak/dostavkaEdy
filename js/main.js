const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')
const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')


const login = (user) => {
    buttonAuth.style.display = 'none'

    buttonOut.style.display = 'flex'
    userName.style.display = 'flex'

    userName.textContent = user.login
    modalAuth.style.display = 'none'
}

const logout = () => {
    buttonAuth.style.display = 'flex'

    buttonOut.style.display = 'none'
    userName.style.display = 'none'
    userName.textContent = ''

    localStorage.removeItem('user')
}

//modalAuth.style.color = 'red'

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
})

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none'
})

buttonOut.addEventListener('click', () => {
    logout()
})

logInForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }

    localStorage.setItem('user', JSON.stringify(user))
    login(user);
})

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}

//console.log(modalAuth);

//const counter = (a, b) => {
//    return a + b
//}

//console.log(counter(2, 3));
//console.log(counter(6, 8));
//console.log(counter(5, 7));


//function sayMeow() {
//    console.log('Meow');
//}

//const sayMeow = function () {    //-анонимная функция (функция, кот. не имеет своего собственного имени)
//    console.log('Meow');         //-тип function expression
//}

//const sayMeow = () => {            //-стрелочная функция
//    console.log('Meow');           //-тип function expression
//}

//sayMeow()

//const obj = {
//    name: 'Alex',                                  //- св-во хранит обычное значение, метод хранит функцию
//    age: 34,
//    sayHello: function () {                        //-функция, кот находится в значении какого-то св-ва, называется метод
//        console.log('Hello, my name is Alex');     //- метод - это та же самая функция, которая находится и принадлежит объекту
//    }                                              //- метод и функция - это одно и то же, но метод принадлежит объекту
//}

//console.log(obj.name);
//console.log(obj.age);
//obj.sayHello();

//const arr = [1, 2, 3, 4, 5]

//console.log(arr[1]);   //-в консоле будет цифра 2

