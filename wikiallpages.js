const cards = document.getElementsByClassName("card");

let card_content = [
    [
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlYvzt71tyiUOpi5T6DK7z2KpNo6wMQpTrAg&usqp=CAU' alt='Image' style='width:100%'>",
        "<h1>ACO Online Security</h1>",
        "<p class='price'>ACO Tech</p>",
        "<p>With a built in VPN, ad blocker, and the best in class security this product keeps you and your devices safe from all sorts of threats. AOS App always adapts to new threats and is always up to date.</p>",
        "<button onclick='window.location.href=`https://getbeta.acodevelopment.repl.co/`;'>Get Beta</button>",
    ],

    [
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJWOO3EVsc8acnLzYq_GAGAdvhhmlkk0UVYA&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Search</h1>",
        "<p class='price'>ACO Tech</p>",
        "<p>ACO Search is the best search engine out there, REAL results and NO FAKE INFO! Advanced searching to get you exactly what you want!</p>",
        "<button onclick='window.location.href=`https://ayaan-codes.github.io/search/`;'>Search now!</button>",
    ],

    [
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXTZ2XiLm2ygP16D7WMrgtrbcOYqk3Cr48Fg&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Calculator</h1>",
        "<p class='price'>ACO Tech</p>",
        "<p>An advanced calculator with all the functions, 100% accurate and always updated! 0.0004ms response time!</p>",
        "<button onclick='window.location.href=`https://ayaan-codes.github.io/calculator/`;'>Use now!</button>],",
    ],

    [
        "<img src='https://img.freepik.com/free-vector/premium-collection-badge-design-vector_53876-43821.jpg?size=338&ext=jpg' alt='Denim Jeans' style='width:100%'>",
        "<h1>ACO Premium</h1>",
        "<p class='price'>ACO Membership</p>",
        "<p>Perks, on perks, on perks, on more perks! The BEST membership you can get with discounts, more product, and extra service. There is at least 1 new perk per week!</p>",
        "<button onclick='window.location.href=`premium.html`;'>Get prime today!</button>",
    ],

    [
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7ygxR8NckMCSqqP8UWkG4d_k4gBGfh0Bx9w&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
        "<h1>SMARTi app</h1>",
        "<p class='price'>ACO app</p>",
        "<p>(BETA) This is the new SMARTi app, it is like Siri and Alexa. We have a ton of fetures and can beat everything else on the internet!</p>",
        "<button onclick='window.location.href=`https://ayaan-codes.github.io/aco-smarti/`;'>Try it early!</button>",
    ],

  
];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(card_content);
const params = new URLSearchParams(window.location.search);

const searcha = params.get("search");

if (searcha == null) {
    for (i = 0; i < cards.length; i++) {
        for (y = 0; y < card_content[i].length; y++) {
            cards[i].innerHTML += card_content[i][y];
        }
    }
}

const search = new URLSearchParams(window.location.search);
const search_query = params.get("search");
const card_slots = document.querySelectorAll(".card");

const products = [
    "ACO Online Security & Ad Blocker",
    "ACO Search",
    "ACO Calculator",
    "ACO Premium",
    "ACO SMARTi app",
   
]

let card_slot_content = [["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlYvzt71tyiUOpi5T6DK7z2KpNo6wMQpTrAg&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                    "<h1>ACO Online Security & Ad Blocker</h1>",
                    "<p class='price'>ACO Tech</p>",
                    "<p>ACO Online Security and Ad blocker! The best free secure service online!</p>",
                    "<button onclick='window.location.href=`https://ayaan-codes.github.io/a-co/inactivepage.html`;'>Get it now!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJWOO3EVsc8acnLzYq_GAGAdvhhmlkk0UVYA&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                    "<h1>ACO Search</h1>",
                    "<p class='price'>ACO Tech</p>",
                    "<p>ACO Search is the best search engine out there, REAL results and NO FAKE INFO! Advanced searching to get you exactly what you want!</p>",
                    "<button onclick='window.location.href=`https://ayaan-codes.github.io/search/`;'>Search now!</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXTZ2XiLm2ygP16D7WMrgtrbcOYqk3Cr48Fg&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                    "<h1>ACO Calculator</h1>",
                    "<p class='price'>ACO Tech</p>",
                    "<p>An advanced calculator with all the functions, 100% accurate and always updated! 0.0004ms response time!</p>",
                    "<button onclick='window.location.href=`https://ayaan-codes.github.io/calculator/`;'>Use now!</button>],"],

                    ["<img src='https://img.freepik.com/free-vector/premium-collection-badge-design-vector_53876-43821.jpg?size=338&ext=jpg' alt='Denim Jeans' style='width:100%'>",
                    "<h1>ACO Premium</h1>",
                    "<p class='price'>ACO Membership</p>",
                    "<p>Perks, on perks, on perks, on more perks! The BEST membership you can get with discounts, more product, and extra service. There is at least 1 new perk per week!</p>",
                    "<button onclick='window.location.href=`premium.html`;'>Get prime today!</button>"],

    
                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7ygxR8NckMCSqqP8UWkG4d_k4gBGfh0Bx9w&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>SMARTi app</h1>",
                 "<p class='price'>ACO app</p>",
                 "<p>(BETA) This is the new SMARTi app, it is like Siri and Alexa. We have a ton of fetures and can beat everything else on the internet!</p>",
                 "<button onclick='window.location.href=`https://ayaan-codes.github.io/aco-smarti/`;'>Try it early!</button>"],

            ]];

function gnomeSort(arr, n)
{
    let index = 0;

    while (index < n) {
        if (index == 0)
            index++;
        if (arr[index][1] >= arr[index - 1][1])
            index++;
        else {
            let temp = 0;
            temp = arr[index];
            arr[index] = arr[index - 1];
            arr[index - 1] = temp;
            index--;
        }
    }
    return;
}

let matches = []
if (search_query != null) {
   for (i = 0; i < products.length; i++) {
      const search_index = products[i].toLowerCase().search(search_query.toLowerCase());
      if (search_index != -1) {
          matches.push([i, search_index]);
      }
   }
   if (matches.length != 1) {
      gnomeSort(matches, matches.length)
   }
  
   for (i = 0; i < matches.length; i++) {
      for (y = 0; y < card_slot_content[i].length; y++) {
          card_slots[i].innerHTML += card_slot_content[matches[i][0]][y];
      }
   }
}

for (i = 0; i < card_slots.length; i++) {
   if (card_slots[i].childNodes.length < 2) {
      card_slots[i].remove();
   }
}
