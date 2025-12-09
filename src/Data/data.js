export const RestaurantName = "IMMA CHOPS";

export const logo = "/images/Logo.png";

export const catchyExpression = [
  { title: "GET PERFECT DIET", id: 1 },
  {
    title: "Order Healthy and Fresh Food any Time",
    id: 2,
  },
  {
    title:
      "is the best for satisfying your food cravings and healthy diet meets ",
    id: 3,
  },
  { title: "where the needs of the belly are met !", id: 4 },
];

export const NavOptions = [
  { title: "Home", id: "Hero" },
  { title: "About", id: "About" },
  { title: "Search", id: "Search" },
  { title: "Contact Us", id: "Contact" },
];

export const AboutInfo = {
  title: "About Us",
  description: `At ${RestaurantName}, we are passionate about providing delicious and healthy food options to our customers. Our mission is to promote a balanced lifestyle through nutritious meals that are both satisfying and flavorful. We believe that eating well should be an enjoyable experience, and we strive to create dishes that cater to a variety of dietary preferences and needs. We also make available local and intercontinetal dishes, with quality flavour to suit your cravings. Join us on a culinary journey that celebrates health, taste, and wellness!`,
};

export const aboutImages = [
  { id: 1, src: "/images/aboutImage1.jpg", alt: "About Image 1" },
  { id: 2, src: "/images/aboutImage2.jpg", alt: "About Image 2" },
  { id: 3, src: "/images/aboutImage3.jpg", alt: "About Image 3" },
  { id: 4, src: "/images/aboutImage4.jpg", alt: "About Image 4" },
  { id: 5, src: "/images/aboutImage5.jpg", alt: "About Image 5" },
  { id: 6, src: "/images/aboutImage6.jpg", alt: "About Image 6" },
];

export const orders = [
  {
    id: 1,
    title: "african chicken stew on rice",
    src: "/images/African chicken stew on Rice.jpg",
    price: "$15",
  },
  {
    id: 2,
    title: "coconut curry rice with grilled chicken",
    src: "/images/Coconut Curry Rice with Grilled Chicken.jpg",
    price: "$12",
  },
  {
    id: 3,
    title: "bitter leaf soup",
    src: "/images/Bitter Leaf Soup.jpg",
    price: "$25",
  },
  {
    id: 4,
    title: "egusi and fufu package",
    src: "/images/Egusi and Fufu package.jpg",
    price: "$10",
  },
  {
    id: 5,
    title: "egusi soup",
    src: "/images/Egusi Soup.jpg",
    price: "$15",
  },
  {
    id: 6,
    title: "egusi",
    src: "/images/Egusi.jpg",
    price: "$25",
  },
  {
    id: 7,
    title: "flavorful rice",
    src: "/images/Flavorful Rice.jpg",
    price: "$7",
  },
  {
    id: 9,
    title: "gizdodo plantains",
    src: "/images/Gizdodo Plantains.jpg",
    price: "$15",
  },
  {
    id: 10,
    title: "Goat meat Pepper Soup",
    src: "/images/Goat meat Pepper Soup.jpg",
    price: "$5",
  },
  {
    id: 11,
    title: "jollof rice maximum package",
    src: "/images/Jollof Rice Maximum Package.jpg",
    price: "$150",
  },
  {
    id: 12,
    title: "native pepper soup",
    src: "/images/Native Pepper Soup.jpg",
    price: "$15",
  },
  {
    id: 13,
    title: "nigerian egusi soup",
    src: "/images/Nigerian Egusi Soup.jpg",
    price: "$14",
  },
  {
    id: 14,
    title: "nigerian pepper soup",
    src: "/images/Nigerian Pepper Soup.jpg",
    price: "$15",
  },
  {
    id: 15,
    title: "nkwobi africa native food",
    src: "/images/Nkwobi Africa native food.jpg",
    price: "$18",
  },
  {
    id: 16,
    title: "nkwobi native",
    src: "/images/Nkwobi Native.jpg",
    price: "$14",
  },
  {
    id: 17,
    title: "nkwobi",
    src: "/images/Nkwobi.jpg",
    price: "$16",
  },
  {
    id: 18,
    title: "ogbono soup with bitter leaf",
    src: "/images/Ogbono Soup with bitter leaf.jpg",
    price: "$19",
  },
  {
    id: 20,
    title: "Owerri Nkwobi",
    src: "/images/Owerri Nkwobi.jpg",
    price: "$10",
  },
  {
    id: 21,
    title: "pepper soup",
    src: "/images/Pepper Soup.jpg",
    price: "$15",
  },
  {
    id: 22,
    title: "peri peri jollof rice and chicken",
    src: "/images/Peri Peri Jollof Rice and Chicken.jpg",
    price: "$16",
  },
  {
    id: 23,
    title: "rice stew and dodo",
    src: "/images/Rice Stew and Dodo.jpg",
    price: "$15",
  },
  {
    id: 24,
    title: "smoky nigerian jollof rice",
    src: "/images/Smoky Nigerian Jollof Rice.jpg",
    price: "$15",
  },
  {
    id: 25,
    title: "white rice and stew",
    src: "/images/White Rice and Stew.jpg",
    price: "$11",
  },
  {
    id: 26,
    title: "white rice, boiled egg, fried plantain package",
    src: "/images/White rice, boiled egg, fried plantain Package.jpg",
    price: "$15",
  },
  {
    id: 27,
    title: "yoruba egusi soup",
    src: "/images/Yoruba Egusi Soup.jpg",
    price: "$13",
  },
];

export function getOrder(query) {
  return orders.filter((item) => item.title.includes(query));
}

export const address = [
  {
    title: "Address",
    description:
      "The Current Street Number, local government, town, capital, state, and country of the establishment is stipulated here",
  },
];

export const socialhandles = [
  { title: "Facebook", link: "#" },
  { title: "WhatsApp", link: "#" },
  { title: "Instagram", link: "#" },
  { title: "Tic Tok", link: "#" },
  { title: "X", link: "#" },
];

export const ourContacts = [
  { id: 1, number: "(+234) 000 000 0000" },
  { id: 2, number: "(+234) 111 111 1111" },
  { id: 3, number: "(+234) 222 222 2222" },
  { id: 4, number: "(+234) 333 333 3333" },
];
