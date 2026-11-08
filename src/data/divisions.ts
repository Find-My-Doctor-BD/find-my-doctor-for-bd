export interface Division {
  id: string;
  nameBn: string;
  nameEn: string;
}

export interface District {
  id: string;
  divisionId: string;
  nameBn: string;
  nameEn: string;
}

export const divisions: Division[] = [
  { id: "dhaka", nameBn: "ঢাকা", nameEn: "Dhaka" },
  { id: "chattogram", nameBn: "চট্টগ্রাম", nameEn: "Chattogram" },
  { id: "khulna", nameBn: "খুলনা", nameEn: "Khulna" },
  { id: "rajshahi", nameBn: "রাজশাহী", nameEn: "Rajshahi" },
  { id: "barishal", nameBn: "বরিশাল", nameEn: "Barishal" },
  { id: "sylhet", nameBn: "সিলেট", nameEn: "Sylhet" },
  { id: "rangpur", nameBn: "রংপুর", nameEn: "Rangpur" },
  { id: "mymensingh", nameBn: "ময়মনসিংহ", nameEn: "Mymensingh" },
];

export const districts: District[] = [
  // Dhaka division
  { id: "dhaka", divisionId: "dhaka", nameBn: "ঢাকা", nameEn: "Dhaka" },
  { id: "gazipur", divisionId: "dhaka", nameBn: "গাজীপুর", nameEn: "Gazipur" },
  { id: "narayanganj", divisionId: "dhaka", nameBn: "নারায়ণগঞ্জ", nameEn: "Narayanganj" },
  { id: "narsingdi", divisionId: "dhaka", nameBn: "নরসিংদী", nameEn: "Narsingdi" },
  { id: "manikganj", divisionId: "dhaka", nameBn: "মানিকগঞ্জ", nameEn: "Manikganj" },
  { id: "munshiganj", divisionId: "dhaka", nameBn: "মুন্সিগঞ্জ", nameEn: "Munshiganj" },
  { id: "faridpur", divisionId: "dhaka", nameBn: "ফরিদপুর", nameEn: "Faridpur" },
  { id: "gopalganj", divisionId: "dhaka", nameBn: "গোপালগঞ্জ", nameEn: "Gopalganj" },
  { id: "kishoreganj", divisionId: "dhaka", nameBn: "কিশোরগঞ্জ", nameEn: "Kishoreganj" },
  { id: "madaripur", divisionId: "dhaka", nameBn: "মাদারীপুর", nameEn: "Madaripur" },
  { id: "rajbari", divisionId: "dhaka", nameBn: "রাজবাড়ী", nameEn: "Rajbari" },
  { id: "shariatpur", divisionId: "dhaka", nameBn: "শরীয়তপুর", nameEn: "Shariatpur" },
  { id: "tangail", divisionId: "dhaka", nameBn: "টাঙ্গাইল", nameEn: "Tangail" },
  // Chattogram division
  { id: "chattogram", divisionId: "chattogram", nameBn: "চট্টগ্রাম", nameEn: "Chattogram" },
  { id: "coxsbazar", divisionId: "chattogram", nameBn: "কক্সবাজার", nameEn: "Cox's Bazar" },
  { id: "comilla", divisionId: "chattogram", nameBn: "কুমিল্লা", nameEn: "Comilla" },
  { id: "feni", divisionId: "chattogram", nameBn: "ফেনী", nameEn: "Feni" },
  { id: "brahmanbaria", divisionId: "chattogram", nameBn: "ব্রাহ্মণবাড়িয়া", nameEn: "Brahmanbaria" },
  { id: "chandpur", divisionId: "chattogram", nameBn: "চাঁদপুর", nameEn: "Chandpur" },
  { id: "lakshmipur", divisionId: "chattogram", nameBn: "লক্ষ্মীপুর", nameEn: "Lakshmipur" },
  { id: "noakhali", divisionId: "chattogram", nameBn: "নোয়াখালী", nameEn: "Noakhali" },
  { id: "khagrachhari", divisionId: "chattogram", nameBn: "খাগড়াছড়ি", nameEn: "Khagrachhari" },
  { id: "rangamati", divisionId: "chattogram", nameBn: "রাঙ্গামাটি", nameEn: "Rangamati" },
  { id: "bandarban", divisionId: "chattogram", nameBn: "বান্দরবান", nameEn: "Bandarban" },
  // Khulna division
  { id: "khulna", divisionId: "khulna", nameBn: "খুলনা", nameEn: "Khulna" },
  { id: "bagerhat", divisionId: "khulna", nameBn: "বাগেরহাট", nameEn: "Bagerhat" },
  { id: "satkhira", divisionId: "khulna", nameBn: "সাতক্ষীরা", nameEn: "Satkhira" },
  { id: "jashore", divisionId: "khulna", nameBn: "যশোর", nameEn: "Jashore" },
  { id: "magura", divisionId: "khulna", nameBn: "মাগুরা", nameEn: "Magura" },
  { id: "jhinaidah", divisionId: "khulna", nameBn: "ঝিনাইদহ", nameEn: "Jhinaidah" },
  { id: "narail", divisionId: "khulna", nameBn: "নড়াইল", nameEn: "Narail" },
  { id: "kushtia", divisionId: "khulna", nameBn: "কুষ্টিয়া", nameEn: "Kushtia" },
  { id: "chuadanga", divisionId: "khulna", nameBn: "চুয়াডাঙ্গা", nameEn: "Chuadanga" },
  { id: "meherpur", divisionId: "khulna", nameBn: "মেহেরপুর", nameEn: "Meherpur" },
  // Rajshahi division
  { id: "rajshahi", divisionId: "rajshahi", nameBn: "রাজশাহী", nameEn: "Rajshahi" },
  { id: "bogura", divisionId: "rajshahi", nameBn: "বগুড়া", nameEn: "Bogura" },
  { id: "pabna", divisionId: "rajshahi", nameBn: "পাবনা", nameEn: "Pabna" },
  { id: "sirajganj", divisionId: "rajshahi", nameBn: "সিরাজগঞ্জ", nameEn: "Sirajganj" },
  { id: "natore", divisionId: "rajshahi", nameBn: "নাটোর", nameEn: "Natore" },
  { id: "naogaon", divisionId: "rajshahi", nameBn: "নওগাঁ", nameEn: "Naogaon" },
  { id: "chapainawabganj", divisionId: "rajshahi", nameBn: "চাঁপাইনবাবগঞ্জ", nameEn: "Chapainawabganj" },
  { id: "joypurhat", divisionId: "rajshahi", nameBn: "জয়পুরহাট", nameEn: "Joypurhat" },
  // Barishal division
  { id: "barishal", divisionId: "barishal", nameBn: "বরিশাল", nameEn: "Barishal" },
  { id: "bhola", divisionId: "barishal", nameBn: "ভোলা", nameEn: "Bhola" },
  { id: "patuakhali", divisionId: "barishal", nameBn: "পটুয়াখালী", nameEn: "Patuakhali" },
  { id: "pirojpur", divisionId: "barishal", nameBn: "পিরোজপুর", nameEn: "Pirojpur" },
  { id: "barguna", divisionId: "barishal", nameBn: "বরগুনা", nameEn: "Barguna" },
  { id: "jhalkathi", divisionId: "barishal", nameBn: "ঝালকাঠি", nameEn: "Jhalokati" },
  // Sylhet division
  { id: "sylhet", divisionId: "sylhet", nameBn: "সিলেট", nameEn: "Sylhet" },
  { id: "moulvibazar", divisionId: "sylhet", nameBn: "মৌলভীবাজার", nameEn: "Moulvibazar" },
  { id: "habiganj", divisionId: "sylhet", nameBn: "হবিগঞ্জ", nameEn: "Habiganj" },
  { id: "sunamganj", divisionId: "sylhet", nameBn: "সুনামগঞ্জ", nameEn: "Sunamganj" },
  // Rangpur division
  { id: "rangpur", divisionId: "rangpur", nameBn: "রংপুর", nameEn: "Rangpur" },
  { id: "dinajpur", divisionId: "rangpur", nameBn: "দিনাজপুর", nameEn: "Dinajpur" },
  { id: "gaibandha", divisionId: "rangpur", nameBn: "গাইবান্ধা", nameEn: "Gaibandha" },
  { id: "kurigram", divisionId: "rangpur", nameBn: "কুড়িগ্রাম", nameEn: "Kurigram" },
  { id: "lalmonirhat", divisionId: "rangpur", nameBn: "লালমনিরহাট", nameEn: "Lalmonirhat" },
  { id: "nilphamari", divisionId: "rangpur", nameBn: "নীলফামারী", nameEn: "Nilphamari" },
  { id: "panchagarh", divisionId: "rangpur", nameBn: "পঞ্চগড়", nameEn: "Panchagarh" },
  { id: "thakurgaon", divisionId: "rangpur", nameBn: "ঠাকুরগাঁও", nameEn: "Thakurgaon" },
  // Mymensingh division
  { id: "mymensingh", divisionId: "mymensingh", nameBn: "ময়মনসিংহ", nameEn: "Mymensingh" },
  { id: "jamalpur", divisionId: "mymensingh", nameBn: "জামালপুর", nameEn: "Jamalpur" },
  { id: "netrokona", divisionId: "mymensingh", nameBn: "নেত্রকোণা", nameEn: "Netrokona" },
  { id: "sherpur", divisionId: "mymensingh", nameBn: "শেরপুর", nameEn: "Sherpur" },
];
