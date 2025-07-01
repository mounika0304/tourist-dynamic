const touristPlaces = [
  {
    name: "Hampi, Karnataka",
    description: "An ancient village with stunning temples and monuments.",
    image: "images/place1.jpg"
  },
  {
    name: "Udaipur, Rajasthan",
    description: "The city of lakes and royal palaces.",
    image: "images/place2.jpg"
  },
  {
    name: "Darjeeling, West Bengal",
    description: "Famous for tea gardens and Himalayan views.",
    image: "images/place3.jpg"
  }
];

const gallery = document.getElementById('gallery');

touristPlaces.forEach(place => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${place.image}" alt="${place.name}">
    <h2>${place.name}</h2>
    <p>${place.description}</p>
  `;
  gallery.appendChild(card);
});
