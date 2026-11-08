export interface Doctor {
  id: string;
  name: string;
  photo?: string;
  qualifications: string;
  specialityId: string;
  hospital: string;
  chamberAddress: string | null;
  visitingHours: string | null;
  appointmentPhone: string | null;
  bmdc: string | null;
  divisionId: string;
  districtId: string;
  upazila?: string | null;
  consultationFee?: string | null;
  officialProfileUrl?: string | null;
  sourceUrl?: string | null;
  lastVerified: string;
  verificationStatus: "verified" | "unverified";
}

export const doctors: Doctor[] = [
  { id: "dr-sm-siddiqur-rahman", name: "প্রফেসর ডাঃ এস. এম. সিদ্দিকুর রহমান", qualifications: "MBBS (Dhaka), D-CARD (DU), MD (Cardiology), FACC (USA)", specialityId: "cardiology", hospital: "জাতীয় হৃদরোগ ইনস্টিটিউট ও হাসপাতাল", chamberAddress: null, visitingHours: null, appointmentPhone: null, bmdc: null, divisionId: "dhaka", districtId: "dhaka", sourceUrl: "https://alldoctorlist.com/best-cardiologist-in-dhaka", lastVerified: "2026-11-08", verificationStatus: "unverified" },
  { id: "dr-md-azizul-bari", name: "প্রফেসর ডাঃ মোঃ আজিজুল বারী", qualifications: "MBBS, FCPS (Medicine), D-CARD, Training (India)", specialityId: "cardiology", hospital: "বারডেম জেনারেল হাসপাতাল ও ইব্রাহিম মেডিকেল কলেজ", chamberAddress: null, visitingHours: null, appointmentPhone: null, bmdc: null, divisionId: "dhaka", districtId: "dhaka", sourceUrl: "https://alldoctorlist.com/best-cardiologist-in-dhaka", lastVerified: "2026-11-08", verificationStatus: "unverified" },
  { id: "dr-zehad-khan", name: "প্রফেসর কর্নেল ডাঃ জেহাদ খান", qualifications: "MBBS, MD, MCSP, FCPS, FACC", specialityId: "cardiology", hospital: "সম্মিলিত সামরিক হাসপাতাল (CMH), ঢাকা", chamberAddress: null, visitingHours: null, appointmentPhone: null, bmdc: null, divisionId: "dhaka", districtId: "dhaka", sourceUrl: "https://alldoctorlist.com/best-cardiologist-in-dhaka", lastVerified: "2026-11-08", verificationStatus: "unverified" },
  { id: "dr-md-abdul-kader-akanda", name: "প্রফেসর ডাঃ মোঃ আব্দুল কাদের আকন্দ", qualifications: "MBBS, FCPS (Medicine), MD (Cardiology), FACC (USA)", specialityId: "cardiology", hospital: "স্যার সলিমুল্লাহ মেডিকেল কলেজ ও মিটফোর্ড হাসপাতাল", chamberAddress: null, visitingHours: null, appointmentPhone: null, bmdc: null, divisionId: "dhaka", districtId: "dhaka", sourceUrl: "https://alldoctorlist.com/best-cardiologist-in-dhaka", lastVerified: "2026-11-08", verificationStatus: "unverified" },
  { id: "dr-mohammad-salahuddin", name: "প্রফেসর ডাঃ মোহাম্মদ সালাহউদ্দিন", qualifications: "MBBS, MD (Cardiology)", specialityId: "cardiology", hospital: "জাতীয় হৃদরোগ ইনস্টিটিউট ও হাসপাতাল", chamberAddress: null, visitingHours: null, appointmentPhone: null, bmdc: null, divisionId: "dhaka", districtId: "dhaka", sourceUrl: "https://alldoctorlist.com/best-cardiologist-in-dhaka", lastVerified: "2026-11-08", verificationStatus: "unverified" },
  { id: "dr-md-mohasin-uddin", name: "ডাঃ মোঃ মহসিন উদ্দিন", qualifications: "MBBS, D-CARD (BMU), MRCP (UK)", specialityId: "cardiology", hospital: "ঢাকা", chamberAddress: null, visitingHours: null, appointmentPhone: null, bmdc: "A-70827", divisionId: "dhaka", districtId: "dhaka", sourceUrl: "https://www.doctorbangladesh.com/cardiologist-dhaka", lastVerified: "2026-11-08", verificationStatus: "unverified" },
  { id: "dr-shams-munwar", name: "ডাঃ শামস মুনওয়ার", qualifications: "MBBS, MD (Cardiology)", specialityId: "cardiology", hospital: "এভারকেয়ার হাসপাতাল, ঢাকা", chamberAddress: null, visitingHours: null, appointmentPhone: null, bmdc: null, divisionId: "dhaka", districtId: "dhaka", sourceUrl: "https://www.evercarebd.com/en/dhaka/specialities/cardiology", lastVerified: "2026-11-08", verificationStatus: "unverified" },
  { id: "dr-aqm-reza", name: "ডাঃ এ. কিউ. এম. রেজা", qualifications: "MBBS, MD (Cardiology)", specialityId: "cardiology", hospital: "এভারকেয়ার হাসপাতাল, ঢাকা", chamberAddress: null, visitingHours: null, appointmentPhone: null, bmdc: null, divisionId: "dhaka", districtId: "dhaka", sourceUrl: "https://www.evercarebd.com/en/dhaka/specialities/cardiology", lastVerified: "2026-11-08", verificationStatus: "unverified" },
  { id: "dr-asif-manwar", name: "ডাঃ আসিফ মনওয়ার", qualifications: "MBBS, MD (Cardiology)", specialityId: "cardiology", hospital: "স্কয়ার হাসপাতাল, ঢাকা", chamberAddress: null, visitingHours: null, appointmentPhone: null, bmdc: null, divisionId: "dhaka", districtId: "dhaka", sourceUrl: "https://www.squarehospital.com/doctors/department/CARDIOLOGY%20(INTERVENTIONAL)", lastVerified: "2026-11-08", verificationStatus: "unverified" },
  { id: "dr-bijoy-dutta", name: "ডাঃ বিজয় দত্ত", qualifications: "MBBS, MD (Cardiology)", specialityId: "cardiology", hospital: "স্কয়ার হাসপাতাল, ঢাকা", chamberAddress: null, visitingHours: null, appointmentPhone: null, bmdc: null, divisionId: "dhaka", districtId: "dhaka", sourceUrl: "https://www.squarehospital.com/doctors/department/CARDIOLOGY%20(INTERVENTIONAL)", lastVerified: "2026-11-08", verificationStatus: "unverified" },
];
