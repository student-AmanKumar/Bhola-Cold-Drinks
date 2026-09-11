// ============================================================
// BHOLA / EZZO — STOREFRONT → POS BILLING FLOW
// Replace your existing ezoo.js with this file
// ============================================================

let products = JSON.parse(localStorage.getItem("products")) || [

  {name:"Maaza 600 ML",price:60,img:"https://i.pinimg.com/736x/36/bc/37/36bc37117b5b23f540ba6083c1a25c4a.jpg"},
  {name:"Frooti 125 ML",price:10,img:"https://i.pinimg.com/736x/02/9d/2a/029d2a5b46ee80b4c833642a26617ea7.jpg"},
  {name:"Maaza 150 ML",price:10,img:"https://i.pinimg.com/736x/23/44/de/2344de5580d6ba7b503c8752bb8233b3.jpg"},
  {name:"Sprite 355 ML",price:20,img:"https://i.pinimg.com/736x/0f/3f/0c/0f3f0ca59bf74ea76d1bdd725ea2e251.jpg"},
  {name:"Cola 355 ML",price:20,img:"https://i.pinimg.com/1200x/53/99/33/53993397d30ff8eb80ab614b577b2f5e.jpg"},
  {name:"Fanta 355 ML",price:20,img:"https://i.pinimg.com/1200x/fc/af/27/fcaf271f01117eefebed74490359cd9d.jpg"},
  {name:"Fanta Grape 350 ML",price:25,img:"https://i.pinimg.com/736x/b9/15/5c/b9155ca96a8f93963887b91d0be0d1fe.jpg"},
  {name:"Pepsi 350 ML",price:20,img:"https://i.pinimg.com/736x/23/22/ef/2322efde1d0b81b9bd6938a294ad46db.jpg"},
  {name:"Mirinda 350 ML",price:20,img:"https://i.pinimg.com/1200x/96/2a/63/962a630c2bf60f48cf5172fd23967f99.jpg"},
  {name:"7up 350 ML",price:20,img:"https://i.pinimg.com/1200x/70/b5/9c/70b59cea2b205773444c43fba5e0f5c2.jpg"},
  {name:"Pineapple 330 ML",price:20,img:"https://i.pinimg.com/736x/87/7e/6b/877e6bd7dbaa9e3778dc50da490aabbd.jpg"},
  {name:"Strawberry 330 ML",price:20,img:"https://i.pinimg.com/736x/cd/d9/0f/cdd90fa98c1bab5973d355319a38f936.jpg"},
  {name:"Sting 330 ML",price:20,img:"https://i.pinimg.com/1200x/33/07/77/33077799c57138265c32f27fa1822c7e.jpg"},
  {name:"Redbull 250 ML",price:20,img:"https://i.pinimg.com/1200x/f9/68/e3/f968e3a1d474e1c19a91b508231a88c8.jpg"},
  {name:"Sprite 750 ML",price:50,img:"https://i.pinimg.com/736x/22/12/4f/22124f3a800b39e0f3a5fe549875db55.jpg"},
  {name:"Dew 750 ML",price:50,img:"https://i.pinimg.com/736x/bc/0b/c0/bc0bc0f6c974a030037f51aacdfe9417.jpg"},
  {name:"Cola 750 ML",price:50,img:"https://i.pinimg.com/1200x/c5/60/3c/c5603c2073ab5af1028ea7017265ac82.jpg"},
  {name:"Limka 750 ML",price:50,img:"https://i.pinimg.com/736x/1c/18/44/1c1844edf8aeaaf0e7804af733312069.jpg"},
  {name:"Dew 300 ML",price:22,img:"https://i.pinimg.com/736x/67/ff/af/67ffaf8cbc654b175a1f2dc34e9d0d79.jpg"},
  {name:"Pepsi 300 ML",price:22,img:"https://i.pinimg.com/736x/e1/86/58/e186580cc54176f4dc53e052bd459588.jpg"},
  {name:"Fanta 300 ML",price:22,img:"https://i.pinimg.com/1200x/4a/b4/da/4ab4dac46078c9ac507b1b63cf4c3fa6.jpg"},
  {name:"Coca Cola 300 ML",price:22,img:"https://i.pinimg.com/1200x/3d/5d/1c/3d5d1cb902e9bd8c2577b990968c63a8.jpg"},
  {name:"Bisleri",price:20,img:"https://i.pinimg.com/1200x/9c/98/75/9c9875ffd812ef7ed4aab9b84d98acba.jpg"},
  {name:"Param Milk",price:20,img:"https://i.pinimg.com/1200x/05/b7/e3/05b7e30e6bfebb4d78c4b8cd8dafea63.jpg"},
  {name:"Lassi",price:20,img:"https://i.pinimg.com/1200x/66/17/f6/6617f68430cc396bfeb8cfa4ecce1f26.jpg"},
  {name:"Litchi Lassi",price:30,img:"https://i.pinimg.com/1200x/29/6f/db/296fdb211f932816f2cb9d4d9d4b732f.jpg"},
  {name:"Mango Lassi",price:30,img:"https://i.pinimg.com/1200x/8e/67/51/8e6751f474c575e0ce92330fddad393c.jpg"},
  {name:"Sprite 2L",price:95,img:"https://i.pinimg.com/1200x/67/70/ff/6770ffd0c88c134e86c1dc3e3e584f3c.jpg"},
  {name:"Pepsi 2L",price:95,img:"https://i.pinimg.com/736x/80/01/a5/8001a5ed6473e5b59f9ff8c981ccc23e.jpg"},
  {name:"Fanta 2L",price:95,img:"https://i.pinimg.com/736x/67/00/e5/6700e50d03bc22f4221420f3dd57ec1c.jpg"},
  {name:"Dew 2L",price:95,img:"https://i.pinimg.com/1200x/2e/fd/c7/2efdc7b841225f1614c505545c339920.jpg"},
  {name:"Thumsup 2L",price:95,img:"https://i.pinimg.com/1200x/a6/9c/df/a69cdf9732cb9f305b524695be3c3784.jpg"},
  {name:"Coca Cola 2L",price:95,img:"https://i.pinimg.com/1200x/9c/d6/f7/9cd6f72abc183cbe61528703d20ad2d0.jpg"},
  {name:"Mirinda 2L",price:95,img:"https://i.pinimg.com/736x/04/11/b1/0411b112c0d86317a0d98634daf617c8.jpg"},
  {name:"Frooti 2L",price:100,img:"https://i.pinimg.com/736x/cb/6b/95/cb6b95585dadc5803d6a6024112583d7.jpg"},
  {name:"Orange Juice",price:50,img:"https://i.pinimg.com/1200x/c9/41/19/c941196f61d17f81ffa61126e8336dfc.jpg"},
  {name:"Real Juice",price:80,img:"https://i.pinimg.com/736x/17/10/07/171007fe6e222c515fd132d758f26e5f.jpg"},
  {name:"Dew 400 ML",price:20,img:"https://i.pinimg.com/736x/72/98/6a/72986a712ae3625831c2a8741e59be4f.jpg"},
  {name:"Sprite 400 ML",price:20,img:"https://i.pinimg.com/1200x/ce/a1/7a/cea17ace40dca9bbb1451fcc7146048a.jpg"},
  {name:"Thumsup 400 ML",price:20,img:"https://i.pinimg.com/736x/b9/cd/13/b9cd13acd3cfba24ecb84e12ddb3347b.jpg"}

];


