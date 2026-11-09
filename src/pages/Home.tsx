import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// hero image removed in favor of inline SVG illustration
import { Search, MapPin, Stethoscope, Hospital, ShieldCheck } from "lucide-react";
import { divisions } from "../data/divisions";
import { specialities } from "../data/specialities";
import { doctors } from "../data/doctors";

export default function Home() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">আপনার সমস্যার জন্য সঠিক বিশেষজ্ঞ ডাক্তার খুঁজুন</h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-8">
              রোগের নাম, শারীরিক সমস্যা অথবা বিশেষজ্ঞের ধরন লিখে বাংলাদেশের অভিজ্ঞ ডাক্তারদের খুঁজে নিন।
            </p>
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-2xl">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="রোগ, উপসর্গ, ডাক্তার অথবা বিশেষজ্ঞের নাম লিখুন"
                className="flex-1 px-5 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-emerald-300"
              />
              <button type="submit" className="px-6 py-3 rounded-xl bg-white text-emerald-700 font-semibold hover:bg-emerald-50 flex items-center justify-center gap-2">
                <Search size={18} /> ডাক্তার খুঁজুন
              </button>
            </form>
          </div>
          <div className="flex-1 flex justify-center">
            <svg viewBox="0 0 400 400" className="w-48 md:w-72 lg:w-96 drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#d1fae5" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#g)" />
              <g transform="translate(80,60)" fill="none" stroke="#047857" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="120" cy="80" r="40" fill="#047857" stroke="none" />
                <path d="M80 120 Q80 180 120 200 Q160 180 160 120" />
                <path d="M120 200 L120 260" />
                <circle cx="120" cy="280" r="20" fill="#047857" stroke="none" />
                <path d="M100 280 L60 280 L60 240" />
                <circle cx="60" cy="230" r="12" fill="#059669" stroke="none" />
              </g>
              <g transform="translate(40,300)" fill="none" stroke="#10b981" strokeWidth="6" strokeLinecap="round">
                <path d="M0 20 L30 20 L40 0 L50 40 L60 20 L90 20 L100 5 L110 35 L120 20 L320 20" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Quick categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">দ্রুত খুঁজুন</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "বিভাগ অনুযায়ী", icon: <MapPin />, to: "/districts" },
            { label: "জেলা অনুযায়ী", icon: <MapPin />, to: "/districts" },
            { label: "বিশেষজ্ঞ অনুযায়ী", icon: <Stethoscope />, to: "/specialities" },
            { label: "হাসপাতাল অনুযায়ী", icon: <Hospital />, to: "/search?q=" },
          ].map((c) => (
            <Link key={c.label} to={c.to} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center gap-3 text-center">
              <div className="text-emerald-600">{c.icon}</div>
              <span className="font-medium text-gray-700">{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular specialities */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">জনপ্রিয় বিশেষজ্ঞ</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {specialities.slice(0, 12).map((s) => (
            <Link key={s.id} to={`/speciality/${s.id}`} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md text-center text-sm font-medium text-gray-700 hover:text-emerald-600">
              {s.nameBn}
            </Link>
          ))}
        </div>
      </section>

      {/* Popular doctors */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">জনপ্রিয় বিশেষজ্ঞ ডাক্তার</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctors.slice(0, 6).map((d) => (
            <Link key={d.id} to={`/doctor/${d.id}`} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md flex gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">👨‍⚕️</div>
              <div>
                <p className="font-semibold text-gray-800">{d.name}</p>
                <p className="text-sm text-emerald-600">{specialities.find((s) => s.id === d.specialityId)?.nameBn}</p>
                <p className="text-xs text-gray-500">{d.hospital}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Divisions */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">বিভাগ অনুযায়ী ডাক্তার</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {divisions.map((dv) => (
            <Link key={dv.id} to={`/districts#${dv.id}`} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md text-center font-medium text-gray-700 hover:text-emerald-600">
              {dv.nameBn}
            </Link>
          ))}
        </div>
      </section>

      {/* Health info */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">স্বাস্থ্যবিষয়ক তথ্য</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "ডায়াবেটিস নিয়ন্ত্রণ", desc: "নিয়মিত রক্তে সুগার পরীক্ষা করুন, সুষম খাবার খান এবং নিয়মিত ব্যায়াম করুন।", icon: "🩸" },
            { title: "হৃদরোগ প্রতিরোধ", desc: "ধূমপান ত্যাগ করুন, লবণ কম খান, নিয়মিত হাঁটুন এবং চাপ কমান।", icon: "❤️" },
            { title: "জরুরি সেবা", desc: "জরুরি স্বাস্থ্যসমস্যায় ৯৯৯ নম্বরে কল করুন অথবা নিকটস্থ হাসপাতালে যান।", icon: "🚑" },
          ].map((h) => (
            <div key={h.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-3">{h.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{h.title}</h3>
              <p className="text-sm text-gray-600">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctor registration */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-emerald-50 rounded-3xl p-8 text-center">
          <ShieldCheck className="mx-auto text-emerald-600 mb-4" size={40} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">ডাক্তার রেজিস্ট্রেশন</h2>
          <p className="text-gray-600 mb-4">আপনি কি একজন চিকিৎসক? আপনার তথ্য যুক্ত করতে অ্যাডমিনের সাথে যোগাযোগ করুন।</p>
          <Link to="/admin" className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700">রেজিস্ট্রেশন করুন</Link>
        </div>
      </section>
    </div>
  );
}
