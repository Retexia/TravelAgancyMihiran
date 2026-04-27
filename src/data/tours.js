import tourCover from '../assets/artem-beliaikin-pDiWpjV14F0-unsplash.jpg';
import southernCover from '../assets/kevin-olson-ScBHbYokiQE-unsplash.jpg';

export const tourPackages = [
    {
        id: 1,
        name: "7-Day Signature Sri Lanka",
        days: "7 Days",
        description: "A perfectly balanced journey through the heart of the island. From the ancient lion rock of Sigiriya to the misty highlands of Ella and the sacred temples of Kandy.",
        price: "$850",
        image: tourCover,
        itinerary: [
            { day: 1, title: "Arrival | Negombo", activities: ["Airport pick-up", "Transfer to Negombo", "Rest"], desc: "Recover from travel in the coastal town of Negombo." },
            { day: 2, title: "Negombo → Sigiriya", activities: ["Sigiriya Rock Fortress", "Sunset experience"], desc: "Climb the iconic Lion Rock and enjoy a breathtaking sunset." },
            { day: 3, title: "Sigiriya → Kandy", activities: ["Elephant safari", "Dambulla Cave Temple"], desc: "Encounter wildlife and explore ancient cave architecture." },
            { day: 4, title: "Kandy Cultural", activities: ["Temple of Tooth", "Traditional lunch"], desc: "Immerse yourself in the sacred heart of the hill capital." },
            { day: 5, title: "Kandy → Ella", activities: ["Scenic train transfer", "Ella leisure"], desc: "Experience one of the world's most beautiful train journeys." },
            { day: 6, title: "Explore Ella", activities: ["Little Adam's Peak", "Nine Arches Bridge"], desc: "Hike through lush tea estates and over architectural marvels." },
            { day: 7, title: "Departure", activities: ["Transfer to airport"], desc: "Safe travels back home with memories of the island." }
        ],
        inclusions: ["Airport pick-up/drop-off", "Private vehicle with driver", "Budget guesthouses (A/C)", "Daily breakfast", "Entrance fees"],
        exclusions: ["International flights", "Visa fees", "Lunch and dinner"]
    },
    {
        id: 2,
        name: "Southern Shores & Blue Whales",
        days: "5 Days",
        description: "A coastal escape focused on the pristine beaches of the south. From the colonial charm of Galle Fort to the majestic blue whales of Mirissa.",
        price: "$620",
        image: southernCover,
        itinerary: [
            { day: 1, title: "Arrival & Galle Fort", activities: ["Airport pick-up", "Galle Fort walk"], desc: "Explore the UNESCO-listed ramparts of the Dutch Fort." },
            { day: 2, title: "Mirissa Coastal Soul", activities: ["Beach leisure", "Coconut Tree Hill"], desc: "Relax on the golden sands and capture the perfect sunset." },
            { day: 3, title: "Whale Watching", activities: ["Boat trip", "Dolphin spotting"], desc: "Witness the majestic blue whales in their natural habitat." },
            { day: 4, title: "Weligama Surf", activities: ["Surfing lesson", "Beach BBQ"], desc: "Ride the waves and enjoy fresh seafood on the shore." },
            { day: 5, title: "Departure", activities: ["Transfer to airport"], desc: "Heading back with sun-kissed memories." }
        ],
        inclusions: ["Airport transfers", "Private vehicle", "Whale watching boat", "Surfing lesson", "Accommodation + Breakfast"],
        exclusions: ["International flights", "Personal expenses"]
    },
    {
        id: 3,
        name: "5-Day Mist & Mountains",
        days: "5 Days",
        description: "Venture into the emerald heart of Sri Lanka. Traverse the misty tea plantations of Nuwara Eliya and hike the scenic trails of Horton Plains.",
        price: "$550",
        image: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=1200",
        itinerary: [
            { day: 1, title: "Arrival | Kandy", activities: ["Pick-up", "Kandy Lake walk"], desc: "Start your mountain journey in the peaceful hill capital." },
            { day: 2, title: "Nuwara Eliya", activities: ["Blue train ride", "Tea factory"], desc: "Travel through the clouds to the 'Little England' of Sri Lanka." },
            { day: 3, title: "Horton Plains", activities: ["World's End trek", "Bakers Falls"], desc: "Stand on the edge of the world and witness raw highland nature." },
            { day: 4, title: "Ella Adventure", activities: ["Nine Arches Bridge", "Little Adam's Peak"], desc: "Discover the most charming mountain village on the island." },
            { day: 5, title: "Departure", activities: ["Transfer to airport"], desc: "Descend from the mountains for your flight home." }
        ],
        inclusions: ["All transfers", "Train tickets", "Park entrance fees", "Accommodation + Breakfast"],
        exclusions: ["International flights", "Tips"]
    },
    {
        id: 4,
        name: "6-Day Wild Safari Expedition",
        days: "6 Days",
        description: "Experience the raw beauty of Sri Lanka's wildlife. Encounter leopards in Yala and explore the untamed jungles of Udawalawe.",
        price: "$720",
        image: "https://images.unsplash.com/photo-1590418606746-018840fb9cd0?auto=format&fit=crop&q=80&w=1200",
        itinerary: [
            { day: 1, title: "Arrival | Udawalawe", activities: ["Pick-up", "Sunset safari"], desc: "Meet the elephant herds in their untamed grassland home." },
            { day: 2, title: "Elephant Home", activities: ["Feeding session", "Transfer to Yala"], desc: "Visit the transit home for baby elephants before the jungle." },
            { day: 3, title: "Yala Expedition", activities: ["Full day safari", "Picnic lunch"], desc: "A dedicated search for leopards and bears in the deep wild." },
            { day: 4, title: "Tangalle Coast", activities: ["Transfer to Tangalle", "Turtle visit"], desc: "Transition from the jungle to the wild, secluded shores." },
            { day: 5, title: "Southern Leisure", activities: ["Lagoon safari", "Beach BBQ"], desc: "Relax and enjoy the coastal wildlife of the deep south." },
            { day: 6, title: "Departure", activities: ["Transfer to airport"], desc: "Final memories of the island's wild side." }
        ],
        inclusions: ["All transfers", "4x4 Safari Jeeps", "Park fees", "Accommodation + Breakfast"],
        exclusions: ["International flights", "Dinner"]
    },
    {
        id: 5,
        name: "3-Day Galle Fort Escape",
        days: "3 Days",
        description: "A quick but immersive journey into the colonial heart of Sri Lanka. Walk the historic ramparts and enjoy boutique coastal living.",
        price: "$320",
        image: "https://images.unsplash.com/photo-1626081442111-744315264020?auto=format&fit=crop&q=80&w=1200",
        itinerary: [
            { day: 1, title: "Arrival | Galle", activities: ["Airport pick-up", "Sunset on ramparts"], desc: "Arrive at the Dutch Fort and walk the ancient walls." },
            { day: 2, title: "Fort Boutique", activities: ["Lighthouse visit", "Shopping"], desc: "Discover the charming streets and local artisan shops." },
            { day: 3, title: "Departure", activities: ["Morning swim", "Transfer to airport"], desc: "One last dip in the ocean before your flight." }
        ],
        inclusions: ["Airport transfers", "Guided walk", "Accommodation + Breakfast"],
        exclusions: ["Lunch and dinner"]
    },
    {
        id: 6,
        name: "Into the Wild",
        days: "4 Days",
        description: "A deep dive into the rainforest and untamed landscapes. Experience the raw biodiversity of Sinharaja and the hidden waterfalls of the south.",
        price: "$480",
        image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=1200",
        itinerary: [
            { day: 1, title: "Arrival | Sinharaja", activities: ["Airport pick-up", "Jungle lodge check-in"], desc: "Enter the heart of the last primeval rainforest in Sri Lanka." },
            { day: 2, title: "Rainforest Trek", activities: ["Guided jungle hike", "Bird watching"], desc: "Discover endemic species and the vibrant life under the canopy." },
            { day: 3, title: "Waterfalls & Wild", activities: ["Natural pool bath", "Night jungle walk"], desc: "Swim in hidden falls and experience the forest after dark." },
            { day: 4, title: "Departure", activities: ["Morning trek", "Transfer to airport"], desc: "Leave the wilderness behind with a soul full of nature." }
        ],
        inclusions: ["All transfers", "Jungle guide", "Accommodation + All Meals", "Park fees"],
        exclusions: ["International flights", "Personal gear"]
    }
];

export const TOURS_DATA = [
    { id: 1, title: "The Lion Rock", category: "Historical", rating: 4.9, price: "$45", image: "https://images.unsplash.com/photo-1588598136852-2999e339f416?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Kandy Temple", category: "Cultural", rating: 4.8, price: "$30", image: "https://images.unsplash.com/photo-1625736312933-7649539665bc?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Nine Arches", category: "Adventure", rating: 4.9, price: "$25", image: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Yala Safari", category: "Nature", rating: 4.7, price: "$60", image: "https://images.unsplash.com/photo-1590418606746-018840fb9cd0?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Galle Fort", category: "Historical", rating: 4.8, price: "$20", image: "https://images.unsplash.com/photo-1626081442111-744315264020?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Into the Wild", category: "Nature", rating: 4.9, price: "$55", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800" },
    { id: 7, title: "Ancient Polonnaruwa", category: "Historical", rating: 4.8, price: "$35", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800" },
    { id: 8, title: "Adam's Peak Trek", category: "Adventure", rating: 4.9, price: "$50", image: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?auto=format&fit=crop&q=80&w=800" }
];