// ============================================================
// GLOBAL POS VARIABLES
// ============================================================

let cart = {};
let total = 0;
let billNumber = Number(localStorage.getItem("billNumber")) || 100;
let billingStarted = false;

const $ = id => document.getElementById(id);


// ============================================================
// URL CLEANER
// Handles old [url](url) image format safely
// ============================================================

function cleanImageUrl(url){

  if(!url) return "";

  const value = String(url).trim();

  const markdown = value.match(/\]\((.*?)\)$/);

  if(value.startsWith("[") && markdown){
    return markdown[1];
  }

  return value.replace(/^\[|\]$/g,"");

}


// ============================================================
// ESCAPE HTML
// ============================================================

function escapeHTML(value){

  return String(value).replace(/[&<>"']/g, m => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#039;"
  }[m]));

}


// ============================================================
// STOREFRONT STYLE
// ============================================================

const storefrontCSS = `

#ezzoStorefront{
  position:fixed;
  inset:0;
  z-index:99999;
  overflow:auto;
  background:
    radial-gradient(circle at 85% 10%,rgba(255,122,24,.13),transparent 28%),
    radial-gradient(circle at 10% 90%,rgba(72,180,255,.10),transparent 28%),
    #f4f7f9;
  color:#17212b;
  font-family:Inter,system-ui,sans-serif;
  animation:ezzoStoreReveal .55s cubic-bezier(.22,.8,.25,1);
}

#ezzoStorefront *{
  box-sizing:border-box;
}

@keyframes ezzoStoreReveal{
  from{opacity:0;transform:scale(.985)}
  to{opacity:1;transform:scale(1)}
}

.ezzo-store-nav{
  position:sticky;
  top:12px;
  z-index:20;
  max-width:1400px;
  margin:12px auto;
  padding:12px 16px;
  display:flex;
  align-items:center;
  gap:18px;
  background:rgba(255,255,255,.86);
  backdrop-filter:blur(20px);
  border:1px solid rgba(255,255,255,.8);
  border-radius:18px;
  box-shadow:0 14px 40px rgba(30,45,60,.10);
}

.ezzo-store-brand{
  display:flex;
  align-items:center;
  gap:10px;
  min-width:210px;
}

.ezzo-store-brand img{
  width:44px;
  height:44px;
  object-fit:cover;
  border-radius:13px;
}

.ezzo-store-brand strong{
  display:block;
  font:700 17px "Space Grotesk",sans-serif;
}

.ezzo-store-brand strong span{
  color:#ff7a18;
}

.ezzo-store-brand small{
  display:block;
  margin-top:2px;
  color:#8a939c;
  font-size:8px;
  letter-spacing:1.5px;
}

.ezzo-store-search{
  flex:1;
  height:44px;
  display:flex;
  align-items:center;
  gap:9px;
  padding:0 14px;
  border:1px solid #e1e6e9;
  border-radius:13px;
  background:#f5f7f8;
  transition:.25s;
}

.ezzo-store-search:focus-within{
  background:#fff;
  border-color:rgba(255,122,24,.4);
  box-shadow:0 0 0 4px rgba(255,122,24,.08);
}

.ezzo-store-search i{
  color:#ff7a18;
}

.ezzo-store-search input{
  width:100%;
  border:0;
  outline:0;
  background:transparent;
}

.ezzo-cart-btn{
  border:0;
  height:44px;
  padding:0 17px;
  border-radius:13px;
  color:#fff;
  background:linear-gradient(135deg,#ff7a18,#ff3d00);
  font-weight:800;
  font-size:11px;
  box-shadow:0 10px 25px rgba(255,92,20,.22);
  transition:.25s;
}

.ezzo-cart-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 14px 30px rgba(255,92,20,.3);
}

.ezzo-store-main{
  max-width:1400px;
  margin:auto;
  padding:20px 20px 80px;
}

.ezzo-store-hero{
  padding:38px 34px;
  border-radius:26px;
  background:linear-gradient(135deg,#151e25,#293943);
  color:#fff;
  position:relative;
  overflow:hidden;
  box-shadow:0 20px 55px rgba(24,39,54,.12);
}

.ezzo-store-hero:after{
  content:"";
  position:absolute;
  width:300px;
  height:300px;
  border-radius:50%;
  right:-80px;
  top:-150px;
  background:rgba(255,122,24,.22);
  filter:blur(3px);
}

.ezzo-store-hero h1{
  position:relative;
  z-index:1;
  font:700 clamp(30px,4vw,52px) "Space Grotesk",sans-serif;
  margin:7px 0;
}

.ezzo-store-hero h1 span{
  color:#ff984d;
}

.ezzo-store-hero p{
  position:relative;
  z-index:1;
  color:#b9c3ca;
  max-width:620px;
  font-size:13px;
  line-height:1.7;
}

.ezzo-store-kicker{
  position:relative;
  z-index:1;
  color:#ff7a18;
  font-size:9px;
  font-weight:900;
  letter-spacing:2px;
}

.ezzo-store-layout{
  display:grid;
  grid-template-columns:minmax(0,1fr) 330px;
  gap:20px;
  margin-top:22px;
}

.ezzo-products-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(155px,1fr));
  gap:13px;
}

.ezzo-product{
  background:rgba(255,255,255,.9);
  border:1px solid #e6eaed;
  border-radius:18px;
  padding:10px;
  cursor:pointer;
  overflow:hidden;
  transition:.3s cubic-bezier(.2,.8,.2,1);
  animation:ezzoCard .5s both;
}

@keyframes ezzoCard{
  from{opacity:0;transform:translateY(14px)}
  to{opacity:1;transform:none}
}

.ezzo-product:hover{
  transform:translateY(-7px);
  border-color:rgba(255,122,24,.35);
  box-shadow:0 17px 30px rgba(30,45,60,.12);
}

.ezzo-product-img{
  width:100%;
  height:145px;
  object-fit:contain;
  border-radius:13px;
  background:linear-gradient(145deg,#fafbfc,#edf1f3);
  padding:8px;
}

.ezzo-product-info{
  padding:9px 3px 2px;
}

.ezzo-product-name{
  display:block;
  min-height:32px;
  font-size:11px;
  font-weight:800;
}

.ezzo-product-row{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:7px;
}

.ezzo-product-price{
  color:#ff7a18;
  font:800 16px "Space Grotesk";
}

.ezzo-add{
  width:28px;
  height:28px;
  display:grid;
  place-items:center;
  border:0;
  border-radius:9px;
  color:#ff7a18;
  background:#fff0e5;
  transition:.25s;
}

.ezzo-product:hover .ezzo-add{
  background:#ff7a18;
  color:#fff;
  transform:rotate(90deg);
}

.ezzo-cart-panel{
  position:sticky;
  top:90px;
  height:max-content;
  padding:18px;
  border-radius:22px;
  background:rgba(255,255,255,.9);
  border:1px solid #e5e9ec;
  box-shadow:0 18px 45px rgba(30,45,60,.10);
}

.ezzo-cart-title{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding-bottom:13px;
  border-bottom:1px dashed #dce1e4;
}

.ezzo-cart-title h2{
  font:700 20px "Space Grotesk";
}

.ezzo-cart-title span{
  color:#ff7a18;
  font-size:10px;
  font-weight:800;
}

.ezzo-cart-items{
  max-height:430px;
  overflow:auto;
  padding:8px 0;
}

.ezzo-cart-empty{
  text-align:center;
  padding:50px 10px;
  color:#9ba3a9;
  font-size:11px;
}

.ezzo-cart-empty i{
  display:block;
  font-size:30px;
  margin-bottom:10px;
  color:#c5ccd1;
}

.ezzo-cart-item{
  display:grid;
  grid-template-columns:45px 1fr auto;
  align-items:center;
  gap:9px;
  padding:9px 0;
  border-bottom:1px solid #eef0f2;
}

.ezzo-cart-item img{
  width:45px;
  height:45px;
  object-fit:contain;
  background:#f3f5f6;
  border-radius:10px;
}

.ezzo-cart-item b{
  display:block;
  font-size:10px;
}

.ezzo-cart-item small{
  display:block;
  color:#ff7a18;
  margin-top:3px;
  font-weight:800;
}

.ezzo-qty{
  display:flex;
  align-items:center;
  gap:5px;
}

.ezzo-qty button{
  width:23px;
  height:23px;
  border:0;
  border-radius:7px;
  background:#f1f3f4;
  font-weight:900;
}

.ezzo-qty span{
  min-width:16px;
  text-align:center;
  font-size:10px;
  font-weight:800;
}

.ezzo-cart-total{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:14px 0;
  margin-top:5px;
  border-top:1px dashed #dce1e4;
}

.ezzo-cart-total span{
  font-size:11px;
  font-weight:700;
}

.ezzo-cart-total strong{
  color:#ff7a18;
  font:800 23px "Space Grotesk";
}

.ezzo-proceed{
  width:100%;
  height:47px;
  border:0;
  border-radius:13px;
  color:#fff;
  background:linear-gradient(135deg,#ff7a18,#ff3d00);
  font-size:11px;
  font-weight:900;
  box-shadow:0 12px 27px rgba(255,92,20,.23);
  transition:.25s;
}

.ezzo-proceed:hover{
  transform:translateY(-2px);
  box-shadow:0 16px 32px rgba(255,92,20,.3);
}

.ezzo-back{
  width:100%;
  margin-top:8px;
  height:38px;
  border:1px solid #e2e6e8;
  border-radius:11px;
  background:#fff;
  font-size:10px;
  font-weight:800;
  color:#66717a;
}

.ezzo-no-results{
  grid-column:1/-1;
  padding:70px 20px;
  text-align:center;
  color:#9ba3a9;
}

.ezzo-no-results i{
  font-size:35px;
  display:block;
  margin-bottom:10px;
}

@media(max-width:900px){
  .ezzo-store-layout{
    grid-template-columns:1fr;
  }

  .ezzo-cart-panel{
    position:relative;
    top:auto;
  }

  .ezzo-cart-items{
    max-height:350px;
  }
}

@media(max-width:650px){

  .ezzo-store-nav{
    margin:7px 7px 0;
    padding:9px;
    flex-wrap:wrap;
  }

  .ezzo-store-brand{
    min-width:0;
    flex:1;
  }

  .ezzo-store-brand strong{
    font-size:14px;
  }

  .ezzo-store-brand small{
    font-size:6px;
  }

  .ezzo-store-brand img{
    width:38px;
    height:38px;
  }

  .ezzo-store-search{
    order:3;
    flex-basis:100%;
  }

  .ezzo-cart-btn{
    padding:0 12px;
  }

  .ezzo-store-main{
    padding:13px 10px 50px;
  }

  .ezzo-store-hero{
    padding:27px 20px;
    border-radius:20px;
  }

  .ezzo-store-hero h1{
    font-size:31px;
  }

  .ezzo-store-hero p{
    font-size:11px;
  }

  .ezzo-products-grid{
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:9px;
  }

  .ezzo-product{
    padding:7px;
    border-radius:14px;
  }

  .ezzo-product-img{
    height:115px;
  }

  .ezzo-product-name{
    font-size:10px;
  }

  .ezzo-product-price{
    font-size:13px;
  }

}

`;


