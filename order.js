/* =========================================================
   BHOLA COLD DRINKS — CUSTOMER STORE JS
========================================================= */


/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [

{
    id:1,
    name:"Maaza 600 ML",
    price:60,
    category:"Juices",
    img:"https://i.pinimg.com/736x/36/bc/37/36bc37117b5b23f540ba6083c1a25c4a.jpg"
},

{
    id:2,
    name:"Frooti 125 ML",
    price:10,
    category:"Juices",
    img:"https://i.pinimg.com/736x/02/9d/2a/029d2a5b46ee80b4c833642a26617ea7.jpg"
},

{
    id:3,
    name:"Maaza 150 ML",
    price:10,
    category:"Juices",
    img:"https://i.pinimg.com/736x/23/44/de/2344de5580d6ba7b503c8752bb8233b3.jpg"
},

{
    id:4,
    name:"Sprite 355 ML",
    price:20,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/736x/0f/3f/0c/0f3f0ca59bf74ea76d1bdd725ea2e251.jpg"
},

{
    id:5,
    name:"Cola 355 ML",
    price:20,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/1200x/53/99/33/53993397d30ff8eb80ab614b577b2f5e.jpg"
},

{
    id:6,
    name:"Fanta 355 ML",
    price:20,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/1200x/fc/af/27/fcaf271f01117eefebed74490359cd9d.jpg"
},

{
    id:7,
    name:"Fanta Grape 350 ML",
    price:25,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/736x/b9/15/5c/b9155ca96a8f93963887b91d0be0d1fe.jpg"
},

{
    id:8,
    name:"Pepsi 350 ML",
    price:20,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/736x/23/22/ef/2322efde1d0b81b9bd6938a294ad46db.jpg"
},

{
    id:9,
    name:"Mirinda 350 ML",
    price:20,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/1200x/96/2a/63/962a630c2bf60f48cf5172fd23967f99.jpg"
},

{
    id:10,
    name:"7up 350 ML",
    price:20,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/1200x/70/b5/9c/70b59cea2b205773444c43fba5e0f5c2.jpg"
},

{
    id:11,
    name:"Pineapple 330 ML",
    price:20,
    category:"Juices",
    img:"https://i.pinimg.com/736x/87/7e/6b/877e6bd7dbaa9e3778dc50da490aabbd.jpg"
},

{
    id:12,
    name:"Strawberry 330 ML",
    price:20,
    category:"Juices",
    img:"https://i.pinimg.com/736x/cd/d9/0f/cdd90fa98c1bab5973d355319a38f936.jpg"
},

{
    id:13,
    name:"Sting 330 ML",
    price:20,
    category:"Energy",
    img:"https://i.pinimg.com/1200x/33/07/77/33077799c57138265c32f27fa1822c7e.jpg"
},

{
    id:14,
    name:"Redbull 250 ML",
    price:20,
    category:"Energy",
    img:"https://i.pinimg.com/1200x/f9/68/e3/f968e3a1d474e1c19a91b508231a88c8.jpg"
},

{
    id:15,
    name:"Sprite 750 ML",
    price:50,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/736x/22/12/4f/22124f3a800b39e0f3a5fe549875db55.jpg"
},

{
    id:16,
    name:"Dew 750 ML",
    price:50,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/736x/bc/0b/c0/bc0bc0f6c974a030037f51aacdfe9417.jpg"
},

{
    id:17,
    name:"Cola 750 ML",
    price:50,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/1200x/c5/60/3c/c5603c2073ab5af1028ea7017265ac82.jpg"
},

{
    id:18,
    name:"Limka 750 ML",
    price:50,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/736x/1c/18/44/1c1844edf8aeaaf0e7804af733312069.jpg"
},

{
    id:19,
    name:"Dew 300 ML",
    price:22,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/736x/67/ff/af/67ffaf8cbc654b175a1f2dc34e9d0d79.jpg"
},

{
    id:20,
    name:"Pepsi 300 ML",
    price:22,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/736x/e1/86/58/e186580cc54176f4dc53e052bd459588.jpg"
},

{
    id:21,
    name:"Fanta 300 ML",
    price:22,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/1200x/4a/b4/da/4ab4dac46078c9ac507b1b63cf4c3fa6.jpg"
},

{
    id:22,
    name:"Coca Cola 300 ML",
    price:22,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/1200x/3d/5d/1c/3d5d1cb902e9bd8c2577b990968c63a8.jpg"
},

{
    id:23,
    name:"Bisleri",
    price:20,
    category:"Water",
    img:"https://i.pinimg.com/1200x/9c/98/75/9c9875ffd812ef7ed4aab9b84d98acba.jpg"
},

{
    id:24,
    name:"Param Milk",
    price:20,
    category:"Dairy",
    img:"https://i.pinimg.com/1200x/05/b7/e3/05b7e30e6bfebb4d78c4b8cd8dafea63.jpg"
},

{
    id:25,
    name:"Lassi",
    price:20,
    category:"Dairy",
    img:"https://i.pinimg.com/1200x/66/17/f6/6617f68430cc396bfeb8cfa4ecce1f26.jpg"
},

{
    id:26,
    name:"Litchi Lassi",
    price:30,
    category:"Dairy",
    img:"https://i.pinimg.com/1200x/29/6f/db/296fdb211f932816f2cb9d4d9d4b732f.jpg"
},

{
    id:27,
    name:"Mango Lassi",
    price:30,
    category:"Dairy",
    img:"https://i.pinimg.com/1200x/8e/67/51/8e6751f474c575e0ce92330fddad393c.jpg"
},

{
    id:28,
    name:"Sprite 2L",
    price:95,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/1200x/67/70/ff/6770ffd0c88c134e86c1dc3e3e584f3c.jpg"
},

{
    id:29,
    name:"Pepsi 2L",
    price:95,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/736x/80/01/a5/8001a5ed6473e5b59f9ff8c981ccc23e.jpg"
},

{
    id:30,
    name:"Fanta 2L",
    price:95,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/736x/67/00/e5/6700e50d03bc22f4221420f3dd57ec1c.jpg"
},

{
    id:31,
    name:"Dew 2L",
    price:95,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/1200x/2e/fd/c7/2efdc7b841225f1614c505545c339920.jpg"
},

{
    id:32,
    name:"Thumsup 2L",
    price:95,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/1200x/a6/9c/df/a69cdf9732cb9f305b524695be3c3784.jpg"
},

{
    id:33,
    name:"Coca Cola 2L",
    price:95,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/1200x/9c/d6/f7/9cd6f72abc183cbe61528703d20ad2d0.jpg"
},

{
    id:34,
    name:"Mirinda 2L",
    price:95,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/736x/04/11/b1/0411b112c0d86317a0d98634daf617c8.jpg"
},

{
    id:35,
    name:"Frooti 2L",
    price:100,
    category:"Juices",
    img:"https://i.pinimg.com/736x/cb/6b/95/cb6b95585dadc5803d6a6024112583d7.jpg"
},

{
    id:36,
    name:"Orange Juice",
    price:50,
    category:"Juices",
    img:"https://i.pinimg.com/1200x/c9/41/19/c941196f61d17f81ffa61126e8336dfc.jpg"
},

{
    id:37,
    name:"Real Juice",
    price:80,
    category:"Juices",
    img:"https://i.pinimg.com/736x/17/10/07/171007fe6e222c515fd132d758f26e5f.jpg"
},

{
    id:38,
    name:"Dew 400 ML",
    price:20,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/736x/72/98/6a/72986a712ae3625831c2a8741e59be4f.jpg"
},

{
    id:39,
    name:"Sprite 400 ML",
    price:20,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/1200x/ce/a1/7a/cea17ace40dca9bbb1451fcc7146048a.jpg"
},

{
    id:40,
    name:"Thumsup 400 ML",
    price:20,
    category:"Soft Drinks",
    img:"https://i.pinimg.com/736x/b9/cd/13/b9cd13acd3cfba24ecb84e12ddb3347b.jpg"
}

];


