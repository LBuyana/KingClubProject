import deluxeRoom from '../assets/images/Accomodation/Accomodation 2.jpg';
import executiveRoom from '../assets/images/Accomodation/Accomodation 3.jpg';
import familySuite from '../assets/images/Accomodation/accomodation 1.jpg';

export const rooms = [
  {
    title: 'Deluxe Room',
    category: 'Deluxe',
    guests: '2 Guests',
    bed: 'King Bed',
    size: '32 m²',
    price: 'R1,850 / night',
    description: 'A calm, elegant retreat with premium linen, soft lighting, and a spacious lounge area.',
    image: deluxeRoom,
  },
  {
    title: 'Executive Suite',
    category: 'Executive',
    guests: '3 Guests',
    bed: 'Queen Bed',
    size: '45 m²',
    price: 'R2,450 / night',
    description: 'Designed for business stays and longer visits, with a refined seating area and elevated comfort.',
    image: executiveRoom,
  },
  {
    title: 'Royal Suite',
    category: 'Suites',
    guests: '4 Guests',
    bed: 'King Bed',
    size: '60 m²',
    price: 'R3,200 / night',
    description: 'An indulgent suite with a private lounge, statement views, and a luxurious bath experience.',
    image: familySuite,
  },
  {
    title: 'Family Residence',
    category: 'Family',
    guests: '5 Guests',
    bed: 'Twin Beds',
    size: '58 m²',
    price: 'R2,900 / night',
    description: 'Perfect for family stays, offering flexible sleeping arrangements and generous communal space.',
    image: deluxeRoom,
  },
];