// ============================================================
// CREATE STOREFRONT
// ============================================================

function createStorefront(){

  if(document.getElementById("ezzoStorefront")) return;

  const style = document.createElement("style");
  style.id = "ezzoStorefrontStyle";
  style.textContent = storefrontCSS;
  document.head.appendChild(style);

  const oldApp = document.querySelector(".app-shell");
  const oldFooter = document.querySelector(".bh-footer, .footer");

  if(oldApp) oldApp.style.display = "none";
  if(oldFooter) oldFooter.style.display = "none";

  const store = document.createElement("div");
  store.id = "ezzoStorefront";

  store.innerHTML = `

    <nav class="ezzo-store-nav">

      <div class="ezzo-store-brand">
        <img src="imgs/logo.png" alt="Bhola Cold Drinks">
        <div>
          <strong>Bhola <span>Cold Drinks</span></strong>
          <small>EZOO STORE • FRESH & FAST</small>
        </div>
      </div>

      <div class="ezzo-store-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input id="ezzoStoreSearch" type="search"
          placeholder="Search drinks, juice, lassi...">
      </div>

      <button class="ezzo-cart-btn" id="ezzoTopCart">
        <i class="fa-solid fa-cart-shopping"></i>
        Cart <span id="ezzoTopCount">0</span>
      </button>

    </nav>

    <main class="ezzo-store-main">

      <section class="ezzo-store-hero">

        <span class="ezzo-store-kicker">
          <i class="fa-solid fa-bolt"></i>
          BHOLA COLD DRINKS • Bhamori Khurd
        </span>

        <h1>
          Pick your <span>favourite.</span>
        </h1>

        <p>
          Choose your drinks, build your order and continue to
          billing when you're ready.
        </p>

      </section>

      <section class="ezzo-store-layout">

        <div>

          <div class="ezzo-products-grid" id="ezzoProductsGrid"></div>

        </div>

        <aside class="ezzo-cart-panel" id="ezzoCartPanel">

          <div class="ezzo-cart-title">
            <h2>Your Cart</h2>
            <span id="ezzoCartCount">0 ITEMS</span>
          </div>

          <div class="ezzo-cart-items" id="ezzoCartItems">

            <div class="ezzo-cart-empty">
              <i class="fa-solid fa-basket-shopping"></i>
              <b>Your cart is empty</b>
              <br>
              Select some drinks to continue.
            </div>

          </div>

          <div class="ezzo-cart-total">
            <span>Order Total</span>
            <strong id="ezzoCartTotal">₹0</strong>
          </div>

          <button class="ezzo-proceed" id="ezzoProceed">
            <i class="fa-solid fa-arrow-right"></i>
            PROCEED TO BILLING
          </button>

          <button class="ezzo-back" onclick="window.location.href='order.html'">
    <i class="fa-solid fa-arrow-left"></i>
    Back to CoolDrink
</button>
        </aside>

      </section>

    </main>
  `;

  document.body.appendChild(store);

  renderStoreProducts(products);

  document
    .getElementById("ezzoStoreSearch")
    .addEventListener("input", e => {

      const q = e.target.value.trim().toLowerCase();

      renderStoreProducts(
        products.filter(p =>
          p.name.toLowerCase().includes(q)
        )
      );

    });

  document
    .getElementById("ezzoTopCart")
    .addEventListener("click", () => {

      document
        .getElementById("ezzoCartPanel")
        .scrollIntoView({
          behavior:"smooth",
          block:"center"
        });

    });

  document
    .getElementById("ezzoProceed")
    .addEventListener("click", proceedToBilling);

}