/* =========================================================
   STATE
========================================================= */

let cart =
    JSON.parse(
        localStorage.getItem("bholaCart")
    ) || {};

let currentFilter = "All";

let searchValue = "";

let toastTimer = null;


/* =========================================================
   HELPERS
========================================================= */

const $ = id =>
    document.getElementById(id);


function money(value){

    return "₹" +
        Number(value).toLocaleString("en-IN");

}


function escapeHTML(value){

    return String(value).replace(
        /[&<>"']/g,
        char => ({

            "&":"&amp;",
            "<":"&lt;",
            ">":"&gt;",
            '"':"&quot;",
            "'":"&#039;"

        }[char])
    );

}


function saveCart(){

    localStorage.setItem(
        "bholaCart",
        JSON.stringify(cart)
    );

}


function cartQuantity(){

    return Object.values(cart)
        .reduce(
            (sum,item) =>
                sum + item.qty,
            0
        );

}


function cartSubtotal(){

    return Object.entries(cart)
        .reduce(
            (sum,[id,item]) =>
                sum +
                getProduct(Number(id)).price *
                item.qty,
            0
        );

}


function getProduct(id){

    return products.find(
        p => p.id === id
    );

}


/* =========================================================
   PRODUCT RENDER
========================================================= */

function renderProducts(){

    const grid =
        $("productGrid");

    let list =
        [...products];

    const query =
        searchValue
            .trim()
            .toLowerCase();


    if(currentFilter !== "All"){

        list =
            list.filter(
                p =>
                    p.category === currentFilter
            );

    }


    if(query){

        list =
            list.filter(
                p =>
                    p.name
                        .toLowerCase()
                        .includes(query)
            );

    }


    const sort =
        $("sortProducts").value;


    if(sort === "low"){

        list.sort(
            (a,b) =>
                a.price - b.price
        );

    }


    if(sort === "high"){

        list.sort(
            (a,b) =>
                b.price - a.price
        );

    }


    if(sort === "name"){

        list.sort(
            (a,b) =>
                a.name.localeCompare(b.name)
        );

    }


    grid.innerHTML = "";


    if(!list.length){

        $("emptyProducts")
            .classList.add("show");

        return;

    }


    $("emptyProducts")
        .classList.remove("show");


    list.forEach(
        (product,index) => {

            const quantity =
                cart[product.id]?.qty || 0;


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card";


            card.style.animationDelay =
                Math.min(
                    index * 35,
                    300
                ) + "ms";


            card.innerHTML = `

                <div class="product-image">

                    ${
                        product.price <= 20
                        ?
                        `<span class="product-badge">
                            Popular
                        </span>`
                        :
                        ""
                    }

                    <button
                        class="product-heart"
                        data-heart="${product.id}"
                        aria-label="Wishlist"
                    >
                        <i class="fa-regular fa-heart"></i>
                    </button>

                    <img
                        src="${product.img}"
                        alt="${escapeHTML(product.name)}"
                        loading="lazy"
                        onerror="this.style.opacity='.3'"
                    >

                </div>

                <div class="product-content">

                    <span class="product-category">
                        ${escapeHTML(product.category)}
                    </span>

                    <h3 class="product-name">
                        ${escapeHTML(product.name)}
                    </h3>

                    <div class="product-bottom">

                        <strong class="product-price">
                            ${money(product.price)}
                        </strong>

                        ${
                            quantity
                            ?
                            `
                            <div class="product-quantity">

                                <button
                                    data-minus="${product.id}"
                                    aria-label="Decrease"
                                >
                                    <i class="fa-solid fa-minus"></i>
                                </button>

                                <span>
                                    ${quantity}
                                </span>

                                <button
                                    data-plus="${product.id}"
                                    aria-label="Increase"
                                >
                                    <i class="fa-solid fa-plus"></i>
                                </button>

                            </div>
                            `
                            :
                            `
                            <button
                                class="add-product"
                                data-add="${product.id}"
                                aria-label="Add to cart"
                            >
                                <i class="fa-solid fa-plus"></i>
                            </button>
                            `
                        }

                    </div>

                </div>
            `;


            grid.appendChild(card);

        }
    );

}


/* =========================================================
   CART
========================================================= */

function addToCart(id){

    if(cart[id]){

        cart[id].qty++;

    }
    else{

        cart[id] = {
            qty:1
        };

    }


    saveCart();

    renderProducts();

    renderCart();


    showToast(
        getProduct(id).name +
        " added to cart"
    );

}


function decreaseCart(id){

    if(!cart[id])
        return;


    cart[id].qty--;


    if(cart[id].qty <= 0){

        delete cart[id];

    }


    saveCart();

    renderProducts();

    renderCart();

}


function removeCart(id){

    if(!cart[id])
        return;


    const name =
        getProduct(id).name;


    delete cart[id];


    saveCart();

    renderProducts();

    renderCart();


    showToast(
        name +
        " removed from cart"
    );

}


function renderCart(){

    const container =
        $("cartItems");

    const ids =
        Object.keys(cart);


    $("cartCount").textContent =
        cartQuantity();


    $("drawerItemCount").textContent =
        cartQuantity() +
        (
            cartQuantity() === 1
            ? " item"
            : " items"
        );


    if(!ids.length){

        container.innerHTML = "";

        $("emptyCart").style.display =
            "flex";

        $("cartSummary").style.display =
            "none";

        return;

    }


    $("emptyCart").style.display =
        "none";

    $("cartSummary").style.display =
        "block";


    container.innerHTML = "";


    ids.forEach(
        id => {

            const product =
                getProduct(Number(id));


            const qty =
                cart[id].qty;


            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "cart-item";


            row.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${product.img}"
                        alt="${escapeHTML(product.name)}"
                    >

                </div>

                <div class="cart-item-info">

                    <strong>
                        ${escapeHTML(product.name)}
                    </strong>

                    <span>
                        ${escapeHTML(product.category)}
                    </span>

                    <div class="cart-item-price">
                        ${money(product.price * qty)}
                    </div>

                    <div class="cart-qty">

                        <button
                            data-cart-minus="${product.id}"
                        >
                            <i class="fa-solid fa-minus"></i>
                        </button>

                        <span>
                            ${qty}
                        </span>

                        <button
                            data-cart-plus="${product.id}"
                        >
                            <i class="fa-solid fa-plus"></i>
                        </button>

                    </div>

                </div>

                <button
                    class="cart-remove"
                    data-remove="${product.id}"
                    aria-label="Remove"
                >
                    <i class="fa-solid fa-trash-can"></i>
                </button>

            `;


            container.appendChild(row);

        }
    );


    const subtotal =
        cartSubtotal();


    $("cartSubtotal").textContent =
        money(subtotal);


    $("cartDelivery").textContent =
        money(0);


    $("cartTotal").textContent =
        money(subtotal);

}


/* =========================================================
   CART DRAWER
========================================================= */

function openCart(){

    $("cartDrawer")
        .classList.add("open");

    $("drawerBackdrop")
        .classList.add("show");

    document.body
        .classList.add("no-scroll");

}


function closeCart(){

    $("cartDrawer")
        .classList.remove("open");

    $("drawerBackdrop")
        .classList.remove("show");

    document.body
        .classList.remove("no-scroll");

}


/* =========================================================
   ACCOUNT SYSTEM
========================================================= */

function getUsers(){

    return JSON.parse(
        localStorage.getItem("bholaUsers")
    ) || [];

}


function saveUsers(users){

    localStorage.setItem(
        "bholaUsers",
        JSON.stringify(users)
    );

}


function getCurrentUser(){

    return JSON.parse(
        localStorage.getItem(
            "bholaCurrentUser"
        )
    );

}


function setCurrentUser(user){

    localStorage.setItem(
        "bholaCurrentUser",
        JSON.stringify(user)
    );

}


/* =========================================================
   FORMSUBMIT — ACCOUNT EMAIL NOTIFICATION
   RELIABLE HIDDEN FORM METHOD
========================================================= */

function sendAccountNotification(
    activity,
    data = {}
){

    try{

        /* =========================================
           DEVICE / BROWSER DETAILS
        ========================================= */

        const ua =
            navigator.userAgent;


        let browser =
            "Unknown Browser";


        if(/Edg\//i.test(ua)){

            browser =
                "Microsoft Edge";

        }
        else if(/Chrome\//i.test(ua)){

            browser =
                "Google Chrome";

        }
        else if(/Firefox\//i.test(ua)){

            browser =
                "Mozilla Firefox";

        }
        else if(
            /Safari\//i.test(ua) &&
            !/Chrome\//i.test(ua)
        ){

            browser =
                "Safari";

        }


        let platform =
            "Unknown";


        if(/Windows/i.test(ua)){

            platform =
                "Windows";

        }
        else if(/Android/i.test(ua)){

            platform =
                "Android";

        }
        else if(/iPhone/i.test(ua)){

            platform =
                "iPhone";

        }
        else if(/iPad/i.test(ua)){

            platform =
                "iPad";

        }
        else if(/Mac OS X/i.test(ua)){

            platform =
                "macOS";

        }
        else if(/Linux/i.test(ua)){

            platform =
                "Linux";

        }


        const isMobile =
            /Mobi|Android|iPhone|iPad/i.test(
                ua
            );


        const deviceType =
            isMobile
            ? "Mobile / Tablet"
            : "Desktop / Laptop";


        /* =========================================
           HIDDEN IFRAME
        ========================================= */

        const iframeName =
            "bholaFormSubmit_" +
            Date.now();


        const iframe =
            document.createElement(
                "iframe"
            );


        iframe.name =
            iframeName;


        iframe.style.display =
            "none";


        document.body.appendChild(
            iframe
        );


        /* =========================================
           FORM
        ========================================= */

        const form =
            document.createElement(
                "form"
            );


        form.method =
            "POST";


        form.action =
            "https://formsubmit.co/ydvaman2326@gmail.com";


        form.target =
            iframeName;


        form.style.display =
            "none";


        /* =========================================
           HELPER
        ========================================= */

        function addField(
            name,
            value
        ){

            const input =
                document.createElement(
                    "input"
                );


            input.type =
                "hidden";


            input.name =
                name;


            input.value =
                value == null
                ? ""
                : String(value);


            form.appendChild(
                input
            );

        }


        /* =========================================
           FORMSUBMIT SETTINGS
        ========================================= */

        addField(
            "_subject",
            "Bhola Cold Drinks — " +
            activity
        );


        addField(
            "_template",
            "table"
        );


        addField(
            "_captcha",
            "false"
        );


        /* =========================================
           ACTIVITY
        ========================================= */

        addField(
            "Activity",
            activity
        );


        /* =========================================
           CUSTOMER
        ========================================= */

        addField(
            "Customer Name",
            data.name ||
            "Not provided"
        );


        addField(
            "Mobile Number",
            data.mobile ||
            "Not provided"
        );


        /* =========================================
           WEBSITE
        ========================================= */

        addField(
            "Website",
            "Bhola Cold Drinks"
        );


        /* =========================================
           DATE & TIME
        ========================================= */

        addField(
            "Date & Time",
            new Date().toLocaleString(
                "en-IN",
                {
                    dateStyle:"medium",
                    timeStyle:"medium"
                }
            )
        );


        /* =========================================
           DEVICE
        ========================================= */

        addField(
            "Device",
            browser +
            " • " +
            platform
        );


        /* =========================================
           DEVICE TYPE
        ========================================= */

        addField(
            "Device Type",
            deviceType
        );


        /* =========================================
           SCREEN
        ========================================= */

        addField(
            "Screen",
            window.screen.width +
            " × " +
            window.screen.height
        );


        /* =========================================
           LANGUAGE
        ========================================= */

        addField(
            "Language",
            navigator.language ||
            "Unknown"
        );


        /* =========================================
           SUBMIT
        ========================================= */

        document.body.appendChild(
            form
        );


        form.submit();


        /* =========================================
           CLEANUP
        ========================================= */

        setTimeout(
            () => {

                form.remove();

                iframe.remove();

            },
            8000
        );

    }
    catch(error){

        console.warn(
            "FormSubmit notification error:",
            error
        );

    }

}


function logoutUser(){

    localStorage.removeItem(
        "bholaCurrentUser"
    );


    updateAccountUI();

    closeAccountModal();


    showToast(
        "You have been logged out"
    );

}


function updateAccountUI(){

    const user =
        getCurrentUser();


    const accountText =
        $("accountText");


    if(user){

        accountText.textContent =
            user.name.split(" ")[0];

    }
    else{

        accountText.textContent =
            "Login";

    }

}


/* =========================================================
   ACCOUNT MODAL
========================================================= */

function openAccountModal(){

    const user =
        getCurrentUser();


    if(user){

        $("loginForm")
            .classList.add("hidden");

        $("signupForm")
            .classList.add("hidden");

        $("profilePanel")
            .classList.remove("hidden");


        $("accountEyebrow")
            .textContent =
            "YOUR ACCOUNT";


        $("accountTitle")
            .textContent =
            "Welcome back";


        $("accountSubtitle")
            .textContent =
            "Manage your account and orders.";


        $("profileName")
            .textContent =
            user.name;


        $("profileMobile")
            .textContent =
            "+91 " +
            user.mobile;


        $("profileAvatar")
            .textContent =
            user.name
                .charAt(0)
                .toUpperCase();

    }
    else{

        showLoginForm();

    }


    $("accountModal")
        .classList.add("open");


    document.body
        .classList.add("no-scroll");

}


function closeAccountModal(){

    $("accountModal")
        .classList.remove("open");


    document.body
        .classList.remove("no-scroll");

}


function showLoginForm(){

    $("loginForm")
        .classList.remove("hidden");

    $("signupForm")
        .classList.add("hidden");

    $("profilePanel")
        .classList.add("hidden");


    $("accountEyebrow")
        .textContent =
        "WELCOME BACK";


    $("accountTitle")
        .textContent =
        "Sign in to your account";


    $("accountSubtitle")
        .textContent =
        "Manage your orders and checkout faster.";

}


function showSignupForm(){

    $("loginForm")
        .classList.add("hidden");

    $("signupForm")
        .classList.remove("hidden");

    $("profilePanel")
        .classList.add("hidden");


    $("accountEyebrow")
        .textContent =
        "JOIN BHOLA";


    $("accountTitle")
        .textContent =
        "Create your account";


    $("accountSubtitle")
        .textContent =
        "Save your details and order faster.";

}


/* =========================================================
   LOGIN
========================================================= */

$("loginForm").addEventListener(
    "submit",
    function(event){

        event.preventDefault();


        const mobile =
            $("loginMobile")
                .value
                .trim();


        const password =
            $("loginPassword")
                .value;


        if(!/^\d{10}$/.test(mobile)){

            showToast(
                "Enter a valid 10-digit mobile number",
                true
            );

            return;

        }


        const users =
            getUsers();


        const user =
            users.find(
                item =>
                    item.mobile === mobile
            );


        if(!user){

            showToast(
                "Account not found. Please create an account.",
                true
            );

            return;

        }


        if(user.password !== password){

            showToast(
                "Incorrect password",
                true
            );

            return;

        }


        setCurrentUser({

            name:user.name,

            mobile:user.mobile

        });


        /* =========================================
           FORMSUBMIT — LOGIN
        ========================================= */

        sendAccountNotification(
            "Customer Login",
            {
                name:user.name,
                mobile:user.mobile
            }
        );


        updateAccountUI();

        closeAccountModal();


        showToast(
            "Welcome back, " +
            user.name.split(" ")[0]
        );


        $("loginForm")
            .reset();

    }
);


/* =========================================================
   SIGNUP
========================================================= */

$("signupForm").addEventListener(
    "submit",
    function(event){

        event.preventDefault();


        const name =
            $("signupName")
                .value
                .trim();


        const mobile =
            $("signupMobile")
                .value
                .trim();


        const password =
            $("signupPassword")
                .value;


        const confirm =
            $("signupConfirm")
                .value;


        if(name.length < 2){

            showToast(
                "Enter your full name",
                true
            );

            return;

        }


        if(!/^\d{10}$/.test(mobile)){

            showToast(
                "Enter a valid 10-digit mobile number",
                true
            );

            return;

        }


        if(password.length < 6){

            showToast(
                "Password must contain at least 6 characters",
                true
            );

            return;

        }


        if(password !== confirm){

            showToast(
                "Passwords do not match",
                true
            );

            return;

        }


        const users =
            getUsers();


        if(
            users.some(
                user =>
                    user.mobile === mobile
            )
        ){

            showToast(
                "An account already exists with this number",
                true
            );

            return;

        }


        users.push({

            name,

            mobile,

            password

        });


        saveUsers(users);


        setCurrentUser({

            name,

            mobile

        });


        /* =========================================
           FORMSUBMIT — NEW ACCOUNT
        ========================================= */

        sendAccountNotification(
            "New Customer Account",
            {
                name:name,
                mobile:mobile
            }
        );


        $("signupForm")
            .reset();


        updateAccountUI();

        closeAccountModal();


        showToast(
            "Account created successfully"
        );

    }
);


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout(){

    if(!cartQuantity()){

        showToast(
            "Add at least one product first",
            true
        );

        return;

    }


    const user =
        getCurrentUser();


    if(!user){

        closeCart();

        openAccountModal();


        showToast(
            "Please sign in before checkout"
        );

        return;

    }


    $("checkoutName").value =
        user.name;


    $("checkoutMobile").value =
        user.mobile;


    renderCheckout();


    $("checkoutModal")
        .classList.add("open");


    document.body
        .classList.add("no-scroll");

}


function renderCheckout(){

    const container =
        $("checkoutItems");


    container.innerHTML = "";


    Object.entries(cart).forEach(
        ([id,data]) => {

            const product =
                getProduct(Number(id));


            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "checkout-item";


            row.innerHTML = `

                <img
                    src="${product.img}"
                    alt="${escapeHTML(product.name)}"
                >

                <div>

                    <strong>
                        ${escapeHTML(product.name)}
                    </strong>

                    <span>
                        Qty: ${data.qty}
                    </span>

                </div>

                <b>
                    ${money(
                        product.price *
                        data.qty
                    )}
                </b>

            `;


            container.appendChild(row);

        }
    );


    $("checkoutCount")
        .textContent =
        cartQuantity() +
        (
            cartQuantity() === 1
            ? " item"
            : " items"
        );


    $("checkoutSubtotal")
        .textContent =
        money(cartSubtotal());


    $("checkoutTotal")
        .textContent =
        money(cartSubtotal());

}


function closeCheckout(){

    $("checkoutModal")
        .classList.remove("open");


    document.body
        .classList.remove("no-scroll");

}


/* =========================================================
   PLACE ORDER
========================================================= */

$("checkoutForm").addEventListener(
    "submit",
    function(event){

        event.preventDefault();


        const name =
            $("checkoutName")
                .value
                .trim();


        const mobile =
            $("checkoutMobile")
                .value
                .trim();


        const address =
            $("checkoutAddress")
                .value
                .trim();


        const landmark =
            $("checkoutLandmark")
                .value
                .trim();


        const payment =
            document.querySelector(
                'input[name="payment"]:checked'
            ).value;


        if(name.length < 2){

            showToast(
                "Enter your name",
                true
            );

            return;

        }


        if(!/^\d{10}$/.test(mobile)){

            showToast(
                "Enter a valid 10-digit mobile number",
                true
            );

            return;

        }


        if(address.length < 8){

            showToast(
                "Enter a complete delivery address",
                true
            );

            return;

        }


        const orderId =
            "BHD-" +
            Date.now()
                .toString()
                .slice(-8);


        const order = {

            id:orderId,

            date:new Date().toISOString(),

            customer:{

                name,

                mobile,

                address,

                landmark

            },

            payment,

            items:
                Object.entries(cart).map(
                    ([id,data]) => {

                        const product =
                            getProduct(
                                Number(id)
                            );


                        return {

                            id:product.id,

                            name:product.name,

                            price:product.price,

                            qty:data.qty,

                            img:product.img

                        };

                    }
                ),

            total:cartSubtotal(),

            status:"Order Confirmed"

        };


        saveOrder(order);


        $("successName")
            .textContent =
            name.split(" ")[0];


        $("successOrderId")
            .textContent =
            orderId;


        $("successTotal")
            .textContent =
            money(order.total);


        $("successPayment")
            .textContent =
            payment;


        cart = {};

        saveCart();

        renderProducts();

        renderCart();


        closeCheckout();

        closeCart();


        $("checkoutForm")
            .reset();


        $("successModal")
            .classList.add("open");


        document.body
            .classList.add("no-scroll");

    }
);


/* =========================================================
   ORDERS
========================================================= */

function getOrders(){

    return JSON.parse(
        localStorage.getItem(
            "bholaOrders"
        )
    ) || [];

}


function saveOrder(order){

    const orders =
        getOrders();


    orders.unshift(order);


    localStorage.setItem(
        "bholaOrders",
        JSON.stringify(orders)
    );

}


function openOrders(){

    const user =
        getCurrentUser();


    if(!user){

        openAccountModal();

        return;

    }


    renderOrders();


    $("ordersModal")
        .classList.add("open");


    document.body
        .classList.add("no-scroll");

}


function renderOrders(){

    const user =
        getCurrentUser();


    const orders =
        getOrders().filter(
            order =>
                order.customer.mobile ===
                user.mobile
        );


    const container =
        $("ordersList");


    if(!orders.length){

        container.innerHTML = `

            <div class="no-orders">

                <i
                    class="fa-solid fa-box-open"
                    style="
                        font-size:32px;
                        color:#ff6b1a;
                        margin-bottom:14px;
                    "
                >
                </i>

                <p>
                    You haven't placed any orders yet.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML = "";


    orders.forEach(
        order => {

            const date =
                new Date(order.date);


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "order-card";


            card.innerHTML = `

                <div class="order-card-top">

                    <div>

                        <div class="order-card-id">
                            ${order.id}
                        </div>

                        <div class="order-card-date">

                            ${date.toLocaleDateString(
                                "en-IN",
                                {
                                    day:"numeric",
                                    month:"short",
                                    year:"numeric"
                                }
                            )}

                        </div>

                    </div>

                    <span class="order-status">
                        ${escapeHTML(
                            order.status
                        )}
                    </span>

                </div>

                <div class="order-card-bottom">

                    <span>
                        ${order.items.length}
                        product(s)
                    </span>

                    <strong>
                        ${money(order.total)}
                    </strong>

                </div>

            `;


            container.appendChild(card);

        }
    );

}


/* =========================================================
   SEARCH
========================================================= */

function renderSearchResults(value){

    const container =
        $("searchResults");


    const q =
        value
            .trim()
            .toLowerCase();


    if(!q){

        container.innerHTML = "";

        return;

    }


    const results =
        products
            .filter(
                p =>
                    p.name
                        .toLowerCase()
                        .includes(q)
            )
            .slice(0,7);


    if(!results.length){

        container.innerHTML = `

            <div style="
                text-align:center;
                padding:30px;
                color:#999;
                font-size:12px;
            ">
                No products found
            </div>

        `;

        return;

    }


    container.innerHTML = "";


    results.forEach(
        product => {

            const item =
                document.createElement(
                    "button"
                );


            item.className =
                "search-result";


            item.innerHTML = `

                <img
                    src="${product.img}"
                    alt="${escapeHTML(product.name)}"
                >

                <div
                    style="
                        text-align:left;
                        flex:1;
                    "
                >

                    <strong>
                        ${escapeHTML(
                            product.name
                        )}
                    </strong>

                    <span>
                        ${money(product.price)}
                    </span>

                </div>

                <i
                    class="fa-solid fa-arrow-right"
                    style="
                        font-size:10px;
                        color:#aaa;
                    "
                >
                </i>

            `;


            item.addEventListener(
                "click",
                () => {

                    closeSearch();


                    $("productSearch")
                        .value =
                        product.name;


                    searchValue =
                        product.name;


                    currentFilter =
                        "All";


                    document
                        .querySelectorAll(
                            ".filter-btn"
                        )
                        .forEach(
                            btn =>
                                btn.classList.toggle(
                                    "active",
                                    btn.dataset.filter ===
                                    "All"
                                )
                        );


                    renderProducts();


                    $("shop")
                        .scrollIntoView({
                            behavior:"smooth"
                        });

                }
            );


            container.appendChild(item);

        }
    );

}


function openSearch(){

    $("searchOverlay")
        .classList.add("open");


    document.body
        .classList.add("no-scroll");


    setTimeout(
        () =>
            $("globalSearch").focus(),
        250
    );

}


function closeSearch(){

    $("searchOverlay")
        .classList.remove("open");


    document.body
        .classList.remove("no-scroll");

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message,
    error = false
){

    const toast =
        $("storeToast");


    $("toastMessage")
        .textContent =
        message;


    const icon =
        toast.querySelector("i");


    icon.className =
        error
        ?
        "fa-solid fa-circle-exclamation"
        :
        "fa-solid fa-circle-check";


    icon.style.color =
        error
        ?
        "#ff6262"
        :
        "#55d981";


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () =>
                toast.classList.remove(
                    "show"
                ),
            2500
        );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if(entry.isIntersecting){

                        entry.target
                            .classList.add(
                                "visible"
                            );


                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },
        {
            threshold:.12
        }
    );


function observeReveal(){

    document
        .querySelectorAll(".reveal")
        .forEach(
            el =>
                revealObserver.observe(el)
        );

}


/* =========================================================
   HEADER SCROLL
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        $("storeHeader")
            .classList.toggle(
                "scrolled",
                window.scrollY > 20
            );


        $("backTop")
            .classList.toggle(
                "show",
                window.scrollY > 500
            );

    },
    {
        passive:true
    }
);


/* =========================================================
   PRODUCT EVENTS
========================================================= */

$("productGrid")
    .addEventListener(
        "click",
        event => {

            const add =
                event.target.closest(
                    "[data-add]"
                );


            const plus =
                event.target.closest(
                    "[data-plus]"
                );


            const minus =
                event.target.closest(
                    "[data-minus]"
                );


            const heart =
                event.target.closest(
                    "[data-heart]"
                );


            if(add){

                addToCart(
                    Number(
                        add.dataset.add
                    )
                );

                return;

            }


            if(plus){

                addToCart(
                    Number(
                        plus.dataset.plus
                    )
                );

                return;

            }


            if(minus){

                decreaseCart(
                    Number(
                        minus.dataset.minus
                    )
                );

                return;

            }


            if(heart){

                heart.classList.toggle(
                    "active"
                );


                heart.innerHTML =
                    heart.classList.contains(
                        "active"
                    )
                    ?
                    `<i class="fa-solid fa-heart"></i>`
                    :
                    `<i class="fa-regular fa-heart"></i>`;


                showToast(
                    heart.classList.contains(
                        "active"
                    )
                    ?
                    "Added to wishlist"
                    :
                    "Removed from wishlist"
                );

            }

        }
    );


/* =========================================================
   CART EVENTS
========================================================= */

$("cartItems")
    .addEventListener(
        "click",
        event => {

            const plus =
                event.target.closest(
                    "[data-cart-plus]"
                );


            const minus =
                event.target.closest(
                    "[data-cart-minus]"
                );


            const remove =
                event.target.closest(
                    "[data-remove]"
                );


            if(plus){

                addToCart(
                    Number(
                        plus.dataset.cartPlus
                    )
                );

            }


            if(minus){

                decreaseCart(
                    Number(
                        minus.dataset.cartMinus
                    )
                );

            }


            if(remove){

                removeCart(
                    Number(
                        remove.dataset.remove
                    )
                );

            }

        }
    );


/* =========================================================
   FILTERS
========================================================= */

document
    .querySelectorAll(".filter-btn")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    currentFilter =
                        button.dataset.filter;


                    document
                        .querySelectorAll(
                            ".filter-btn"
                        )
                        .forEach(
                            btn =>
                                btn.classList.toggle(
                                    "active",
                                    btn === button
                                )
                        );


                    renderProducts();

                }
            );

        }
    );


