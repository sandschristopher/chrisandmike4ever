const site = {
  coupleNames: "Christopher & Michael",
  date: "May 15, 2027",
  location: "New York City",

  layout: {
    desktop: { width: 1600, height: 900 },
    mobile: { width: 430, height: 932 },
    mobileBreakpoint: 700
  },

  theme: {
    background: "#111111",
    backgroundImage: "assets/WhiteRoses.jpg",
    text: "#222625",
    paper: "#e9e0d9ff",
    paperText: "#222625",
    accent: "#b7c7d8",
    bodyFont: '"XanhMono-Regular", "Courier New", monospace',
    displayFont: '"Playground", Georgia, serif'
  },

  navigation: [
    { label: "Home", pageId: "home" },
    { label: "Weekend", pageId: "weekend" },
    { label: "Stay + Travel", pageId: "travel" },
    { label: "RSVP", pageId: "rsvp" },
    { label: "Registry", pageId: "registry" },
    { label: "Recs", pageId: "recommendations" }
  ],

  pages: [
    {
      id: "home",
      type: "canvas",
      items: [
        {
          kind: "paper",
          title: "Christopher & Michael",
          body: "May 15, 2027\nNew York City",
          x: 58, y: 45, width: 600, rotation: -2, zIndex: 1,
          mobile: { x: 52, y: 50, width: 360, rotation: -2 }
        },
        {
          kind: "image",
          src: "assets/Gay_Guys.png",
          alt: "Illustration of Christopher and Michael holding hands",
          x: 35, y: 62, width: 250, rotation: -8, zIndex: 3,
          mobile: { x: 80, y: 59, width: 125, rotation: -6 }
        },
        {
          kind: "image",
          src: "assets/Gay_Guys_Shadow1.png",
          alt: "",
          x: 35.25, y: 62, width: 250, rotation: -8, zIndex: 2, blur: 1.5,
          mobile: { x: 80.5, y: 59, width: 125, rotation: -6, blur: 1.5 }
        }
      ]
    },

    {
      id: "weekend",
      type: "canvas",
      heading: "Weekend Schedule",
      items: [
        {
          kind: "paper", paperStyle: "crumpled", title: "Welcome Party",
          body: "<b>Friday, May 14</b>\n7:30–10:30 PM\n\n<b>Lovebirds</b>\n211 Nassau Ave.\nBrooklyn, NY 11222\n\nCocktail attire",
          x: 23, y: 52, width: 360, rotation: -5, zIndex: 2,
          mobile: { x: 49, y: 26, width: 338, rotation: -2 }
        },
        {
          kind: "paper", paperStyle: "crumpled", title: "Ceremony, Dinner, & Dancing",
          body: "<b>Saturday, May 15</b>\n5:30–9:00 PM\n\n<b>Neptune Room</b>\n13 Greenpoint Ave.\nBrooklyn, NY 11222\n\nFormal attire",
          x: 50, y: 48, width: 420, rotation: 0, zIndex: 3,
          mobile: { x: 51, y: 57, width: 365, rotation: 1 }
        },
        {
          kind: "paper", paperStyle: "crumpled", title: "Afters...",
          body: "<b>Saturday, May 15</b>\n10:00 PM–late\n\n<b>Jupiter Disco</b>\n1237 Flushing Ave.\nBrooklyn, NY 11237\n\nMusic by <b>Love Injection</b>\nAges 21+",
          x: 77, y: 52, width: 330, rotation: 5, zIndex: 2,
          mobile: { x: 50, y: 87, width: 330, rotation: -1 }
        }
      ]
    },

    {
      id: "travel",
      type: "canvas",
      heading: "Stay + Travel",
      items: [
        {
          kind: "paper", title: "Hotels in the area",
          links: [
            { label: "The Penny Hotel", href: "https://www.penny-hotel.com/" },
            { label: "The Hoxton", href: "https://thehoxton.com/williamsburg/" },
            { label: "Henry Norman Hotel", href: "https://henrynormanhotel.com/" },
            { label: "Coda Williamsburg", href: "https://www.codahotels.com/" },
            { label: "Wythe Hotel", href: "https://www.wythehotel.com/" }
          ],
          x: 27, y: 52, width: 410, rotation: -2, zIndex: 1,
          mobile: { x: 49, y: 26, width: 350, rotation: -1 }
        },
        {
          kind: "image", src: "assets/KissingSwanTowels.png", alt: "Two swan-shaped towels",
          x: 38, y: 32, width: 320, rotation: 7, zIndex: 4,
          mobile: { x: 81, y: 13, width: 155, rotation: 6 }
        },
        {
          kind: "paper", title: "Air Travel",
          body: "For guests flying in, LaGuardia (LGA) is the closest airport to the venue. JFK and Newark are also great options and may offer more flight choices. For taxis from the airport, use the official taxi stand outside the terminal!",
          x: 61, y: 44, width: 300, rotation: -5, zIndex: 1,
          mobile: { x: 49, y: 57, width: 352, rotation: 1 }
        },
        {
          kind: "paper", title: "Ground Travel",
          body: "The easiest way to get around NYC is by subway, bus, Uber/Lyft, or yellow taxi. Subway & bus fare can be paid directly at the turnstile using Apple Pay or a contactless credit card... RIP MetroCard &lt;/3",
          x: 82, y: 56, width: 320, rotation: 4, zIndex: 3,
          mobile: { x: 49, y: 83, width: 352, rotation: -1 }
        },
        {
          kind: "image", src: "assets/HotAirBalloonOfLove1.png", alt: "Heart-patterned hot-air balloon",
          x: 75, y: 18, width: 250, rotation: 0, zIndex: 4,
          mobile: { x: 70, y: 47, width: 110, rotation: -5 }
        },
        {
          kind: "image", src: "assets/HotAirBalloonOfLove2.png", alt: "Heart-shaped hot-air balloon",
          x: 81, y: 11, width: 200, rotation: 0, zIndex: 3,
          mobile: { x: 83, y: 46, width: 105, rotation: 5 }
        }
      ]
    },

    {
      id: "rsvp",
      type: "canvas",
      heading: "RSVP",
      items: [
        {
          kind: "image", src: "assets/EngagementParty.png", alt: "Christopher and Michael at their engagement party",
          x: 37, y: 50, width: 380, rotation: -3, zIndex: 2,
          mobile: { x: 40, y: 40, width: 300, rotation: -2, zIndex: 1 }
        },
        {
          kind: "image", src: "assets/Letter.png", alt: "Decorative open envelope",
          x: 63, y: 50, width: 300, rotation: 5, zIndex: 1,
          mobile: { x: 65, y: 68, width: 295, rotation: 3, zIndex: 2}
        },
        {
          kind: "button", label: "RSVP here",
          href: "https://withjoy.com/christopher-and-michael-may-2027/rsvp?utm_medium=web&utm_source=joy&utm_campaign=share_website_dialog",
          x: 63.5, y: 48, width: 360, rotation: 3.1, zIndex: 3,
          mobile: { x: 65.25, y: 70, width: 280, rotation: 2, zIndex: 3 }
        }
      ]
    },

    {
      id: "registry",
      type: "canvas",
      heading: "Registry",
      items: [
        {
          kind: "paper",
          body: "Celebrating with you is the best gift we could receive. If you'd like to help us begin this next chapter, we've created a registry below with a few things we'd truly appreciate.",
          links: [{ label: "View our registry", href: "https://withjoy.com/christopher-and-michael-may-2027/registry?utm_medium=web&utm_source=joy&utm_campaign=share_website_dialog" }],
          x: 50, y: 50, width: 600, rotation: 0, zIndex: 1,
          mobile: { x: 49, y: 50, width: 360, rotation: -1 }
        },
        {
          kind: "image", src: "assets/HeartClam.png", alt: "Heart-shaped oyster shell with a pearl",
          x: 70, y: 71, width: 340, rotation: 8, zIndex: 2,
          mobile: { x: 78, y: 63, width: 150, rotation: 5 }
        }
      ]
    },
    {
      id: "recommendations",
      type: "cards",
      heading: "",
      map: {
        maxZoom: 14,
        places: [
            {
              "title": "ACRE",
              "category": "Coffee",
              "lat": 40.726281,
              "lng": -73.954699,
              "neighborhood": "Greenpoint",
              "description": "Japanese comfort food restaurant with a little coffee shop in the front. Great espresso, matcha, and pastries!",
              "href": "https://www.google.com/maps/search/?api=1&query=ACRE%20Brooklyn%20NY"
            },
            {
              "title": "Variety Coffee",
              "category": "Coffee",
              "lat": 40.723251,
              "lng": -73.944260,
              "neighborhood": "Greenpoint",
              "description": "Iconic NYC coffee shop... great almond crossaints!",
              "href": "https://www.google.com/maps/search/?api=1&query=Variety%20Coffee%20Brooklyn%20NY"
            },
            {
              "title": "Paloma",
              "category": "Coffee",
              "lat": 40.730493,
              "lng": -73.954918,
              "neighborhood": "Greenpoint",
              "description": "Another great spot for coffe & pastries.",
              "href": "https://www.google.com/maps/search/?api=1&query=Paloma%20Brooklyn%20NY"
            },
            {
              "title": "Land To Sea",
              "category": "Coffee",
              "lat": 40.716882,
              "lng": -73.944640,
              "neighborhood": "Williamsburg",
              "description": "Right down the street from Chris's first NYC apartment... great Chinese pastries & excellent coffee drinks.",
              "href": "https://www.google.com/maps/search/?api=1&query=Land%20To%20Sea%20Brooklyn%20NY"
            },
            {
              "title": "Homecoming",
              "category": "Coffee",
              "lat": 40.730857,
              "lng": -73.956864,
              "neighborhood": "Greenpoint",
              "description": "Solid coffee shop.",
              "href": "https://www.google.com/maps/search/?api=1&query=Homecoming%20Brooklyn%20NY"
            },
            {
              "title": "SEY Coffee",
              "category": "Coffee",
              "lat": 40.705103,
              "lng": -73.923631,
              "neighborhood": "Bushwick",
              "description": "For serious coffee lovers...",
              "href": "https://www.google.com/maps/search/?api=1&query=SEY%20Coffee%20Brooklyn%20NY"
            },
            {
              "title": "Kettl Tea",
              "category": "Coffee",
              "lat": 40.730131,
              "lng": -73.954600,
              "neighborhood": "Greenpoint",
              "description": "Japanese tea served with care & precision.",
              "href": "https://www.google.com/maps/search/?api=1&query=Kettl%20Tea%20Brooklyn%20NY"
            },
            {
              "title": "Edith's Sandwich Counter",
              "category": "Breakfast",
              "lat": 40.717640,
              "lng": -73.958360,
              "neighborhood": "Williamsburg",
              "description": "A favorite for breakfast sandwiches... get the iced café slushie.",
              "href": "https://www.google.com/maps/search/?api=1&query=Edith%27s%20Sandwich%20Counter%20Brooklyn%20NY"
            },
            {
              "title": "Radio Bakery",
              "category": "Breakfast",
              "lat": 40.731379,
              "lng": -73.955442,
              "neighborhood": "Greenpoint",
              "description": "Excellent pastries and sandwiches! but go early!",
              "href": "https://www.google.com/maps/search/?api=1&query=Radio%20Bakery%20Brooklyn%20NY"
            },
            {
              "title": "Frankel's Delicatessen",
              "category": "Breakfast",
              "lat": 40.730506,
              "lng": -73.954933,
              "neighborhood": "Greenpoint",
              "description": "Insanely good bagels... vegetarians, get the heirloom tomato bagel.",
              "href": "https://www.google.com/maps/search/?api=1&query=Frankel%27s%20Delicatessen%20Brooklyn%20NY"
            },
            {
              "title": "Three Decker Diner",
              "category": "Breakfast",
              "lat": 40.730132,
              "lng": -73.954089,
              "neighborhood": "Greenpoint",
              "description": "A classic neighborhood diner experience.",
              "href": "https://www.google.com/maps/search/?api=1&query=Three%20Decker%20Diner%20Brooklyn%20NY"
            },
            {
              "title": "King David Tacos",
              "category": "Breakfast",
              "lat": 40.677480,
              "lng": -73.972300,
              "neighborhood": "Prospect Heights",
              "description": "Austin-style breakfast tacos.",
              "href": "https://www.google.com/maps/search/?api=1&query=King%20David%20Tacos%20Brooklyn%20NY"
            },
            {
              "title": "Paulie Gee’s Slice Shop",
              "category": "Lunch",
              "lat": 40.729600,
              "lng": -73.957710,
              "neighborhood": "Greenpoint",
              "description": "Yummy pizza.",
              "href": "https://www.google.com/maps/search/?api=1&query=Paulie%20Gee%E2%80%99s%20Slice%20Shop%20Brooklyn%20NY"
            },
            {
              "title": "Taqueria Ramirez",
              "category": "Lunch",
              "lat": 40.729288,
              "lng": -73.954144,
              "neighborhood": "Greenpoint",
              "description": "Small counter-service taqueria with great tacos.",
              "href": "https://www.google.com/maps/search/?api=1&query=Taqueria%20Ramirez%20Brooklyn%20NY"
            },
            {
              "title": "Esse Taco",
              "category": "Lunch",
              "lat": 40.719493,
              "lng": -73.958021,
              "neighborhood": "Williamsburg",
              "description": "A compact CDMX taco stop ideal for a quick lunch...so yum.",
              "href": "https://www.google.com/maps/search/?api=1&query=Esse%20Taco%20Brooklyn%20NY"
            },
            {
              "title": "Veselka Williamsburg",
              "category": "Lunch",
              "lat": 40.716421,
              "lng": -73.949463,
              "neighborhood": "Williamsburg",
              "description": "Ukrainian comfort food in Williamsburg.",
              "href": "https://www.google.com/maps/search/?api=1&query=Veselka%20Williamsburg%20Brooklyn%20NY"
            },
            {
              "title": "Impasto",
              "category": "Lunch",
              "lat": 40.686739,
              "lng": -73.966104,
              "neighborhood": "Clinton Hill",
              "description": "Yummy roman-style pizza.",
              "href": "https://www.google.com/maps/search/?api=1&query=Impasto%20Brooklyn%20NY"
            },
            {
              "title": "Mariscos El Submarino",
              "category": "Lunch",
              "lat": 40.733276,
              "lng": -73.957870,
              "neighborhood": "Greenpoint",
              "description": "Fun cocktails and crazy good aguachile & tacos.",
              "href": "https://www.google.com/maps/search/?api=1&query=Mariscos%20El%20Submarino%20Brooklyn%20NY"
            },
            {
              "title": "Eyval",
              "category": "Dinner",
              "lat": 40.705524,
              "lng": -73.922673,
              "neighborhood": "Bushwick",
              "description": "Modern Persian cooking and one of Chris's favorites.",
              "href": "https://www.google.com/maps/search/?api=1&query=Eyval%20Brooklyn%20NY"
            },
            {
              "title": "Win Son",
              "category": "Dinner",
              "lat": 40.707452,
              "lng": -73.943379,
              "neighborhood": "Williamsburg",
              "description": "Taiwanese-American dishes that are crazy good. This is where Michael first met Chris's mom!",
              "href": "https://www.google.com/maps/search/?api=1&query=Win%20Son%20Brooklyn%20NY"
            },
            {
              "title": "Rule Of Thirds",
              "category": "Dinner",
              "lat": 40.727111,
              "lng": -73.955720,
              "neighborhood": "Greenpoint",
              "description": "Japanese-inspired cooking in a beautiful space.",
              "href": "https://www.google.com/maps/search/?api=1&query=Rule%20Of%20Thirds%20Brooklyn%20NY"
            },
            {
              "title": "Beco",
              "category": "Dinner",
              "lat": 40.718358,
              "lng": -73.950448,
              "neighborhood": "Williamsburg",
              "description": "One of Chris's favorites...a cozy Brazilian restaurant.",
              "href": "https://www.google.com/maps/search/?api=1&query=Beco%20Brooklyn%20NY"
            },
            {
              "title": "Bernie's",
              "category": "Dinner",
              "lat": 40.729910,
              "lng": -73.957196,
              "neighborhood": "Greenpoint",
              "description": "Fancy Applebees that is lowkey a vibe... kind of hard to get a table so go early!",
              "href": "https://www.google.com/maps/search/?api=1&query=Bernie%27s%20Brooklyn%20NY"
            },
            {
              "title": "Colonia Verde",
              "category": "Dinner",
              "lat": 40.689743,
              "lng": -73.968636,
              "neighborhood": "Clinton Hill",
              "description": "AMAZING Latin American cooking & cocktails.",
              "href": "https://www.google.com/maps/search/?api=1&query=Colonia%20Verde%20Brooklyn%20NY"
            },
            {
              "title": "Lovebirds",
              "category": "Drinks",
              "lat": 40.725845,
              "lng": -73.944200,
              "neighborhood": "Greenpoint",
              "description": "Wine bar where Michael and Chris celebrated their first Valentine's Day together.",
              "href": "https://www.google.com/maps/search/?api=1&query=Lovebirds%20Brooklyn%20NY"
            },
            {
              "title": "Troost",
              "category": "Drinks",
              "lat": 40.733463,
              "lng": -73.955095,
              "neighborhood": "Greenpoint",
              "description": "One of Chris's favorite dive bar!",
              "href": "https://www.google.com/maps/search/?api=1&query=Troost%20Brooklyn%20NY"
            },
            {
              "title": "Little Rascal",
              "category": "Drinks",
              "lat": 40.729372,
              "lng": -73.957263,
              "neighborhood": "Greenpoint",
              "description": "Cocktails in a cozy atmosphere.",
              "href": "https://www.google.com/maps/search/?api=1&query=Little%20Rascal%20Brooklyn%20NY"
            },
            {
              "title": "El Pingüino",
              "category": "Drinks",
              "lat": 40.729841,
              "lng": -73.957428,
              "neighborhood": "Greenpoint",
              "description": "Seafood & martinis!",
              "href": "https://www.google.com/maps/search/?api=1&query=El%20Ping%C3%BCino%20Brooklyn%20NY"
            },
            {
              "title": "Karasu",
              "category": "Drinks",
              "lat": 40.689411,
              "lng": -73.973256,
              "neighborhood": "Boerum Hill",
              "description": "Japanese speakeasy tucked behind Walter's.",
              "href": "https://www.google.com/maps/search/?api=1&query=Karasu%20Brooklyn%20NY"
            },
            {
              "title": "Anaïs",
              "category": "Drinks",
              "lat": 40.684877,
              "lng": -73.986076,
              "neighborhood": "Boerum Hill",
              "description": "Chris's favorite wine bar.",
              "href": "https://www.google.com/maps/search/?api=1&query=Ana%C3%AFs%20Brooklyn%20NY"
            },
            {
              "title": "Ornithology Jazz Club",
              "category": "Sights",
              "lat": 40.705079,
              "lng": -73.923586,
              "neighborhood": "Bushwick",
              "description": "A favorite of Michael's...live jazz in an intimate setting.",
              "href": "https://www.google.com/maps/search/?api=1&query=Ornithology%20Jazz%20Club%20Brooklyn%20NY"
            },
            {
              "title": "The Noguchi Museum",
              "category": "Sights",
              "lat": 40.766865,
              "lng": -73.938483,
              "neighborhood": "Long Island City",
              "description": "A lovely museum devoted to Isamu Noguchi's work.",
              "href": "https://www.google.com/maps/search/?api=1&query=The%20Noguchi%20Museum%20Queens%20NY"
            },
            {
              "title": "Gantry Plaza State Park",
              "category": "Sights",
              "lat": 40.745996,
              "lng": -73.957643,
              "neighborhood": "Long Island City",
              "description": "Waterfront views of Manhattan and iconic gantries.",
              "href": "https://www.google.com/maps/search/?api=1&query=Gantry%20Plaza%20State%20Park%20Queens%20NY"
            },
            {
              "title": "Fort Greene Park",
              "category": "Sights",
              "lat": 40.692517,
              "lng": -73.974996,
              "neighborhood": "Fort Greene",
              "description": "A beautiful park for a walk or picnic. Michael's perfect Saturday includes a trip to the Ft. Greene Farmer's Market.",
              "href": "https://www.google.com/maps/search/?api=1&query=Fort%20Greene%20Park%20Brooklyn%20NY"
            },
        ]
      },
    }
  ]
};