// ============================================================
// STOREFRONT CART
// ============================================================

let storeCart = {};

function renderStoreProducts(list){

  const grid = document.getElementById("ezzoProductsGrid");

  if(!grid) return;

  grid.innerHTML = "";

  if(!list.length){

    grid.innerHTML = `
      <div class="ezzo-no-results">
        <i class="fa-solid fa-box-open"></i>
        <b>No products found</b>
        <div>Try another search.</div>
      </div>
    `;

    return;
  }

  list.forEach((p,index) => {

    const card = document.createElement("div");

    card.className = "ezzo-product";

    card.style.animationDelay =
      `${Math.min(index * 20,300)}ms`;

    const image = cleanImageUrl(p.img);

    card.innerHTML = `

      <img
        class="ezzo-product-img"
        src="${image}"
        alt="${escapeHTML(p.name)}"
        loading="lazy"
        onerror="this.style.opacity='.35'"
      >

      <div class="ezzo-product-info">

        <span class="ezzo-product-name">
          ${escapeHTML(p.name)}
        </span>

        <div class="ezzo-product-row">

          <b class="ezzo-product-price">
            ₹${p.price}
          </b>

          <button class="ezzo-add">
            <i class="fa-solid fa-plus"></i>
          </button>

        </div>

      </div>
    `;

    card.addEventListener("click", () => addStoreItem(p));

    grid.appendChild(card);

  });

}


