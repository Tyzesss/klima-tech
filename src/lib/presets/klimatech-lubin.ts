import type { SitePreset } from "./types";

const siteCity = "Lubin i okolice";
const cityLocative = "w Lubinie";
const siteName = "KLIMA-TECH";

export const klimatechLubinPreset: SitePreset = {
  id: "klimatech-lubin",
  label: "KLIMA-TECH Paweł Radomski — Lubin",
  siteName,
  companyLegalName: "KLIMA-TECH Paweł Radomski",
  siteCity,
  cityLocative,
  siteDefaultUrl: "https://www.klimatech-klimatyzacje.pl",
  email: "biuro@klimatech24.com.pl",
  phoneDisplay: "881 448 323",
  phoneE164: "+48881448323",
  address: "ul. Bolesława Krupińskiego 47/15, 59-300 Lubin",
  addressStreet: "ul. Bolesława Krupińskiego 47/15",
  addressCity: "Lubin",
  addressPostal: "59-300",
  mapsQuery: "KLIMA-TECH Montaż klimatyzacji Serwis klimatyzacji Lubin",
  mapsUrl: "https://maps.app.goo.gl/mU4cbNKRqLsPrXdg9",
  googleReviewsUrl: "https://maps.app.goo.gl/mU4cbNKRqLsPrXdg9",
  nip: "692-210-07-76",
  regon: "540593677",
  hours: "Pn–Pt: 8:00–20:00 · Sob: 9:00–20:00",
  logoUrl: "/logo.png",
  heroImage: "/gallery/klimatech-1.webp",
  siteTitle: `Klimatyzacja ${siteCity} | ${siteName} Paweł Radomski`,
  siteKeywords:
    "klimatyzacja Lubin, montaż klimatyzacji, serwis klimatyzacji, klimatyzacja dom, klimatyzacja biuro, sprzedaż klimatyzacji",
  siteDescription: `Montaż, sprzedaż i serwis klimatyzacji ${cityLocative} i okolicach. Dobór urządzeń, fachowy montaż i przeglądy. Zadzwoń: 881 448 323.`,
  ogImage: "/gallery/klimatech-1.webp",
  googleRating: 5.0,
  googleReviewCount: 12,
  partners: ["Kaisai", "Gree", "Fujitsu", "Haier", "Hisense"],
  gallery: [
    {
      image: "/gallery/klimatech-1.webp",
      alt: "Montaż klimatyzacji w pomieszczeniu — realizacja KLIMA-TECH Lubin",
      caption: "Montaż klimatyzacji",
    },
    {
      image: "/gallery/klimatech-2.webp",
      alt: "Jednostka wewnętrzna klimatyzacji — instalacja w Lubinie",
      caption: "Jednostka wewnętrzna",
    },
    {
      image: "/gallery/klimatech-3.webp",
      alt: "Klimatyzacja w biurze — montaż split",
      caption: "Klimatyzacja biurowa",
    },
    {
      image: "/gallery/klimatech-4.webp",
      alt: "Jednostka zewnętrzna klimatyzacji — montaż na elewacji",
      caption: "Jednostka zewnętrzna",
    },
    {
      image: "/gallery/klimatech-5.webp",
      alt: "Instalacja klimatyzacji w domu — realizacja KLIMA-TECH",
      caption: "Instalacja domowa",
    },
    {
      image: "/gallery/klimatech-6.webp",
      alt: "System klimatyzacji — serwis i konserwacja",
      caption: "Serwis i konserwacja",
    },
  ],
  reviews: [
    {
      text: "100% profesjonalizmu, jestem bardzo zadowolony z montażu.",
      source: "google",
      rating: 5,
      relativeTime: "2 mies. temu",
    },
    {
      text: "Duże zaangażowanie i porządek w realizacji zlecenia. Polecam.",
      source: "google",
      rating: 5,
      relativeTime: "3 mies. temu",
    },
    {
      text: "Fachowa obsługa od pierwszego kontaktu po montaż klimatyzacji.",
      source: "google",
      rating: 5,
      relativeTime: "4 mies. temu",
    },
    {
      text: "Bardzo zadowolony z montażu klimatyzacji — gorąco polecam usługi.",
      source: "google",
      rating: 5,
      relativeTime: "5 mies. temu",
    },
  ],
  heroHeadline: "Montaż i serwis klimatyzacji",
  heroBullets: [
    "Montaż, serwis i sprzedaż klimatyzacji do domu i biura.",
    "Obsługa urządzeń renomowanych marek — dojazd na miejsce.",
  ],
  footerTagline: "Montaż i serwis klimatyzacji",
  servicesSectionSubtitle:
    "Montaż, sprzedaż, serwis i konserwacja klimatyzacji dla domów i firm.",
  gallerySectionSubtitle: "Wybrane realizacje montażu i serwisu klimatyzacji w Lubinie i okolicach.",
  services: [
    {
      icon: "snowflake",
      title: "Montaż klimatyzacji",
      desc: "Fachowy montaż split i multi-split w domach i biurach — dobór mocy pod pomieszczenie.",
    },
    {
      icon: "wrench",
      title: "Serwis i konserwacja",
      desc: "Przeglądy, czyszczenie i naprawy — utrzymanie sprawnego działania przez lata.",
    },
    {
      icon: "check-circle",
      title: "Sprzedaż urządzeń",
      desc: "Dobór klimatyzatorów renomowanych marek pod budżet i wymagania.",
    },
    {
      icon: "zap",
      title: "Klimatyzacja biurowa",
      desc: "Ciche, wydajne systemy do przestrzeni pracy — montaż z minimalnym przestojem.",
    },
    {
      icon: "shield-check",
      title: "Obsługa marek premium",
      desc: "Kaisai, Gree, Fujitsu, Haier, Hisense i inne — montaż i serwis gwarancyjny.",
    },
  ],
  faqs: [
    {
      q: "Czy montujecie klimatyzację w domach jednorodzinnych?",
      a: `Tak. Montujemy klimatyzację w domach i mieszkaniach na terenie ${siteCity.toLowerCase()}.`,
    },
    {
      q: "Ile kosztuje montaż klimatyzacji?",
      a: "Koszt zależy od liczby jednostek, trudności montażu i wybranego urządzenia. Wycenę przygotujemy po krótkiej rozmowie lub wizycie.",
    },
    {
      q: "Jak często serwisować klimatyzację?",
      a: "Zalecamy przegląd raz w roku — czyszczenie filtrów, sprawdzenie czynnika i wydajności urządzenia.",
    },
    {
      q: "Jakie marki klimatyzacji obsługujecie?",
      a: "Pracujemy m.in. z Kaisai, Gree, Fujitsu, Haier i Hisense. Doradzimy przy wyborze modelu.",
    },
    {
      q: "Czy dojeżdżacie poza Lubin?",
      a: `Tak. Obsługujemy ${siteCity.toLowerCase()} — dojeżdżamy do klienta na montaż i serwis.`,
    },
  ],
  serviceOptionGroups: [
    {
      label: "Montaż",
      options: [
        "Montaż klimatyzacji split",
        "Montaż klimatyzacji multi-split",
        "Klimatyzacja biurowa",
      ],
    },
    {
      label: "Serwis",
      options: ["Przegląd i konserwacja", "Naprawa klimatyzacji", "Czyszczenie i odgrzybianie"],
    },
    {
      label: "Sprzedaż",
      options: ["Dobór i wycena urządzenia", "Wymiana starej klimatyzacji"],
    },
    {
      label: "Inne",
      options: ["Potrzebuję doradztwa"],
    },
  ],
};
