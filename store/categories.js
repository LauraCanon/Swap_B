const categories = [
  {
    id: 1,
    name: "Nintendo",
    icon: "nintendo-switch",
    backgroundColor: "#EC7063",
    color: "white",
  },
  {
    id: 2,
    name: "Play Station",
    icon: "sony-playstation",
    backgroundColor: "#5DADE2",
    color: "white",
  },
  {
    id: 3,
    name: "X-box",
    icon: "microsoft-xbox",
    backgroundColor: "#7DCEA0",
    color: "white",
  },
];

const getCategories = () => categories;

const getCategory = (id) => categories.find((c) => c.id === id);

module.exports = {
  getCategories,
  getCategory,
};