function addStoreItem(product){

  if(storeCart[product.name]){

    storeCart[product.name].qty++;

  }else{

    storeCart[product.name] = {
      name:product.name,
      price:Number(product.price),
      img:cleanImageUrl(product.img),
      qty:1
    };

  }

  renderStoreCart();

}


function changeStoreQty(name, amount){

  if(!storeCart[name]) return;

  storeCart[name].qty += amount;

  if(storeCart[name].qty <= 0){

    delete storeCart[name];

  }

  renderStoreCart();

}


function renderStoreCart(){

  const container =
    document.getElementById("ezzoCartItems");

  if(!container) return;

  const items = Object.values(storeCart);

  let grand = 0;
  let qty = 0;

  items.forEach(item => {

    grand += item.price * item.qty;
    qty += item.qty;

  });

  document.getElementById("ezzoCartTotal").textContent =
    `₹${grand}`;

  document.getElementById("ezzoCartCount").textContent =
    `${qty} ITEM${qty === 1 ? "" : "S"}`;

  document.getElementById("ezzoTopCount").textContent = qty;

  if(!items.length){

    container.innerHTML = `
      <div class="ezzo-cart-empty">
        <i class="fa-solid fa-basket-shopping"></i>
        <b>Your cart is empty</b>
        <br>
        Select some drinks to continue.
      </div>
    `;

    return;

  }

  container.innerHTML = "";

  items.forEach(item => {

    const row = document.createElement("div");

    row.className = "ezzo-cart-item";

    row.innerHTML = `

      <img
        src="${item.img}"
        alt="${escapeHTML(item.name)}"
      >

      <div>
        <b>${escapeHTML(item.name)}</b>
        <small>₹${item.price} × ${item.qty}</small>
      </div>

      <div class="ezzo-qty">

        <button
          onclick="changeStoreQty('${escapeHTML(item.name)}',-1)"
        >−</button>

        <span>${item.qty}</span>

        <button
          onclick="changeStoreQty('${escapeHTML(item.name)}',1)"
        >+</button>

      </div>

    `;

    container.appendChild(row);

  });

}


