import { useParams, Link } from "react-router-dom";
import { Phone, MapPin, Clock, Award, ExternalLink, ArrowLeft } from "lucide-react";
import { doctors } from "../data/doctors";
import { specialities } from "../data/specialities";
import { divisions, districts } from "../data/divisions";
import { Helmet } from "react-helmet-async";

export default function DoctorProfile() {
  const { id } = useParams();
  const d = doctors.find((x) => x.id === id);
  if (!d) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500">ডাক্তার পাওয়া যায়নি।</p>
        <Link to="/" className="text-emerald-600 mt-4 inline-block">হোমে ফিরুন</Link>
      </div>
    );
  }
  const spec = specialities.find((s) => s.id === d.specialityId);
  const div = divisions.find((x) => x.id === d.divisionId);
  const dist = districts.find((x) => x.id === d.districtId);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Helmet>
        <title>{d.name} — Find My Doctor For BD</title>
        <meta name="description" content={`${d.name} — ${spec?.nameBn} — ${d.hospital}`} />
      </Helmet>
      <Link to="/" className="inline-flex items-center gap-1 text-emerald-600 mb-4"><ArrowLeft size={16} /> হোম</Link>
      <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-32 h-32 rounded-full bg-emerald-100 flex items-center justify-center text-5xl shrink-0 mx-auto md:mx-0">
            👨‍⚕️
          </div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{d.name}</h1>
            <p className="text-emerald-600 font-medium mt-1">{spec?.nameBn}</p>
            <p className="text-gray-500 text-sm mt-1">{d.qualifications}</p>
            <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${d.verificationStatus === "verified" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
              {d.verificationStatus === "verified" ? "যাচাইকৃত" : "যাচাই চলছে"}
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Info icon={<HospitalIcon />} label="হাসপাতাল / ক্লিনিক" value={d.hospital} />
          <Info icon={<MapPin size={18} />} label="চেম্বারের ঠিকানা" value={d.chamberAddress || "তথ্য পাওয়া যায়নি"} />
          <Info icon={<Clock size={18} />} label="রোগী দেখার সময়" value={d.visitingHours || "তথ্য পাওয়া যায়নি"} />
          <Info icon={<Phone size={18} />} label="অ্যাপয়েন্টমেন্ট ফোন" value={d.appointmentPhone || "তথ্য পাওয়া যায়নি"} />
          <Info icon={<Award size={18} />} label="BMDC রেজিস্ট্রেশন" value={d.bmdc || "তথ্য পাওয়া যায়নি"} />
          <Info icon={<MapPin size={18} />} label="জেলা / বিভাগ" value={`${dist?.nameBn || ""} / ${div?.nameBn || ""}`} />
        </div>

        {d.appointmentPhone && (
          <a href={`tel:${d.appointmentPhone}`} className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700">
            <Phone size={18} /> কল করুন
          </a>
        )}

        {d.officialProfileUrl && (
          <a href={d.officialProfileUrl} target="_blank" rel="noopener noreferrer" className="mt-4 ml-3 inline-flex items-center gap-2 px-6 py-3 border border-emerald-600 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50">
            <ExternalLink size={18} /> অফিসিয়াল প্রোফাইল
          </a>
        )}

        <div className="mt-8 text-xs text-gray-500 space-y-1">
          <p>তথ্যসূত্র: {d.sourceUrl || "তথ্য পাওয়া যায়নি"}</p>
          <p>সর্বশেষ যাচাই: {d.lastVerified}</p>
        </div>

        <div className="mt-6 p-4 bg-amber-50 rounded-xl text-xs text-amber-800">
          ডাক্তারের চেম্বার, রোগী দেখার সময় ও যোগাযোগের তথ্য পরিবর্তিত হতে পারে। অ্যাপয়েন্টমেন্ট নেওয়ার আগে সংশ্লিষ্ট হাসপাতাল বা চেম্বারের সঙ্গে যোগাযোগ করে তথ্য নিশ্চিত করুন।
        </div>
      </div>
    </div>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="text-emerald-600 mt-0.5">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );
}

function HospitalIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg>;
}
