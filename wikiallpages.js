const cards = document.getElementsByClassName("card");

let card_content = [
    [["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8oE5gpw4fs_EdFLXESrR88AOx4y6a2SawQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
    "<h1>ACO</h1>",
    "<p class='price'>Corpration</p>",
    "<p>ACO is a company that...</p>",
    "<button onclick='window.location.href=`https://ayaan-codes.github.io/wikitrial/page/aco.html`;'>Wiki</button>"],

    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8oE5gpw4fs_EdFLXESrR88AOx4y6a2SawQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
    "<h1>Ayaan SM.</h1>",
    "<p class='price'>Person</p>",
    "<p>Ayaan is the founder and CEO of ACO...</p>",
    "<button onclick='window.location.href=`https://ayaan-codes.github.io/wikitrial/page/ayaan.html`;'>Wiki</button>"],

    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8oE5gpw4fs_EdFLXESrR88AOx4y6a2SawQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
    "<h1>Hello World</h1>",
    "<p class='price'>Word/Phrase</p>",
    "<p>Hello World is used in...</p>",
    "<button onclick='window.location.href=`https://ayaan-codes.github.io/wikitrial/page/hello-world.html`;'>Wiki</button>],"],

    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8oE5gpw4fs_EdFLXESrR88AOx4y6a2SawQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
 "<h1>Plans</h1>",
 "<p class='price'>Abstract Idea</p>",
 "<p>Plans are used in many cases...</p>",
 "<button onclick='window.location.href=`https://ayaan-codes.github.io/wikitrial/page/plans.html`;'>Wiki</button>"],

  ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8oE5gpw4fs_EdFLXESrR88AOx4y6a2SawQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
  "<h1>Social Media</h1>",
  "<p class='price'>Online</p>",
  "<p>Social media is...</p>",
  "<button onclick='window.location.href=`https://ayaan-codes.github.io/wikitrial/page/socialmedia.html`;'>Wiki</button>"]
  
  
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
    "ACO",
    "Ayaan",
    "Hello World",
    "Plans",
    "Social Media",
]

let card_slot_content = [["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8oE5gpw4fs_EdFLXESrR88AOx4y6a2SawQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                    "<h1>ACO</h1>",
                    "<p class='price'>Corpration</p>",
                    "<p>ACO is a company that...</p>",
                    "<button onclick='window.location.href=`https://ayaan-codes.github.io/wikitrial/page/aco.html`;'>Wiki</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8oE5gpw4fs_EdFLXESrR88AOx4y6a2SawQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                    "<h1>Ayaan SM.</h1>",
                    "<p class='price'>Person</p>",
                    "<p>Ayaan is the founder and CEO of ACO...</p>",
                    "<button onclick='window.location.href=`https://ayaan-codes.github.io/wikitrial/page/ayaan.html`;'>Wiki</button>"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8oE5gpw4fs_EdFLXESrR88AOx4y6a2SawQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                    "<h1>Hello World</h1>",
                    "<p class='price'>Word/Phrase</p>",
                    "<p>Hello World is used in...</p>",
                    "<button onclick='window.location.href=`https://ayaan-codes.github.io/wikitrial/page/hello-world.html`;'>Wiki</button>],"],

                    ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8oE5gpw4fs_EdFLXESrR88AOx4y6a2SawQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                 "<h1>Plans</h1>",
                 "<p class='price'>Abstract Idea</p>",
                 "<p>Plans are used in many cases...</p>",
                 "<button onclick='window.location.href=`https://ayaan-codes.github.io/wikitrial/page/plans.html`;'>Wiki</button>"],

                  ["<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8oE5gpw4fs_EdFLXESrR88AOx4y6a2SawQ&usqp=CAU' alt='Denim Jeans' style='width:100%'>",
                  "<h1>Social Media</h1>",
                  "<p class='price'>Online</p>",
                  "<p>Social media is...</p>",
                  "<button onclick='window.location.href=`https://ayaan-codes.github.io/wikitrial/page/socialmedia.html`;'>Wiki</button>"]];

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