// ============================================================
// STORE → POS
// ============================================================

function proceedToBilling(){

  const items = Object.values(storeCart);

  if(!items.length){

    alert("Please add at least one product to your cart.");

    return;

  }

  /*
    Save storefront cart.
    POS will read this after storefront is closed.
  */

  sessionStorage.setItem(
    "ezzoPendingOrder",
    JSON.stringify(items)
  );

  const store = document.getElementById("ezzoStorefront");

  if(store){

    store.style.opacity = "0";
    store.style.transform = "scale(.985)";

  }

  setTimeout(() => {

    if(store) store.remove();

    const oldApp = document.querySelector(".app-shell");
    const oldFooter = document.querySelector(".bh-footer, .footer");

    if(oldApp) oldApp.style.display = "";
    if(oldFooter) oldFooter.style.display = "";

    window.scrollTo({
      top:0,
      behavior:"instant"
    });

    initializePOSFromStorefront();

  },300);

}


// ============================================================
// LOAD STOREFRONT CART INTO POS
// ============================================================

function initializePOSFromStorefront(){

  const pending =
    sessionStorage.getItem("ezzoPendingOrder");

  if(!pending){

    loadProducts();
    renderBill();
    updateClock();

    return;

  }

  let order = [];

  try{

    order = JSON.parse(pending);

  }catch{

    order = [];

  }

  sessionStorage.removeItem("ezzoPendingOrder");

  /*
    We don't automatically start billing because
    customer details are still required.
  */

  cart = {};

  order.forEach(item => {

    cart[item.name] = {
      price:Number(item.price),
      qty:Number(item.qty)
    };

  });

  /*
    Product selection exists already.
    User only needs to enter customer details.
  */

  const status = $("billingStatus");

  if(status){

    status.className = "status-pill";

    status.innerHTML =
      '<i class="fa-solid fa-user"></i> Customer required';

  }

  renderBill();

  const panel = document.querySelector(".catalog-panel");

  if(panel){

    setTimeout(() => {

      panel.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

    },150);

  }

  showToast(
    `${order.reduce((s,x)=>s+x.qty,0)} product(s) ready for billing`
  );

}


// ============================================================
// EXISTING POS FUNCTIONS
// ============================================================

function loadProducts(list = products){

  const container = $("products");

  if(!container) return;

  container.innerHTML = "";

  $("productCount").textContent = products.length;

  $("emptyProducts").hidden = list.length !== 0;

  list.forEach((p, i) => {

    const div = document.createElement("div");

    div.className = "product";

    div.style.animationDelay =
      `${Math.min(i * 18,250)}ms`;

    div.innerHTML = `

      <img
        src="${cleanImageUrl(p.img)}"
        alt="${escapeHTML(p.name)}"
        loading="lazy"
        onerror="this.style.opacity='.35';this.alt='Image unavailable'"
      >

      <div class="product-info">

        <span class="product-name">
          ${escapeHTML(p.name)}
        </span>

        <div class="product-bottom">

          <b class="product-price">
            ₹${p.price}
          </b>

          <span class="add-dot">
            <i class="fa-solid fa-plus"></i>
          </span>

        </div>

      </div>
    `;

    div.addEventListener("click", () => addItem(i));

    container.appendChild(div);

  });

}