/* =========================================================
   SEARCH INPUT
========================================================= */

$("productSearch")
    .addEventListener(
        "input",
        event => {

            searchValue =
                event.target.value;

            renderProducts();

        }
    );


$("sortProducts")
    .addEventListener(
        "change",
        renderProducts
    );


$("globalSearch")
    .addEventListener(
        "input",
        event =>
            renderSearchResults(
                event.target.value
            )
    );


/* =========================================================
   CATEGORY CARDS
========================================================= */

document
    .querySelectorAll(".category-card")
    .forEach(
        card => {

            card.addEventListener(
                "click",
                () => {

                    currentFilter =
                        card.dataset.category;


                    document
                        .querySelectorAll(
                            ".filter-btn"
                        )
                        .forEach(
                            btn =>
                                btn.classList.toggle(
                                    "active",
                                    btn.dataset.filter ===
                                    currentFilter
                                )
                        );


                    renderProducts();


                    $("shop")
                        .scrollIntoView({
                            behavior:"smooth"
                        });

                }
            );

        }
    );


/* =========================================================
   MOBILE MENU
========================================================= */

$("mobileMenuBtn")
    .addEventListener(
        "click",
        () => {

            $("mobileMenu")
                .classList.add("open");


            document.body
                .classList.add(
                    "no-scroll"
                );

        }
    );


