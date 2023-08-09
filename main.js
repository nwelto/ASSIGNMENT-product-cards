const products = [
  {
    id: 1,
    productTitle: "Yellow Dunk Cards",
    imageUrl: "https://cdn.discordapp.com/attachments/1131383681378959400/1131406357103378563/yellow-card.png",
    description: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    isAvaible: "Available",
    specifications: {
      size: "4 x 4",
      weight: "8 oz"
    },
    pricing: {
      first: "1.99",
      second: "1.49",
      third: "0.99"
    }
  },
  {
    id: 2,
    productTitle: "Red Dunk Cards",
    imageUrl: "https://cdn.discordapp.com/attachments/1131383681378959400/1131406357434732676/red-card.png",
    description: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    isAvaible: "Not-Available",
    specifications: {
      size: "3 x 3",
      weight: "6 oz"
    },
    pricing: {
      first: "2.49",
      second: "1.99",
      third: "1.49"
    }
  },
  {
    id: 3,
    productTitle: "Pink Dunk Cards",
    imageUrl: "https://cdn.discordapp.com/attachments/1131383681378959400/1131406357992587364/pink-card.png",
    description: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    isAvaible: "Available",
    specifications: {
      size: "5 x 5",
      weight: "10 oz"
    },
    pricing: {
      first: "2.99",
      second: "2.49",
      third: "1.99"
    }
  },
  {
    id: 4,
    productTitle: "Blue Dunk Cards",
    imageUrl: "https://cdn.discordapp.com/attachments/1131383681378959400/1131406357753495602/blue-card.png", 
    description: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    isAvaible: "Available",
    specifications: {
      size: "5 x 5",
      weight: "10 oz"
    },
    pricing: {
      first: "2.99",
      second: "2.49",
      third: "1.99"
    }
  },
  {
    id: 5,
    productTitle: "Gold Dunk Cards",
    description: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    isAvaible: "Not-Available",
    specifications: {
      size: "1x1",
      weight: "8oz.",
      valid: "1/1/24"
    },
    pricing: {
      first: `$1.99`,
      second: `$1.49`,
      third: `$0.99`,
    },
    imageUrl: "https://cdn.discordapp.com/attachments/1131383681378959400/1131406357103378563/yellow-card.png",
  },
  {
    id: 6,
    productTitle: "Scarlet Dunk Card",
    description: "Take your basketball skills to new heights with Dunk Cards, the innovative and interactive training tool that brings excitement and progress to every practice session.",
    isAvaible: "Available",
    specifications: {
      size: "1x1",
      weight: "8oz.",
      valid: "1/1/24"
    },
    pricing: {
      first: `$1.99`,
      second: `$1.49`,
      third: `$0.99`,
    },
    imageUrl: "https://cdn.discordapp.com/attachments/1131383681378959400/1131406357434732676/red-card.png",
  },
];
  
  

const cardsOnDom = (cards) => {
  let domString = "";

  for (let card of cards) {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title header text-center">${card.productTitle}</h2>
          
          <img src="${card.imageUrl}" class="card-img-top" alt="${card.productTitle}">
          <p class="card-text">${card.description}</p>
          <p class="availability">${card.isAvaible}</p>
    
          <section class="specifications px-2">
            <p class="specfont my-0">Specifications</p>
            <p class="px-3 fw-bold my-0">Size: ${card.specifications.size}</p>
            <p class="px-3 fw-bold my-0">Weight: ${card.specifications.weight}</p>
          </section>
    <p class="expiration my-0">Specifications valid until 04/15/2026</p>
          <section class="pricing px-2 my-0">
            <p class="specfont my-0">Pricing</p>
            <p class="px-3 fw-bold my-0">1: ${card.pricing.first}</p>
            <p class="px-3 fw-bold my-0">2-50: ${card.pricing.second}</p>
            <p class="px-3 fw-bold my-0">51+: ${card.pricing.third}</p>
          </section>
        </div>
      </div>
    `;
  }

  
  document.getElementById("cardsContainer").innerHTML = domString;
}

cardsOnDom(products);