function startBilling(){

  const name = $("cname").value.trim();
  const mobile = $("cmobile").value.trim();
  const address = $("caddress").value.trim();

  if(!name || !mobile || !address){

    showToast("Fill all customer details first",true);

    return;

  }

  if(!/^\d{10}$/.test(mobile)){

    showToast(
      "Enter a valid 10-digit mobile number",
      true
    );

    $("cmobile").focus();

    return;

  }

  billingStarted = true;

  $("products").classList.remove("disabled");

  $("billingStatus").className =
    "status-pill active";

  $("billingStatus").innerHTML =
    '<i class="fa-solid fa-circle-check"></i> Billing active';

  $("billCustomer").textContent = name;
  $("billMobile").textContent = mobile;
  $("billAddress").textContent = address;

  $("welcomeName").textContent = name;

  const popup = $("welcomePopup");

  if(popup){

    popup.classList.add("show");

    setTimeout(
      () => popup.classList.remove("show"),
      2400
    );

  }

  playSound("startSound");

}


function addItem(index){

  if(!billingStarted){

    showToast(
      "Start billing with customer details first",
      true
    );

    return;

  }

  const p = products[index];

  if(cart[p.name]){

    cart[p.name].qty++;

  }else{

    cart[p.name] = {
      price:p.price,
      qty:1
    };

  }

  renderBill();

  playSound("addSound");

}


function renderBill(){

  const table = $("billTable");

  if(!table) return;

  const tbody = table.querySelector("tbody");

  tbody.innerHTML = "";

  total = 0;

  let items = 0;
  let qty = 0;

  Object.entries(cart).forEach(([item,data]) => {

    const lineTotal =
      data.qty * data.price;

    total += lineTotal;

    items++;
    qty += data.qty;

    const tr = document.createElement("tr");

    tr.innerHTML = `

      <td title="${escapeHTML(item)}">
        ${escapeHTML(item)}
      </td>

      <td>${data.qty}</td>

      <td>₹${data.price}</td>

      <td>₹${lineTotal}</td>

    `;

    tbody.appendChild(tr);

  });

  if($("totalItems"))
    $("totalItems").textContent = items;

  if($("totalQty"))
    $("totalQty").textContent = qty;

  if($("grandTotal"))
    $("grandTotal").textContent = total;

  if($("heroTotal"))
    $("heroTotal").textContent = `₹${total}`;

  if($("cartCount"))
    $("cartCount").textContent = qty;

  if($("emptyBill"))
    $("emptyBill").style.display =
      items ? "none" : "flex";

}


function printBill(){

  if(total <= 0){

    showToast(
      "Add at least one item",
      true
    );

    return;

  }

  window.print();

  advanceBillNumber();

}


function advanceBillNumber(){

  billNumber++;

  localStorage.setItem(
    "billNumber",
    billNumber
  );

  if($("billNo"))
    $("billNo").textContent = billNumber;

}


function buildBillText(){

  const name =
    $("cname").value.trim() || "Customer";

  const mobile =
    $("cmobile").value.trim() || "N/A";

  const address =
    $("caddress").value.trim() || "N/A";

  const now = new Date();

  let lines = [

    "*BHOLA COLD DRINKS*",
    "Bhamori Khurd",
    "Phone: 7247835971",
    "--------------------------------",

    `Bill No: ${$("billNo").textContent}`,

    `Date: ${now.toLocaleDateString("en-IN")}`,

    `Time: ${now.toLocaleTimeString("en-IN")}`,

    "--------------------------------",

    `Customer: ${name}`,
    `Mobile: ${mobile}`,
    `Address: ${address}`,

    "--------------------------------",

    "Item | Qty | Rate | Total"

  ];

  let itemCount = 0;
  let qty = 0;

  Object.entries(cart).forEach(([item,data]) => {

    lines.push(
      `${item} | ${data.qty} | ₹${data.price} | ₹${data.qty * data.price}`
    );

    itemCount++;
    qty += data.qty;

  });

  lines.push(

    "--------------------------------",

    `Total Items: ${itemCount}`,

    `Total Qty: ${qty}`,

    `TOTAL: ₹${total}`,

    "Payment: Cash",

    "",

    "Thank You! Visit Again!"

  );

  return lines.join("\n");

}


function shareWhatsApp(){

  if(total <= 0){

    showToast(
      "Add items before sharing",
      true
    );

    return;

  }

  const mobile =
    $("cmobile").value.trim();

  if(!/^\d{10}$/.test(mobile)){

    showToast(
      "Enter a valid mobile number",
      true
    );

    return;

  }

  const url =
    `https://wa.me/91${mobile}?text=${encodeURIComponent(buildBillText())}`;

  window.open(
    url,
    "_blank",
    "noopener"
  );

  advanceBillNumber();

}


