
/*
  EDIT THIS FILE TO CUSTOMIZE THE SITE.

  The most important settings are:
  1. site.theme
  2. site.navigation
  3. site.pages
  4. each item's x, y, width, rotation, and zIndex

  x and y are percentages of the page canvas.
  Example: x: 50, y: 50 centers an item.

  Supported page types:
  - "canvas": freely positioned paper, image, photo, and button objects
  - "cards": responsive grid of cards
*/

const site = {
  coupleNames: "Christopher & Michael",
  date: "May 15, 2027",
  location: "New York City",

  theme: {
    background: "#111111",
    backgroundImage: "assets/WhiteRoses.jpg", 
    text: "#eeeeea",
    paper: "#f3f0e8",
    paperText: "#252525",
    accent: "#b7c7d8",
    bodyFont: '"XanhMono-Regular',
    displayFont: '"Playground"', // displayFont: 'Georgia, "Times New Roman", serif'
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
      heading: "",
      intro: "",
      items: [
        {
          kind: "paper",
          title: "Christopher & Michael",
          body: "May 15, 2027\nNew York City",
          x: 58, y: 45, width: 480, rotation: -2, zIndex: 1
        },
        {
          kind: "image",
          src: "assets/Gay_Guys.png",
          alt: "Decorative object placeholder",
          x: 35, y: 62, width: 210, rotation: -8, zIndex: 3
        },
        {
          kind: "image",
          src: "assets/Gay_Guys_Shadow1.png",
          alt: "Decorative object placeholder",
          x: 35.25, y: 62, width: 210, rotation: -8, zIndex: 2
        }
      ]
    },

    {
      id: "weekend",
      type: "canvas",
      heading: "Weekend Schedule",
      // intro: "Use one paper object for each event. Move, resize, rotate, duplicate, or delete them.",
      items: [
        {
          kind: "paper",
          paperStyle: "crumpled",
          title: "Welcome Party",
          body: "<b>Friday, May 14</b>\n7:30–10:30 PM\n\n<b>Lovebirds</b>\n211 Nassau Ave.\nBrooklyn, NY 11222\n\nCocktail attire",
          x: 24, y: 48, width: 360, rotation: -5, zIndex: 2
        },
        {
          kind: "paper",
          paperStyle: "crumpled",
          title: "Ceremony, Dinner, & Dancing",
          body: "<b>Saturday, May 15</b>\n5:30–9:00 PM\n\n<b>Neptune Room</b>\n13 Greenpoint Ave.\nBrooklyn, NY 11222\n\nFormal attire",
          x: 51, y: 44, width: 390, rotation: 0, zIndex: 3
        },
        {
          kind: "paper",
          paperStyle: "crumpled",
          title: "Afters",
          body: "<b>Saturday, May 15</b>\n10:00 PM–late\n\n<b>Jupiter Disco</b>\n1237 Flushing Ave.\nBrooklyn, NY 11237\n\nAges 21+",
          x: 77, y: 48, width: 330, rotation: 5, zIndex: 2
        }
      ]
    },

    {
      id: "travel",
      type: "canvas",
      heading: "Stay + Travel",
      intro: "",
      items: [
        {
          kind: "paper",
          title: "Hotels in the area",
          links: [
            { label: "The Penny Hotel", href: "https://www.penny-hotel.com/" },
            { label: "The Hoxton", href: "https://thehoxton.com/williamsburg/" },
            { label: "Coda Williamsburg", href: "https://www.codahotels.com/" },
            { label: "Wythe Hotel", href: "https://www.wythehotel.com/" }
          ],
          x: 27, y: 52, width: 410, rotation: -2, zIndex: 1
        },
        {
          kind: "paper",
          title: "Air Travel",
          body: "For guests flying in, LaGuardia (LGA) is the closest airport to the venue. JFK and Newark are also great options and may offer more flight choices. For taxis from the airport, use the official taxi stand outside the terminal!",
          x: 61, y: 44, width: 300, rotation: -5, zIndex: 1
        },
        {
          kind: "paper",
          title: "Ground Travel",
          body: "The easiest way to get around NYC is by subway, bus, Uber/Lyft, or yellow taxi. Subway & bus fare can be paid directly at the turnstile using Apple Pay or a contactless credit card... RIP MetroCard &lt;/3",
          x: 82, y: 56, width: 320, rotation: 4, zIndex: 3
        },
        {
          kind: "image",
          src: "assets/KissingSwanTowels.png",
          alt: "Replace with a travel photograph",
          x: 40, y: 28, width: 250, rotation: 7, zIndex: 4
        },
        {
          kind: "image",
          src: "assets/HotAirBalloonOfLove1.png",
          alt: "Replace with a travel photograph",
          x: 75, y: 11, width: 250, rotation: 0, zIndex: 4
        },
        {
          kind: "image",
          src: "assets/HotAirBalloonOfLove2.png",
          alt: "Replace with a travel photograph",
          x: 81, y: 11, width: 200, rotation: 0, zIndex: 3
        }
      ]
    },

    {
      id: "rsvp",
      type: "canvas",
      heading: "RSVP",
      intro: "",
      items: [
        {
          kind: "image",
          src: "assets/EngagementParty.png",
          alt: "Decorative RSVP illustration",
          x: 38, y: 50, width: 300, rotation: -3, zIndex: 2
        },
        {
          kind: "image",
          src: "assets/Letter.png",
          alt: "Decorative RSVP illustration",
          x: 62, y: 48, width: 300, rotation: 5, zIndex: 1
        },
        {
          kind: "button",
          label: "RSVP here",
          href: "https://withjoy.com/christopher-and-michael-may-2027/rsvp?utm_medium=web&utm_source=joy&utm_campaign=share_website_dialog",
          x: 62.5, y: 48, width: 360, rotation: 3.1, zIndex: 3
        }
      ]
    },

    {
      id: "registry",
      type: "canvas",
      heading: "Registry",
      intro: "",
      items: [
        {
          kind: "paper",
          // title: "Registry",
          body: "Celebrating with you is the best gift we could receive. If you'd like to help us begin this next chapter, we've created a registry below with a few things we'd truly appreciate.",
          links: [{ label: "View our registry", href: "https://withjoy.com/christopher-and-michael-may-2027/registry?utm_medium=web&utm_source=joy&utm_campaign=share_website_dialog" }],
          x: 50, y: 47, width: 600, rotation: 0, zIndex: 1
        },
        {
          kind: "image",
          src: "assets/HeartClam.png",
          alt: "Decorative registry object",
          x: 74, y: 70, width: 220, rotation: 8, zIndex: 2
        }
      ]
    },

    {
      id: "recommendations",
      type: "cards",
      heading: "Greenpoint",
      intro: "Below are some of our recommendations near the venue (in Greenpoint & Williamsburg), but feel free to reach out if you want to explore a different neighborhood. Chris & Michael have lived all over the city.",
      columns: 6,
      cards: [
        { title: "Coffee", body: "ACRE,\nVariety Coffee,\nPaloma,\nLand To Sea,\nBakeri,\nHomecoming,\nSEY Coffee (for real coffee heads...)" },
        { title: "Breakfast", body: "Frankel's Delicatessen,\nRadio Bakery,\nSTOWAWAY,\nThree Decker Diner" },
        { title: "Lunch", body: "Taqueria Ramirez,\nPaulie Gee’s Slice Shop,\nMariscos El Submarino,\nOH MERCY" },
        { title: "Dinner", body: "Rule Of Thirds,\nBeco,\nEyval,\nWin Son,\nVeselka Williamsburg,\nDi An Di,\nBernie's" },
        { title: "Drinks", body: "Troost,\nLittle Rascal,\nEl Pingüino,\nThe Gutter" },
        { title: "Sights", body: "The Noguchi Museum,\nDomino Park,\nMarsha P. Johnson State Park,\nMuseum of the Moving Image,\nKingsland Wildflowers"}
      ]
    }
  ]
};
