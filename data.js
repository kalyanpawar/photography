// ============================================================
//  EDIT THIS FILE to change text, photos, reviews and links.
//  Photos live in the "images" folder. Put the file there,
//  then add or change a line below. Keep commas between items.
// ============================================================
const SITE = {
    name: "Amol Surve",
    business: "Amol Surve Photography",
    tagline: "Weddings, portraits and stories worth keeping.",
    about: "Based in Shrirampur, Ahilyanagar, I’m passionate about capturing beautiful moments, emotions, and stories through my lens. I specialize in photography that feels natural, creative, and timeless. Every client can expect a friendly experience, attention to detail, and memories captured with love.",

    // Big slider at the top (3 to 5 of the best photos)
    hero: [
        { src: "images/hero1.jpg", caption: "Wedding" },
        { src: "images/hero2.jpg", caption: "Prewedding" },
        { src: "images/hero3.jpg", caption: "Birthday" },
        { src: "images/hero4.jpg", caption: "Events" },
        { src: "images/hero5.jpg", caption: "Pregnancy" },
        { src: "images/hero6.jpg", caption: "Portrait" }
    ],

    // Filter buttons on the portfolio. "cat" in each photo must match one of these.
    categories: ["Wedding", "Portrait", "Travel", "Events"],

    // Portfolio photos
    photos: [
        { src: "images/photo1.jpg", cat: "Wedding", alt: "Bride and groom at sunset" },
        { src: "images/photo2.jpg", cat: "Portrait", alt: "Portrait in window light" },
        { src: "images/photo3.jpg", cat: "Travel", alt: "Mountain road at dawn" },
        { src: "images/photo4.jpg", cat: "Events", alt: "Dance floor" },
        { src: "images/photo5.jpg", cat: "Wedding", alt: "Wedding rings" },
        { src: "images/photo6.jpg", cat: "Portrait", alt: "Studio portrait" },
        { src: "images/photo7.jpg", cat: "Travel", alt: "Old town street" },
        { src: "images/photo8.jpg", cat: "Events", alt: "Birthday celebration" },
        { src: "images/photo9.jpg", cat: "Wedding", alt: "Family group photo" }
    ],

    // Client reviews
    reviews: [
    {
        name: "Kalyan & Surekha",
        place: "Wedding, Shrirampur",
        text: "We had a wonderful experience! Every special moment of our wedding was captured beautifully. The photos and videos are amazing, and we will cherish these memories forever."
    },
    {
        name: "Kidan Dudhmal",
        place: "Family Portrait",
        text: "Absolutely loved the photography! The pictures look natural, beautiful, and full of emotions. Very professional, friendly, and creative work."
    },
    {
        name: "Namdev Walture",
        place: "Birthday Event",
        text: "Excellent photography and great service! Every smile, celebration, and special moment was captured perfectly. Highly recommended for birthday events."
    },
    {
        name: "Priya & Rahul",
        place: "Pre-Wedding Shoot",
        text: "Our pre-wedding shoot was an unforgettable experience. The locations, poses, creativity, and final pictures were beyond our expectations. Thank you for making it so special!"
    },
    {
        name: "Sneha & Akash",
        place: "Maternity Photoshoot",
        text: "Beautiful experience from start to finish! The photographer made us feel comfortable and captured this special phase of our lives so wonderfully."
    },
    {
        name: "Amit Deshmukh",
        place: "Family Function, Ahilyanagar",
        text: "Very talented and dedicated photographer. The candid shots were fantastic, and every important moment was covered with great attention to detail. Truly appreciate the work!"
    }
],

    // Contact details (leave a field empty "" to hide it)
    contact: {
        email: "amolsurve@gmail.com",
        phone: "+91 83080 60309",
        whatsapp: "918308060309",   // country code + number, no + or spaces
        location: "Shrirampur, Maharashtra"
    },

    // Social links (add, remove or reorder freely)
    social: [
        { label: "Instagram", url: "https://instagram.com/amolsurve_photography" },
        { label: "Facebook", url: "https://facebook.com/amol.surve.3954" },
        { label: "YouTube", url: "https://youtube.com/@amolsurve5847" }
    ]
};
