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
    text: "#e9e0d9ff",
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
          x: 35.25, y: 62, width: 250, rotation: -8, zIndex: 2,
          mobile: { x: 80.5, y: 59, width: 125, rotation: -6 }
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
          x: 24, y: 48, width: 360, rotation: -5, zIndex: 2,
          mobile: { x: 49, y: 26, width: 338, rotation: -2 }
        },
        {
          kind: "paper", paperStyle: "crumpled", title: "Ceremony, Dinner, & Dancing",
          body: "<b>Saturday, May 15</b>\n5:30–9:00 PM\n\n<b>Neptune Room</b>\n13 Greenpoint Ave.\nBrooklyn, NY 11222\n\nFormal attire",
          x: 51, y: 44, width: 420, rotation: 0, zIndex: 3,
          mobile: { x: 51, y: 57, width: 365, rotation: 1 }
        },
        {
          kind: "paper", paperStyle: "crumpled", title: "Afters",
          body: "<b>Saturday, May 15</b>\n10:00 PM–late\n\n<b>Jupiter Disco</b>\n1237 Flushing Ave.\nBrooklyn, NY 11237\n\nAges 21+",
          x: 77, y: 48, width: 330, rotation: 5, zIndex: 2,
          mobile: { x: 50, y: 88, width: 330, rotation: -1 }
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
          x: 38, y: 50, width: 380, rotation: -3, zIndex: 2,
          mobile: { x: 50, y: 37.5, width: 250, rotation: -2 }
        },
        {
          kind: "image", src: "assets/Letter.png", alt: "Decorative open envelope",
          x: 62, y: 48, width: 300, rotation: 5, zIndex: 1,
          mobile: { x: 50, y: 78, width: 295, rotation: 3 }
        },
        {
          kind: "button", label: "RSVP here",
          href: "https://withjoy.com/christopher-and-michael-may-2027/rsvp?utm_medium=web&utm_source=joy&utm_campaign=share_website_dialog",
          x: 62.5, y: 48, width: 360, rotation: 3.1, zIndex: 3,
          mobile: { x: 50, y: 79, width: 280, rotation: 1.5 }
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
          x: 50, y: 47, width: 600, rotation: 0, zIndex: 1,
          mobile: { x: 49, y: 42, width: 360, rotation: -1 }
        },
        {
          kind: "image", src: "assets/HeartClam.png", alt: "Heart-shaped oyster shell with a pearl",
          x: 70, y: 68, width: 340, rotation: 8, zIndex: 2,
          mobile: { x: 78, y: 55, width: 150, rotation: 5 }
        }
      ]
    },

    {
      id: "recommendations",
      type: "cards",
      heading: "Neighborhood Recommendations",
      columns: 6,
      cards: [
        { title: "Coffee", body: "ACRE,\nVariety Coffee,\nPaloma,\nLand To Sea,\nHomecoming,\nSEY Coffee (for real coffee heads...),\nKettl Tea (for tea drinkers...)" },
        { title: "Breakfast", body: "Edith's Sandwich Counter,\nRadio Bakery (go early...),\nFrankel's Delicatessen,\nThree Decker Diner,\nKing David Tacos" },
        { title: "Lunch", body: "Paulie Gee’s Slice Shop,\nTaqueria Ramirez,\nEsse Taco,\nVeselka Williamsburg,\nImpasto,\nMariscos El Submarino" },
        { title: "Dinner", body: "Eyval,\nWin Son,\nRule Of Thirds,\nBeco,\nDi An Di,\nBernie's,\nColonia Verde" },
        { title: "Drinks", body: "Lovebirds,\nTroost,\nLittle Rascal,\nEl Pingüino,\nKarasu,\nAnaïs" },
        { title: "Sights", body: "Ornithology Jazz Club,\nThe Noguchi Museum,\nGantry Plaza State Park,\nFort Greene Park" }
      ]
    }
  ]
};
