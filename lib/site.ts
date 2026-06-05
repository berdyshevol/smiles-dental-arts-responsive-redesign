export const site = {
  name: "Smiles Dental Arts",
  tagline: "Experience quality dental care provided by an expert team",
  phone: "323-560-7474",
  phoneHref: "tel:+13235607474",
  address: {
    line: "4566 East Florence Avenue, Ste. No. 7-8",
    city: "Cudahy, CA 90201",
    maps: "https://maps.google.com/?q=4566+East+Florence+Avenue+Cudahy+CA+90201",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    yelp: "https://yelp.com",
  },
  hours: [
    { day: "Monday", time: "10:00am – 5:00pm" },
    { day: "Tuesday", time: "9:00am – 4:00pm" },
    { day: "Wednesday", time: "9:00am – 4:00pm" },
    { day: "Thursday", time: "By appointment only" },
    { day: "Friday", time: "9:00am – 3:00pm" },
    { day: "Saturday", time: "By appointment only" },
  ],
};

// Matches the live cudahydentist.net top navigation.
export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/meet-the-doctor" },
  { label: "Office Tour", href: "/office-tour" },
  { label: "Services", href: "/#services" },
  { label: "Beautiful Smiles", href: "/#beautiful-smiles" },
  { label: "Forms", href: "/#contact" },
  { label: "Blog", href: "/#contact" },
  { label: "Contact Us", href: "/#contact" },
];

// Service cards — copy verbatim from the live homepage.
export const services = [
  {
    title: "Dental Implants",
    img: "/img/services/dental-implants.jpg",
    desc: "Dental implants improve oral health by replacing missing teeth.",
  },
  {
    title: "Invisalign & Dental Braces",
    img: "/img/services/invisalign_and_dental_braces.jpg",
    desc: "Consider Invisalign and Dental Braces to get the beautiful straight teeth you've always wanted.",
  },
  {
    title: "Cosmetic Dentist",
    img: "/img/services/emergency-dentist.jpg",
    desc: "Transform your smile by simply replacing and restoring your damaged teeth to improve your smile and confidence.",
  },
  {
    title: "Other Services",
    img: "/img/services/other-services.jpg",
    desc: "Have a look at some of our orthodontics, prosthodontics and other dental procedures.",
  },
];

// The three lower tiles, verbatim.
export const tiles = [
  {
    title: "Our Office",
    desc: "We are equipped with latest technological devices. Patient comfort comes first at our fully furnished office.",
  },
  {
    title: "Our Offers",
    desc: "Our attractive coupons and offers can help you save money when availing our quality dental services.",
  },
  {
    title: "Beautiful Smiles",
    desc: "Our unparalleled quality of dental treatment can be seen in the results we have achieved for patients.",
  },
];

export const accreditations = [
  { src: "/img/Accreditations/ADA_org.png", alt: "American Dental Association" },
  { src: "/img/Accreditations/CDA_org.png", alt: "California Dental Association" },
  { src: "/img/Accreditations/usdi_org.png", alt: "United States Dental Institute" },
  { src: "/img/Accreditations/icoi_org.png", alt: "International Congress of Oral Implantologists" },
  { src: "/img/Accreditations/iaortho.png", alt: "International Association for Orthodontics" },
  { src: "/img/Accreditations/aaipusa.png", alt: "American Academy of Implant Prosthodontics" },
];

// Patient reviews — verbatim from the homepage testimonials section.
export const testimonials = [
  {
    name: "Andrei P.",
    text: "This place is great, very welcoming friendly and they don't try to push you in and out. Had my teeth cleaned and tooth filled. I felt comfortable the whole time. This was first time here and Dr Sanchez was really easy to talk to. Give them a call and at the very least get your teeth checked out :) happy smiles everyone!",
  },
  {
    name: "Norbert I.",
    text: "Had a great experience at this office. I hadn't had a cleaning for over a year and finally made it in to get it done. This was my first time at this office and I have to say I am very pleased. They made me feel welcome and didn't make me feel bad about not staying on top of my teeth. The place is super clean, friendly and knowledgable staff. If you looking for a great dentist that actually cares, see Doctor Sanchez and his staff. You wont be disappointed!",
  },
  {
    name: "Huntington Park, CA",
    text: "Dr Sanchez went the extra step to make sure I was comfortable the whole time which is always appreciated. Everyone was so nice and they go out of there way to make you feel like family and makes you feel so at ease and relaxed. They also have Netflix playing in every room which is super awesome! I would definitely recommend coming here!",
  },
];