$("closeMobileMenu")
    .addEventListener(
        "click",
        () => {

            $("mobileMenu")
                .classList.remove(
                    "open"
                );


            document.body
                .classList.remove(
                    "no-scroll"
                );

        }
    );


document
    .querySelectorAll(
        "#mobileMenu a"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    $("mobileMenu")
                        .classList.remove(
                            "open"
                        );


                    document.body
                        .classList.remove(
                            "no-scroll"
                        );

                }
            );

        }
    );


$("mobileLogin")
    .addEventListener(
        "click",
        () => {

            $("mobileMenu")
                .classList.remove(
                    "open"
                );


            document.body
                .classList.remove(
                    "no-scroll"
                );


            openAccountModal();

        }
    );


/* =========================================================
   BUTTONS
========================================================= */

$("openCart")
    .addEventListener(
        "click",
        openCart
    );


$("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


$("drawerBackdrop")
    .addEventListener(
        "click",
        closeCart
    );


$("startShopping")
    .addEventListener(
        "click",
        () => {

            closeCart();


            $("shop")
                .scrollIntoView({
                    behavior:"smooth"
                });

        }
    );


$("checkoutBtn")
    .addEventListener(
        "click",
        openCheckout
    );


$("accountBtn")
    .addEventListener(
        "click",
        openAccountModal
    );


$("openSearch")
    .addEventListener(
        "click",
        openSearch
    );


$("closeSearch")
    .addEventListener(
        "click",
        closeSearch
    );


$("offerShopBtn")
    .addEventListener(
        "click",
        () =>
            $("shop")
                .scrollIntoView({
                    behavior:"smooth"
                })
    );


$("resetProducts")
    .addEventListener(
        "click",
        () => {

            currentFilter =
                "All";


            searchValue =
                "";


            $("productSearch")
                .value =
                "";


            $("sortProducts")
                .value =
                "default";


            document
                .querySelectorAll(
                    ".filter-btn"
                )
                .forEach(
                    btn =>
                        btn.classList.toggle(
                            "active",
                            btn.dataset.filter ===
                            "All"
                        )
                );


            renderProducts();

        }
    );


$("backTop")
    .addEventListener(
        "click",
        () =>
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
    );


/* =========================================================
   ACCOUNT SWITCH
========================================================= */

$("showSignup")
    .addEventListener(
        "click",
        showSignupForm
    );


$("showLogin")
    .addEventListener(
        "click",
        showLoginForm
    );


$("profileLogout")
    .addEventListener(
        "click",
        logoutUser
    );


$("profileOrders")
    .addEventListener(
        "click",
        () => {

            closeAccountModal();

            openOrders();

        }
    );


$("footerLogin")
    .addEventListener(
        "click",
        openAccountModal
    );


$("footerOrders")
    .addEventListener(
        "click",
        openOrders
    );


$("footerCart")
    .addEventListener(
        "click",
        openCart
    );


$("forgotPassword")
    .addEventListener(
        "click",
        () => {

            showToast(
                "Password reset requires backend/OTP integration",
                true
            );

        }
    );


/* =========================================================
   PASSWORD TOGGLE
========================================================= */

document
    .querySelectorAll(
        ".password-toggle"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const input =
                        $(
                            button.dataset.target
                        );


                    if(
                        input.type ===
                        "password"
                    ){

                        input.type =
                            "text";


                        button.innerHTML =
                            `
                            <i class="
                                fa-regular
                                fa-eye-slash
                            "></i>
                            `;

                    }
                    else{

                        input.type =
                            "password";


                        button.innerHTML =
                            `
                            <i class="
                                fa-regular
                                fa-eye
                            "></i>
                            `;

                    }

                }
            );

        }
    );


