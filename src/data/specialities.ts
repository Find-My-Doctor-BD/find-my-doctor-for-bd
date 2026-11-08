export interface Speciality {
  id: string;
  nameBn: string;
  nameEn: string;
  keywordsBn: string[];
  keywordsEn: string[];
}

export const specialities: Speciality[] = [
  { id: "cardiology", nameBn: "হৃদরোগ বিশেষজ্ঞ (কার্ডিওলজি)", nameEn: "Cardiologist", keywordsBn: ["হৃদরোগ", "হার্ট", "বুকে ব্যথা", "উচ্চ রক্তচাপ"], keywordsEn: ["heart", "cardiac", "hypertension", "cardiology"] },
  { id: "endocrinology", nameBn: "ডায়াবেটিস ও হরমোন বিশেষজ্ঞ (এন্ডোক্রিনোলজি)", nameEn: "Endocrinologist", keywordsBn: ["ডায়াবেটিস", "সুগার", "থাইরয়েড", "হরমোন"], keywordsEn: ["diabetes", "sugar", "thyroid", "hormone"] },
  { id: "neurology", nameBn: "স্নায়ুরোগ বিশেষজ্ঞ (নিউরোলজি)", nameEn: "Neurologist", keywordsBn: ["মাথাব্যথা", "মাইগ্রেন", "স্ট্রোক", "মৃগী", "স্নায়ু"], keywordsEn: ["headache", "migraine", "stroke", "epilepsy", "nerve"] },
  { id: "orthopedics", nameBn: "হাড় ও জয়েন্ট বিশেষজ্ঞ (অর্থোপেডিক্স)", nameEn: "Orthopedic Specialist", keywordsBn: ["হাড়", "জয়েন্ট", "হাঁটু", "কোমর", "আর্থ্রাইটিস", "ব্যাক পেইন"], keywordsEn: ["bone", "joint", "knee", "back pain", "arthritis", "orthopedic"] },
  { id: "dermatology", nameBn: "ত্বক ও যৌনরোগ বিশেষজ্ঞ (ডার্মাটোলজি)", nameEn: "Dermatologist", keywordsBn: ["ত্বক", "অ্যালার্জি", "চুল", "নখ", "একজিমা", "র্যাশ"], keywordsEn: ["skin", "allergy", "hair", "nail", "eczema", "rash"] },
  { id: "ophthalmology", nameBn: "চক্ষু বিশেষজ্ঞ (অফথ্যালমোলজি)", nameEn: "Ophthalmologist", keywordsBn: ["চোখ", "দৃষ্টি", "ছানি", "গ্লুকোমা", "চশমা"], keywordsEn: ["eye", "vision", "cataract", "glaucoma", "spectacles"] },
  { id: "ent", nameBn: "নাক, কান ও গলা বিশেষজ্ঞ (ইএনটি)", nameEn: "ENT Specialist", keywordsBn: ["নাক", "কান", "গলা", "টনসিল", "সাইনাস", "শ্রবণ"], keywordsEn: ["nose", "ear", "throat", "tonsil", "sinus", "hearing"] },
  { id: "gastroenterology", nameBn: "পরিপাকতন্ত্র ও লিভার বিশেষজ্ঞ (গ্যাস্ট্রোএন্টেরোলজি)", nameEn: "Gastroenterologist", keywordsBn: ["পেট", "গ্যাস্ট্রিক", "আলসার", "লিভার", "জন্ডিস", "হেপাটাইটিস", "ডায়রিয়া"], keywordsEn: ["stomach", "gastric", "ulcer", "liver", "jaundice", "hepatitis", "diarrhea"] },
  { id: "pulmonology", nameBn: "বক্ষ ও শ্বাসতন্ত্র বিশেষজ্ঞ (পালমোনোলজি)", nameEn: "Pulmonologist", keywordsBn: ["হাঁপানি", "কাশি", "শ্বাস", "ক্ষয়", "টিবি", "নিউমোনিয়া"], keywordsEn: ["asthma", "cough", "breathing", "tb", "tuberculosis", "pneumonia"] },
  { id: "nephrology", nameBn: "কিডনি বিশেষজ্ঞ (নেফ্রোলজি)", nameEn: "Nephrologist", keywordsBn: ["কিডনি", "ডায়ালিসিস", "প্রস্রাব", "ক্রিয়েটিনিন"], keywordsEn: ["kidney", "dialysis", "urine", "creatinine"] },
  { id: "urology", nameBn: "মূত্র ও পুরুষরোগ বিশেষজ্ঞ (ইউরোলজি)", nameEn: "Urologist", keywordsBn: ["মূত্র", "প্রস্টেট", "কিডনি পাথর", "পুরুষরোগ"], keywordsEn: ["urine", "prostate", "kidney stone", "male infertility"] },
  { id: "gynecology", nameBn: "স্ত্রীরোগ ও প্রসূতি বিশেষজ্ঞ (গাইনি)", nameEn: "Gynecologist", keywordsBn: ["গর্ভ", "মাসিক", "স্ত্রীরোগ", "প্রসব", "জরায়ু", "ওভারি"], keywordsEn: ["pregnancy", "menstruation", "gynecology", "delivery", "uterus", "ovary"] },
  { id: "pediatrics", nameBn: "শিশু বিশেষজ্ঞ (পেডিয়াট্রিক্স)", nameEn: "Pediatrician", keywordsBn: ["শিশু", "বাচ্চা", "নবজাতক", "টিকা", "ডায়রিয়া", "জ্বর"], keywordsEn: ["child", "baby", "newborn", "vaccine", "fever", "pediatric"] },
  { id: "psychiatry", nameBn: "মানসিক রোগ বিশেষজ্ঞ (সাইকিয়াট্রি)", nameEn: "Psychiatrist", keywordsBn: ["ডিপ্রেশন", "উদ্বেগ", "মানসিক", "অনিদ্রা", "স্ট্রেস"], keywordsEn: ["depression", "anxiety", "mental", "insomnia", "stress"] },
  { id: "oncology", nameBn: "ক্যান্সার বিশেষজ্ঞ (অনকোলজি)", nameEn: "Oncologist", keywordsBn: ["ক্যান্সার", "টিউমার", "কেমো", "রেডিয়েশন"], keywordsEn: ["cancer", "tumor", "chemo", "radiation", "oncology"] },
  { id: "rheumatology", nameBn: "বাত ও জয়েন্ট বিশেষজ্ঞ (রিউমাটোলজি)", nameEn: "Rheumatologist", keywordsBn: ["বাত", "গাউট", "লুপাস", "জয়েন্ট ব্যথা"], keywordsEn: ["rheumatism", "gout", "lupus", "joint pain"] },
  { id: "hematology", nameBn: "রক্তরোগ বিশেষজ্ঞ (হেমাটোলজি)", nameEn: "Hematologist", keywordsBn: ["রক্ত", "থ্যালাসেমিয়া", "অ্যানিমিয়া", "লিউকেমিয়া"], keywordsEn: ["blood", "thalassemia", "anemia", "leukemia"] },
  { id: "infectious", nameBn: "সংক্রামক রোগ বিশেষজ্ঞ", nameEn: "Infectious Disease Specialist", keywordsBn: ["ডেঙ্গু", "কোভিড", "টাইফয়েড", "ম্যালেরিয়া", "সংক্রমণ"], keywordsEn: ["dengue", "covid", "typhoid", "malaria", "infection"] },
  { id: "general", nameBn: "মেডিসিন বিশেষজ্ঞ (ইন্টারনাল মেডিসিন)", nameEn: "Medicine Specialist", keywordsBn: ["জ্বর", "সর্দি", "কাশি", "দুর্বলতা", "মেডিসিন", "সাধারণ"], keywordsEn: ["fever", "cold", "cough", "weakness", "medicine", "general"] },
  { id: "surgery", nameBn: "সার্জারি বিশেষজ্ঞ", nameEn: "Surgeon", keywordsBn: ["অপারেশন", "সার্জারি", "পেটের ব্যথা", "অ্যাপেন্ডিক্স"], keywordsEn: ["surgery", "operation", "appendix", "abdominal"] },
  { id: "dentistry", nameBn: "দন্ত বিশেষজ্ঞ (ডেন্টিস্ট)", nameEn: "Dentist", keywordsBn: ["দাঁত", "মাড়ি", "দন্ত", "রুট ক্যানেল"], keywordsEn: ["tooth", "gum", "dental", "root canal"] },
];
