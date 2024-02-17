const user = {
    id:0, 
    login: '', 
    password: '', 
    email: '',
    products_list: [],
    isAuth: false
}

document.addEventListener("click", (event) => {
    event.preventDefault()
})




function renderRegistrationPage() {
    document.body.innerHTML = 
    `
        <header>
            <nav class="header-menu">
                <div id="headerLogo"></div>
                <ul class="header-buttons-list">

                </ul>
            </nav>
        </header>

        <main id="main">


        </main>


        <footer>
            <p>by. Badili</p>
        </footer>
    `
    const main = document.getElementById('main')
    const headerButtonsList = document.querySelector('.header-buttons-list')
    if(!user.isAuth) {
        headerButtonsList.innerHTML = 
        `
            <li>
                <button id="registrationButton" class="header-button">
                    Регистрация
                </button>
            </li>
            <li>
                <button id="loginButton" class="header-button">
                    Войти
                </button>
            </li>
        `
        const registrationButton = document.getElementById('registrationButton')
        registrationButton.addEventListener('click', renderRegistrationPage)
    
        const loginButton = document.getElementById('loginButton')
        loginButton.addEventListener('click', renderLoginPage)
    } else {
        headerButtonsList.innerHTML =
        `
            <li>
                <button id="logoutButton" class="header-button">
                    Выйти
                </button>
            </li>
            <li>
                <button id="cartButton" class="header-button">
                    Корзина
                </button>
            </li>
        `
    
        const logoutButton = document.getElementById('logoutButton')
        logoutButton.addEventListener('click', () => {
            user.isAuth = false
            renderHomePage()
        })
    
        const cartButton = document.getElementById('cartButton')
        cartButton.addEventListener('click', renderCartPage)
    }

    const headerLogo = document.getElementById('headerLogo')
    headerLogo.addEventListener('click', () => {
        renderHomePage()
    })

    main.innerHTML = `
        <form name="registration">
            <label>
                <p>Логин</p>
                <input type="text">
            </label>
            <label>
                <p>Email</p>
                <input type="email">
            </label>
            <label>
                <p>Пароль</p>
                <input type="password">
            </label>
            <label>
                <p>Повторите пароль</p>
                <input type="password">
            </label>

            <p id="errorsText"></p>

            <button id="registerButton">Зарегистрироваться</button>
        </form>
    `
    const errorsText = document.getElementById('errorsText')
    const registerButton = document.getElementById('registerButton')
    
    registerButton.addEventListener('click', () => {
        let form = document.forms.registration,
        login = form.elements[0].value,
        email = form.elements[1].value,
        password = form.elements[2].value,
        password2 = form.elements[3].value

        let regStatus = false
        users.forEach(element => {
            if(element.login === login) {
                errorsText.innerText = 'Логин уже занят!'
                regStatus = false
            } else {
                regStatus = true
            }
        });
        if(regStatus) {
            if(password !== password2) {
                errorsText.innerText = 'Пароли не совпадают!'
            } else if (password.length < 8) {
                errorsText.innerText = 'Пароль должен содержать 8 символов!'
            } else {
                users.push({id: users.length - 1, login, password, email, products_list:[]})
                renderHomePage()
            }
        }
    })
}



function renderLoginPage() {
    document.body.innerHTML = 
    `
        <header>
            <nav class="header-menu">
                <div id="headerLogo"></div>
                <ul class="header-buttons-list">

                </ul>
            </nav>
        </header>

        <main id="main">


        </main>


        <footer>
            <p>by. Badili</p>
        </footer>
    `
    const main = document.getElementById('main')
    const headerButtonsList = document.querySelector('.header-buttons-list')
    if(!user.isAuth) {
        headerButtonsList.innerHTML = 
        `
            <li>
                <button id="registrationButton" class="header-button">
                    Регистрация
                </button>
            </li>
            <li>
                <button id="loginButton" class="header-button">
                    Войти
                </button>
            </li>
        `
        const registrationButton = document.getElementById('registrationButton')
        registrationButton.addEventListener('click', renderRegistrationPage)
    
        const loginButton = document.getElementById('loginButton')
        loginButton.addEventListener('click', renderLoginPage)
    } else {
        headerButtonsList.innerHTML =
        `
            <li>
                <button id="logoutButton" class="header-button">
                    Выйти
                </button>
            </li>
            <li>
                <button id="cartButton" class="header-button">
                    Корзина
                </button>
            </li>
        `
    
        const logoutButton = document.getElementById('logoutButton')
        logoutButton.addEventListener('click', () => {
            user.isAuth = false
            renderHomePage()
        })
    
        const cartButton = document.getElementById('cartButton')
        cartButton.addEventListener('click', renderCartPage)
    }

    const headerLogo = document.getElementById('headerLogo')
    headerLogo.addEventListener('click', () => {
        renderHomePage()
    })
    main.innerHTML = `
        <form name="login">
            <label>
                <p>Логин</p>
                <input type="text">
            </label>
            <label>
                <p>Пароль</p>
                <input type="password">
            </label>

            <p id="errorsText"></p>

            <button id="loginFormButton">Войти</button>
        </form>
    `
    const errorsText = document.getElementById('errorsText')
    const loginFormButton = document.getElementById('loginFormButton')
    
    loginFormButton.addEventListener('click', () => {
        let form = document.forms.login,
        login = form.elements[0].value,
        password = form.elements[1].value

        users.forEach(element => {
            if(element.login === login && element.password === password) {
                user.isAuth = true
                user.login = element.login
                user.password = element.password
                user.email = element.email
                user.products_list = element.products_list
                user.id = element.id
                renderHomePage()
            } else {
                errorsText.innerText = 'Неверный логин или пароль!'
            }
        });
    })
}


