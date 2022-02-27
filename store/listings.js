const listings = [
  {
    id: 201,
    title: "Legend of Zelda - Breath of the Wild 2",
    images: [{ fileName: "Zelda2" }],
    console: "Nintendo",
    categoryId: 1,
    userId: 1,
  },
  {
    id: 3,
    title: "Call of Duty - Black Ops III",
    images: [{ fileName: "callofduty" }],
    categoryId: 2,
    console: "Play Station",
    userId: 2,
  },
  {
    id: 1,
    title: "Gears of War II",
    description: "Hi, i wanna swap this game. Any interested?",
    images: [{ fileName: "Gears2" }],
    console: "X-box",
    categoryId: 3,
    userId: 2,
  },
  {
    id: 2,
    title: "Super Smash Bros",
    images: [{ fileName: "smash2" }],
    categoryId: 1,
    console: "Nintendo",
    userId: 1,
  },
  {
    id: 102,
    title: "God of War - Chains of Olympus",
    images: [{ fileName: "godofwar" }],
    console: "Play Station",
    categoryId: 2,
    userId: 1,
  },
  {
    id: 101,
    title: "Halo",
    images: [{ fileName: "halo" }],
    console: "X-box",
    categoryId: 3,
    userId: 1,
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
