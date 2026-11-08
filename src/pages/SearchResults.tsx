import { useSearchParams, Link } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";
import { doctors } from "../data/doctors";
import { specialities } from "../data/specialities";
import { divisions, districts } from "../data/divisions";

function normalize(s: string) {
  return s.toLowerCase().trim();
}

// Disease/symptom -> speciality mapping
const diseaseMap: { keywords: string[]; specialityIds: string[] }[] = [
  { keywords: ["ডায়াবেটিস", "diabetes", "sugar", "সুগার"], specialityIds: ["endocrinology", "general"] },
  { keywords: ["হৃদরোগ", "heart", "cardiac", "বুকে ব্যথা", "উচ্চ রক্তচাপ", "hypertension"], specialityIds: ["cardiology"] },
  { keywords: ["চোখ", "eye", "vision", "ছানি", "cataract"], specialityIds: ["ophthalmology"] },
  { keywords: ["ত্বক", "skin", "allergy", "একজিমা", "rash"], specialityIds: ["dermatology"] },
  { keywords: ["হাড়", "bone", "joint", "knee", "back pain", "আর্থ্রাইটিস"], specialityIds: ["orthopedics", "rheumatology"] },
  { keywords: ["মাথাব্যথা", "headache", "migraine", "stroke", "স্নায়ু"], specialityIds: ["neurology", "general"] },
  { keywords: ["পেট", "stomach", "gastric", "ulcer", "liver", "জন্ডিস", "hepatitis"], specialityIds: ["gastroenterology"] },
  { keywords: ["হাঁপানি", "asthma", "cough", "শ্বাস", "pneumonia", "tb"], specialityIds: ["pulmonology"] },
  { keywords: ["কিডনি", "kidney", "dialysis", "প্রস্রাব"], specialityIds: ["nephrology", "urology"] },
  { keywords: ["গর্ভ", "pregnancy", "মাসিক", "স্ত্রীরোগ", "প্রসব"], specialityIds: ["gynecology"] },
  { keywords: ["শিশু", "child", "baby", "fever", "টিকা"], specialityIds: ["pediatrics", "general"] },
  { keywords: ["ডিপ্রেশন", "depression", "anxiety", "মানসিক", "insomnia"], specialityIds: ["psychiatry"] },
  { keywords: ["ক্যান্সার", "cancer", "tumor"], specialityIds: ["oncology"] },
  { keywords: ["রক্ত", "blood", "anemia", "থ্যালাসেমিয়া"], specialityIds: ["hematology", "general"] },
  { keywords: ["ডেঙ্গু", "dengue", "কোভিড", "covid", "টাইফয়েড", "typhoid", "ম্যালেরিয়া"], specialityIds: ["infectious", "general"] },
  { keywords: ["দাঁত", "tooth", "gum", "dental"], specialityIds: ["dentistry"] },
  { keywords: ["নাক", "কান", "গলা", "nose", "ear", "throat", "sinus"], specialityIds: ["ent"] },
];

export default function SearchResults() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const nq = normalize(q);

  // Determine matched specialities
  const matchedSpecIds = new Set<string>();
  diseaseMap.forEach((m) => {
    if (m.keywords.some((k) => nq.includes(normalize(k)))) {
      m.specialityIds.forEach((id) => matchedSpecIds.add(id));
    }
  });

  // Also match speciality names directly
  specialities.forEach((s) => {
    if (normalize(s.nameBn).includes(nq) || normalize(s.nameEn).includes(nq) || s.keywordsBn.some((k) => normalize(k).includes(nq)) || s.keywordsEn.some((k) => normalize(k).includes(nq))) {
      matchedSpecIds.add(s.id);
    }
  });

  // Filter doctors
  let filtered = doctors.filter((d) => {
    if (!nq) return true;
    const spec = specialities.find((s) => s.id === d.specialityId);
    const div = divisions.find((x) => x.id === d.divisionId);
    const dist = districts.find((x) => x.id === d.districtId);
    const hay = [d.name, d.qualifications, d.hospital, d.chamberAddress, d.bmdc, spec?.nameBn, spec?.nameEn, div?.nameBn, dist?.nameBn]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    if (hay.includes(nq)) return true;
    if (matchedSpecIds.has(d.specialityId)) return true;
    return false;
  });

  // If disease mapping matched, show those specialities prominently
  const matchedSpecs = specialities.filter((s) => matchedSpecIds.has(s.id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-emerald-600 mb-4"><ArrowLeft size={16} /> হোম</Link>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">অনুসন্ধান ফলাফল</h1>
      <p className="text-gray-600 mb-6">
        {q ? `“${q}” এর জন্য ${filtered.length} জন ডাক্তার পাওয়া গেছে` : `মোট ${filtered.length} জন ডাক্তার`}
      </p>

      {matchedSpecs.length > 0 && (
        <div className="mb-6 bg-emerald-50 rounded-2xl p-4">
          <p className="font-semibold text-emerald-800 mb-2">সুপারিশকৃত বিশেষজ্ঞ:</p>
          <div className="flex flex-wrap gap-2">
            {matchedSpecs.map((s) => (
              <Link key={s.id} to={`/speciality/${s.id}`} className="px-3 py-1 bg-white rounded-full text-sm text-emerald-700 border border-emerald-200 hover:bg-emerald-100">
                {s.nameBn}
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">এটি সাধারণ তথ্যভিত্তিক সুপারিশ, রোগ নির্ণয় নয়। জরুরি সমস্যায় নিকটস্থ হাসপাতালে যান।</p>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <Search className="mx-auto mb-3" size={40} />
          <p>কোনো ডাক্তার পাওয়া যায়নি। অন্য কীওয়ার্ড ব্যবহার করুন।</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((d) => {
            const spec = specialities.find((s) => s.id === d.specialityId);
            const dist = districts.find((x) => x.id === d.districtId);
            return (
              <Link key={d.id} to={`/doctor/${d.id}`} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md flex gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-2xl shrink-0">👨‍⚕️</div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-800 truncate">{d.name}</p>
                  <p className="text-sm text-emerald-600">{spec?.nameBn}</p>
                  <p className="text-xs text-gray-500 truncate">{d.hospital}</p>
                  <p className="text-xs text-gray-400">{dist?.nameBn}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
