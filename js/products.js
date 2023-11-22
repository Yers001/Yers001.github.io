const products = [
  {
    name: 'Online Course',
    price: 9.99,
    type: 'training',
    img: 'https://www.chess.com/bundles/web/images/apps/header-phone.0dff478b.png',
  },
  {
    name: 'Individual Course',
    price: 19.99,
    type: 'training',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Career_Change_Chess_Cartoon.svg/1333px-Career_Change_Chess_Cartoon.svg.png',
  },
  {
    name: 'Group Lessons',
    price: 14.99,
    type: 'training',
    img: 'https://img.freepik.com/premium-vector/cartoon-character-playing-chess-game_29937-4053.jpg',
  },
  {
    name: 'Olympiad Training',
    price: 29.99,
    type: 'olympiad',
    img: 'https://static.vecteezy.com/system/resources/previews/024/483/829/non_2x/schoolgirl-with-books-and-cup-for-winning-olympiad-rejoices-at-good-marks-for-test-png.png',
  },
  {
    name: 'Chess Desk',
    price: 5.99,
    type: 'vip',
    img: 'https://cartoonmovement.typepad.com/.a/6a014e5f5d3c7c970c0263e99cbba6200b-pi',
  },
  {
    name: 'VIP',
    price: 49.99,
    type: 'vip',
    img: 'https://ae01.alicdn.com/kf/S2cd6c9e1d413498e80a719e1b7bb4512n/Creative-chess-resin-decoration-simulation-chess-pieces-home-window-wine-cabinet-desktop-creative-decoration.jpg',
  },
];

let activeFilter = 'all';

function filterTraining() {
  activeFilter = 'training';
  filterProducts();
}

function filterOlympiad() {
  activeFilter = 'olympiad';
  filterProducts();
}

function filterVIP() {
  activeFilter = 'vip';
  filterProducts();
}

function filterProducts() {
  const filtered = products.filter((p) => {
    if (activeFilter === 'all') {
      return true;
    }
    return p.type === activeFilter;
  });
  displayProducts(filtered);
}

function displayProducts(prods) {
  const container = document.querySelector('.box-container');
  container.innerHTML = '';
  prods.forEach((product) => {
    const box = document.createElement('div');
    box.classList.add('box');
    box.innerHTML = `
                    <span class='discount'></span>
                    <div class='image'>
                        <img src='${product.img}' alt='${product.name}'>
                        <div class='icons'>
                            <a href='#' class='fas fa-heart'></a>
                            <a href='#' class='cart-btn'>add to cart</a>
                            <a href='#' class='fas fa-share'> </a>
                        </div>
                    </div>
                    <div class='content'>+
                        <h3>${product.name}</h3>
                        <div class='price'>${product.price}$<span></span></div>
                    </div>`;
    container.appendChild(box);
  });
}

// Initial display of products
filterProducts();