function shareEmail(){

  if(total <= 0){

    showToast(
      "Add items before emailing",
      true
    );

    return;

  }

  const subject =
    `Bhola Cold Drinks — Bill #${$("billNo").textContent}`;

  const body =
    buildBillText().replace(/\*/g,"");

  window.location.href =
    `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  advanceBillNumber();

}


function clearSale(){

  if(
    total > 0 &&
    !confirm(
      "Start a new sale? Current bill will be cleared."
    )
  ) return;

  cart = {};

  total = 0;

  billingStarted = false;

  ["cname","cmobile","caddress"]
    .forEach(id => {

      if($(id)) $(id).value = "";

    });

  ["billCustomer","billMobile","billAddress"]
    .forEach(id => {

      if($(id))
        $(id).textContent = "—";

    });

  $("products").classList.add("disabled");

  $("billingStatus").className =
    "status-pill";

  $("billingStatus").innerHTML =
    '<i class="fa-solid fa-lock"></i> Customer required';

  renderBill();

  showToast("New sale is ready");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}


function filterProducts(value){

  const q =
    String(value || "").trim().toLowerCase();

  loadProducts(
    products.filter(
      p => p.name.toLowerCase().includes(q)
    )
  );

}


function toggleTheme(){

  document.body.classList.toggle("dark");

  const dark =
    document.body.classList.contains("dark");

  localStorage.setItem(
    "posTheme",
    dark ? "dark" : "light"
  );

  if($("themeToggle")){

    $("themeToggle").innerHTML = dark

      ? '<i class="fa-solid fa-sun"></i>'

      : '<i class="fa-solid fa-moon"></i>';

  }

}


function updateClock(){

  const d = new Date();

  let h = d.getHours();

  const ampm =
    h >= 12 ? "PM" : "AM";

  h = h % 12 || 12;

  if($("hours"))
    $("hours").textContent =
      String(h).padStart(2,"0");

  if($("minutes"))
    $("minutes").textContent =
      String(d.getMinutes()).padStart(2,"0");

  if($("seconds"))
    $("seconds").textContent =
      String(d.getSeconds()).padStart(2,"0");

  if($("ampm"))
    $("ampm").textContent = ampm;

  const dateText =
    d.toLocaleDateString("en-IN",{
      weekday:"short",
      day:"numeric",
      month:"short",
      year:"numeric"
    });

  if($("billdate"))
    $("billdate").textContent = dateText;

  if($("date"))
    $("date").textContent =
      d.toLocaleDateString("en-IN");

  if($("time"))
    $("time").textContent =
      d.toLocaleTimeString("en-IN");

}


function playSound(id){

  const audio = $(id);

  if(!audio) return;

  audio.currentTime = 0;

  audio.play().catch(()=>{});

}


let toastTimer;

function showToast(message,error=false){

  const text = $("toastText");
  const toast = $("toast");

  if(!text || !toast) return;

  text.textContent = message;

  const icon =
    toast.querySelector("i");

  if(icon){

    icon.className = error

      ? "fa-solid fa-circle-exclamation"

      : "fa-solid fa-circle-check";

  }

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(
      () => toast.classList.remove("show"),
      2200
    );

}


// ============================================================
// POS SEARCH
// ============================================================

if($("searchHeader")){

  $("searchHeader")
    .addEventListener("input",e => {

      if($("productSearch"))
        $("productSearch").value =
          e.target.value;

      filterProducts(e.target.value);

    });

}


if($("productSearch")){

  $("productSearch")
    .addEventListener("input",e => {

      if($("searchHeader"))
        $("searchHeader").value =
          e.target.value;

      filterProducts(e.target.value);

    });

}


// ============================================================
// KEYBOARD
// ============================================================

document.addEventListener("keydown",e => {

  if(
    (e.ctrlKey || e.metaKey) &&
    e.key.toLowerCase() === "k"
  ){

    e.preventDefault();

    if($("searchHeader"))
      $("searchHeader").focus();

  }

  if(e.key === "Escape"){

    if($("searchHeader"))
      $("searchHeader").value = "";

    if($("productSearch"))
      $("productSearch").value = "";

    filterProducts("");

  }

});


// ============================================================
// CUSTOMER ENTER KEY
// ============================================================

["cname","cmobile","caddress"]
.forEach(id => {

  if($(id)){

    $(id).addEventListener(
      "keydown",
      e => {

        if(e.key === "Enter")
          startBilling();

      }
    );

  }

});


// ============================================================
// INITIALIZE
// ============================================================

function initializeApp(){

  /*
    ALWAYS OPEN EZZO AS STOREFRONT FIRST.
    POS appears only after Proceed to Billing.
  */

  createStorefront();

  renderStoreCart();

  if(localStorage.getItem("posTheme") === "dark")
    toggleTheme();

  if($("billNo"))
    $("billNo").textContent = billNumber;

  loadProducts();

  renderBill();

  updateClock();

  setInterval(updateClock,1000);

}


// Start
initializeApp();