function renderCartPage() {
    document.body.innerHTML = 
    `
        <header>
            <nav class="header-menu">
                <div id="headerLogo"></div>
                <ul class="header-buttons-list">

                </ul>
            </nav>
        </header>

        <main id="main">


        </main>


        <footer>
            <p>by. Badili</p>
        </footer>
    `
    const main = document.getElementById('main')
    const headerButtonsList = document.querySelector('.header-buttons-list')
    if(!user.isAuth) {
        headerButtonsList.innerHTML = 
        `
            <li>
                <button id="registrationButton" class="header-button">
                    Регистрация
                </button>
            </li>
            <li>
                <button id="loginButton" class="header-button">
                    Войти
                </button>
            </li>
        `
        const registrationButton = document.getElementById('registrationButton')
        registrationButton.addEventListener('click', renderRegistrationPage)
    
        const loginButton = document.getElementById('loginButton')
        loginButton.addEventListener('click', renderLoginPage)
    } else {
        headerButtonsList.innerHTML =
        `
            <li>
                <button id="logoutButton" class="header-button">
                    Выйти
                </button>
            </li>
            <li>
                <button id="cartButton" class="header-button">
                    Корзина
                </button>
            </li>
        `
    
        const logoutButton = document.getElementById('logoutButton')
        logoutButton.addEventListener('click', () => {
            user.isAuth = false
            renderHomePage()
        })
    
        const cartButton = document.getElementById('cartButton')
        cartButton.addEventListener('click', renderCartPage)
    }

    const headerLogo = document.getElementById('headerLogo')
    headerLogo.addEventListener('click', () => {
        renderHomePage()
    })
    main.innerHTML = 
    `
        <ul id="productsList">
            
        </ul>

    `

    const productsList = document.getElementById('productsList')
    
    for(let i = 0; i < user.products_list.length; i++ ) {
        const product = document.createElement('li')
        product.id = 'product'

        const productTitle = document.createElement('p')
        productTitle.id = 'productTitle'
        productTitle.innerText = user.products_list[i].title

        const productDesc = document.createElement('p')
        productDesc.id = 'productDesc'
        productDesc.innerText = user.products_list[i].description

        const productPrice = document.createElement('p')
        productPrice.id = 'productPrice'
        productPrice.innerText = user.products_list[i].price

        const deleteProduct = document.createElement('deleteProduct')
        deleteProduct.id = 'deleteProduct'
        deleteProduct.innerText = 'Убрать'

        deleteProduct.addEventListener('click', () => {
            productsList.removeChild(product)
            user.products_list.splice(i, 1)
        })
        
        product.appendChild(productTitle)
        product.appendChild(productDesc)
        product.appendChild(productPrice)
        product.appendChild(deleteProduct)
        productsList.appendChild(product)
    }

}









function renderHomePage() {
    document.body.innerHTML = 
    `
        <header>
            <nav class="header-menu">
                <div id="headerLogo"></div>
                <ul class="header-buttons-list">

                </ul>
            </nav>
        </header>

        <main id="main">


        </main>


        <footer>
            <p>by. Badili</p>
        </footer>
    `
    const headerButtonsList = document.querySelector('.header-buttons-list')
    if(!user.isAuth) {
        headerButtonsList.innerHTML = 
        `
            <li>
                <button id="registrationButton" class="header-button">
                    Регистрация
                </button>
            </li>
            <li>
                <button id="loginButton" class="header-button">
                    Войти
                </button>
            </li>
        `
        const registrationButton = document.getElementById('registrationButton')
        registrationButton.addEventListener('click', renderRegistrationPage)
    
        const loginButton = document.getElementById('loginButton')
        loginButton.addEventListener('click', renderLoginPage)
    } else {
        headerButtonsList.innerHTML =
        `
            <li>
                <button id="logoutButton" class="header-button">
                    Выйти
                </button>
            </li>
            <li>
                <button id="cartButton" class="header-button">
                    Корзина
                </button>
            </li>
        `
    
        const logoutButton = document.getElementById('logoutButton')
        logoutButton.addEventListener('click', () => {
            user.isAuth = false
            renderHomePage()
        })
    
        const cartButton = document.getElementById('cartButton')
        cartButton.addEventListener('click', renderCartPage)
    }

    const headerLogo = document.getElementById('headerLogo')
    headerLogo.addEventListener('click', () => {
        renderHomePage()
    })
    main.innerHTML = `
        <ul id="productsList">
        
        </ul>
    `
    

    const productsList = document.getElementById('productsList')
    
    for(let i = 0; i < products.length; i++ ) {
        const product = document.createElement('li')
        product.id = 'product'

        const productTitle = document.createElement('p')
        productTitle.id = 'productTitle'
        productTitle.innerText = products[i].title

        const productDesc = document.createElement('p')
        productDesc.id = 'productDesc'
        productDesc.innerText = products[i].description

        const productPrice = document.createElement('p')
        productPrice.id = 'productPrice'
        productPrice.innerText = products[i].price


        product.appendChild(productTitle)
        product.appendChild(productDesc)
        product.appendChild(productPrice)
        if(user.isAuth) {
            const addInCartButton = document.createElement('addInCartButton')
            addInCartButton.id = 'addInCartButton'
            addInCartButton.innerText = 'В корзину'

            addInCartButton.addEventListener('click', () => {
                user.products_list.push(
                    {
                        id: products[i].id,
                        title: products[i].title,
                        description: products[i].description,
                        price: products[i].price,
                    }
                )
            })
            product.appendChild(addInCartButton)
        }
        productsList.appendChild(product)
    }
}

renderHomePage()


