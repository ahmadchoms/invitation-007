export interface PersonInfo {
  name: string;
  fullName: string;
  title: string;
  fatherName: string;
  motherName: string;
}

export interface CeremonyInfo {
  type: string;
  date: string; // Display string
  time: string; // e.g., "08.00 — 10.00"
  venue: string;
  address: string;
  mapsUrl: string;
}

export interface BankAccount {
  bank: string;
  accountNumber: string;
  accountHolder: string;
}

export const siteConfig = {
  meta: {
    title: "The Wedding Of Raka & Andini",
    description: "Undangan Pernikahan Digital — Midnight Elegance",
    ogDescription:
      "Kami mengundang Anda untuk hadir merayakan momen sakral kami.",
  },
  branding: {
    name: "Chozy Space",
  },
  couple: {
    groom: {
      name: "Raka",
      fullName: "Raka Pratama",
      title: "Putra Pertama",
      fatherName: "Ahmad Santoso",
      motherName: "Sri Wahyuni",
    },
    bride: {
      name: "Andini",
      fullName: "Andini Putri",
      title: "Putri Pertama",
      fatherName: "Budi Hartono",
      motherName: "Ratna Dewi",
    },
    initials: "R&A",
    joinWord: "&", // "Raka & Andini" vs "Raka and Andini"
  },
  event: {
    date: "2027-10-12T08:00:00+07:00", // ISO string for countdown
    displayDate: "Sabtu, 12 Oktober 2024",
    location: "Jakarta, Indonesia",
    ceremonies: [
      {
        type: "Akad Nikah",
        date: "Sabtu, 12 Oktober 2024",
        time: "08.00 — 10.00",
        venue: "Masjid Al-Ikhlas",
        address: "Jl. Raya Kebon Jeruk No. 45,\nJakarta Barat, DKI Jakarta",
        mapsUrl: "https://maps.google.com",
      },
      {
        type: "Resepsi",
        date: "Sabtu, 12 Oktober 2024",
        time: "11.00 — 15.00",
        venue: "Ballroom Grand Hyatt Jakarta",
        address: "Jl. M.H. Thamrin No. Kav. 28-30,\nJakarta Pusat, DKI Jakarta",
        mapsUrl: "https://maps.google.com",
      },
    ] as CeremonyInfo[],
  },
  content: {
    welcome: {
      greeting: "Kepada Yth.",
      guestPrefix: "Bapak / Ibu / Saudara/i",
      placeholderGuest: "Nama Tamu Undangan",
      label: "The Wedding Of",
      buttonText: "Buka Undangan",
      scrollHint: "Sentuh untuk membuka",
    },
    hero: {
      label: "The Wedding Of",
      scrollHint: "Scroll",
    },
    sectionLabels: {
      couple: "Mempelai",
      event: "Acara",
      gallery: "Kenangan",
      gift: "Hadiah",
    },
    couple: {
      subtitle: "Mempelai",
      title: "The Couple",
      childOf: "Putra/Putri dari",
    },
    event: {
      subtitle: "Waktu & Tempat",
      title: "Detail Acara",
      seeLocation: "Lihat Lokasi",
    },
    gallery: {
      subtitle: "Kenangan",
      title: "Galeri Foto",
      placeholderHelper: "Ganti dengan foto asli Anda",
    },
    gift: {
      subtitle: "Digital Angpao",
      title: "Wedding Gift",
      description:
        "Doa restu Anda adalah hadiah terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih, berikut informasi rekening kami.",
    },
    footer: {
      closingMessage:
        "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila\nBapak / Ibu / Saudara/i berkenan hadir untuk memberikan\ndoa restu kepada kami.",
      createdWith: "Created with",
      by: "by",
    },
  },
  gift: {
    accounts: [
      {
        bank: "Bank Central Asia (BCA)",
        accountNumber: "1234 5678 90",
        accountHolder: "Raka Pratama",
      },
      {
        bank: "Bank Mandiri",
        accountNumber: "0987 6543 21",
        accountHolder: "Andini Putri",
      },
    ] as BankAccount[],
  },
};