/* =========================================================
   MODAL CLOSE BUTTONS
========================================================= */

document
    .querySelectorAll(
        "[data-close-account]"
    )
    .forEach(
        button =>
            button.addEventListener(
                "click",
                closeAccountModal
            )
    );


document
    .querySelectorAll(
        "[data-close-checkout]"
    )
    .forEach(
        button =>
            button.addEventListener(
                "click",
                closeCheckout
            )
    );


document
    .querySelectorAll(
        "[data-close-success]"
    )
    .forEach(
        button =>
            button.addEventListener(
                "click",
                () => {

                    $("successModal")
                        .classList.remove(
                            "open"
                        );


                    document.body
                        .classList.remove(
                            "no-scroll"
                        );

                }
            )
    );


document
    .querySelectorAll(
        "[data-close-orders]"
    )
    .forEach(
        button =>
            button.addEventListener(
                "click",
                () => {

                    $("ordersModal")
                        .classList.remove(
                            "open"
                        );


                    document.body
                        .classList.remove(
                            "no-scroll"
                        );

                }
            )
    );


/* =========================================================
   SUCCESS BUTTONS
========================================================= */

$("continueShopping")
    .addEventListener(
        "click",
        () => {

            $("successModal")
                .classList.remove(
                    "open"
                );


            document.body
                .classList.remove(
                    "no-scroll"
                );


            $("shop")
                .scrollIntoView({
                    behavior:"smooth"
                });

        }
    );


