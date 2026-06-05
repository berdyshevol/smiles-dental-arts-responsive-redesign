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
    { day: "Thursday", time: "By appointment" },
    { day: "Friday", time: "9:00am – 3:00pm" },
    { day: "Saturday", time: "By appointment" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Meet the Doctor", href: "/meet-the-doctor" },
  { label: "Office Tour", href: "/office-tour" },
  { label: "Services", href: "/#services" },
  { label: "Smiles", href: "/#smiles" },
  { label: "Contact", href: "/#contact" },
];

export const services = [
  {
    title: "Dental Implants",
    img: "/img/services/dental-implants.jpg",
    desc: "Dental implants improve oral health by permanently replacing missing teeth.",
  },
  {
    title: "Invisalign & Braces",
    img: "/img/services/invisalign_and_dental_braces.jpg",
    desc: "Invisalign and dental braces give you the beautiful, straight teeth you've always wanted.",
  },
  {
    title: "Cosmetic Dentist",
    img: "/img/services/emergency-dentist.jpg",
    desc: "Transform your smile by restoring damaged teeth — for the confidence you deserve.",
  },
  {
    title: "Other Services",
    img: "/img/services/other-services.jpg",
    desc: "Orthodontics, prosthodontics and a full range of advanced dental procedures.",
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

export const testimonials = [
  {
    name: "Andrei P.",
    text: "From the moment you walk in you feel welcome. Dr. Sanchez is approachable, gentle and genuinely cares. Best dental experience I've had.",
  },
  {
    name: "Norbert I.",
    text: "Spotlessly clean, friendly, and never judgmental. They explain everything clearly and make you feel completely at ease.",
  },
  {
    name: "Patient · Huntington Park, CA",
    text: "They go out of their way to keep you comfortable — they even have Netflix in the rooms. Highly recommend this practice.",
  },
];