$("viewOrders")
    .addEventListener(
        "click",
        () => {

            $("successModal")
                .classList.remove(
                    "open"
                );


            openOrders();

        }
    );


$("copyOrderId")
    .addEventListener(
        "click",
        async () => {

            const id =
                $("successOrderId")
                    .textContent;


            try{

                await navigator.clipboard
                    .writeText(id);


                showToast(
                    "Order ID copied"
                );

            }
            catch{

                showToast(
                    "Order ID: " +
                    id
                );

            }

        }
    );


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if(event.key !== "Escape")
            return;


        closeCart();

        closeSearch();

        closeAccountModal();

        closeCheckout();


        $("successModal")
            .classList.remove(
                "open"
            );


        $("ordersModal")
            .classList.remove(
                "open"
            );


        $("mobileMenu")
            .classList.remove(
                "open"
            );


        document.body
            .classList.remove(
                "no-scroll"
            );

    }
);


/* =========================================================
   LOADER
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                $("siteLoader")
                    .classList.add(
                        "hide"
                    );

            },
            700
        );

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

updateAccountUI();

renderProducts();

renderCart();

observeReveal();


/* =========================================================
   AUTO RE-OBSERVE PRODUCTS
========================================================= */

const productObserver =
    new MutationObserver(
        () => {

            document
                .querySelectorAll(
                    "#productGrid .product-card"
                )
                .forEach(
                    (card,index) => {

                        card.style.animationDelay =
                            Math.min(
                                index * 35,
                                300
                            ) + "ms";

                    }
                );

        }
    );


productObserver.observe(
    $("productGrid"),
    {
        childList:true
    }
);


/* =========================================================
   WISHLIST
========================================================= */

// Wishlist functionality is handled
// through the product heart buttons above.