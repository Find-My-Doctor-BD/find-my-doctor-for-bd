import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, MapPin, Stethoscope, Hospital, ShieldCheck, Heart, Brain, Baby, Eye, Smile, Activity, Apple, Droplets, Moon, Sun } from "lucide-react";
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

  const healthTips = [
    { title: "ডায়াবেটিস নিয়ন্ত্রণ", desc: "নিয়মিত রক্তে সুগার পরীক্ষা করুন, সুষম খাবার খান এবং নিয়মিত ব্যায়াম করুন।", icon: "🩸", color: "from-red-50 to-rose-50" },
    { title: "হৃদরোগ প্রতিরোধ", desc: "ধূমপান ত্যাগ করুন, লবণ কম খান, নিয়মিত হাঁটুন এবং চাপ কমান।", icon: "❤️", color: "from-pink-50 to-rose-50" },
    { title: "জরুরি সেবা", desc: "জরুরি স্বাস্থ্যসমস্যায় ৯৯৯ নম্বরে কল করুন অথবা নিকটস্থ হাসপাতালে যান।", icon: "🚑", color: "from-amber-50 to-orange-50" },
    { title: "সুষম পুষ্টি", desc: "প্রতিদিন ফল, শাকসবজি, প্রোটিন ও পর্যাপ্ত পানি পান করুন। প্রক্রিয়াজাত খাবার এড়িয়ে চলুন।", icon: "🥗", color: "from-green-50 to-emerald-50" },
    { title: "মানসিক স্বাস্থ্য", desc: "প্রতিদিন কিছু সময় নিজের জন্য রাখুন, ধ্যান করুন এবং প্রিয়জনের সাথে কথা বলুন।", icon: "🧠", color: "from-purple-50 to-indigo-50" },
    { title: "শিশু স্বাস্থ্য", desc: "শিশুদের টিকার সময়সূচি মেনে চলুন, পুষ্টিকর খাবার দিন এবং নিয়মিত বৃদ্ধি পরীক্ষা করুন।", icon: "👶", color: "from-blue-50 to-cyan-50" },
    { title: "চোখের যত্ন", desc: "দীর্ঘক্ষণ স্ক্রিন ব্যবহারের পর ২০-২০-২০ নিয়ম মেনে চলুন। বছরে একবার চোখ পরীক্ষা করান।", icon: "👁️", color: "from-teal-50 to-cyan-50" },
    { title: "দাঁতের যত্ন", desc: "দিনে দুইবার ব্রাশ করুন, ফ্লস ব্যবহার করুন এবং ৬ মাসে একবার দাঁতের ডাক্তার দেখান।", icon: "🦷", color: "from-sky-50 to-blue-50" },
    { title: "পর্যাপ্ত ঘুম", desc: "প্রাপ্তবয়স্কদের প্রতিদিন ৭-৯ ঘণ্টা ঘুম প্রয়োজন। নিয়মিত ঘুমের সময়সূচি মেনে চলুন।", icon: "😴", color: "from-indigo-50 to-violet-50" },
    { title: "হাইড্রেশন", desc: "প্রতিদিন অন্তত ৮ গ্লাস পানি পান করুন। গরমে এবং ব্যায়ামের পর আরও বেশি পানি পান করুন।", icon: "💧", color: "from-cyan-50 to-sky-50" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left animate-fade-in-up">
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
              <button type="submit" className="px-6 py-3 rounded-xl bg-white text-emerald-700 font-semibold hover:bg-emerald-50 flex items-center justify-center gap-2 animate-pulse-glow">
                <Search size={18} /> ডাক্তার খুঁজুন
              </button>
            </form>
          </div>
          <div className="flex-1 flex justify-center animate-float">
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
                <circle cx="120" cy="280" r="20" fill="#047857" stroke="none" className="animate-heartbeat" />
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
        <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-fade-in-up">দ্রুত খুঁজুন</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "বিভাগ অনুযায়ী", icon: <MapPin />, to: "/districts" },
            { label: "জেলা অনুযায়ী", icon: <MapPin />, to: "/districts" },
            { label: "বিশেষজ্ঞ অনুযায়ী", icon: <Stethoscope />, to: "/specialities" },
            { label: "হাসপাতাল অনুযায়ী", icon: <Hospital />, to: "/search?q=" },
          ].map((c, i) => (
            <Link key={c.label} to={c.to} className={`bg-white rounded-2xl p-6 shadow-sm hover-lift flex flex-col items-center gap-3 text-center animate-fade-in-up delay-${(i + 1) * 100}`}>
              <div className="text-emerald-600">{c.icon}</div>
              <span className="font-medium text-gray-700">{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular specialities */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-fade-in-up">জনপ্রিয় বিশেষজ্ঞ</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {specialities.slice(0, 12).map((s, i) => (
            <Link key={s.id} to={`/speciality/${s.id}`} className={`bg-white rounded-xl p-4 shadow-sm hover-lift text-center text-sm font-medium text-gray-700 hover:text-emerald-600 animate-fade-in-up delay-${Math.min((i % 6) + 1, 5) * 100}`}>
              {s.nameBn}
            </Link>
          ))}
        </div>
      </section>

      {/* Popular doctors */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-fade-in-up">জনপ্রিয় বিশেষজ্ঞ ডাক্তার</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctors.slice(0, 6).map((d, i) => (
            <Link key={d.id} to={`/doctor/${d.id}`} className={`bg-white rounded-2xl p-5 shadow-sm hover-lift flex gap-4 animate-fade-in-up delay-${(i % 3) + 1}00`}>
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-2xl animate-float">👨‍⚕️</div>
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
        <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-fade-in-up">বিভাগ অনুযায়ী ডাক্তার</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {divisions.map((dv, i) => (
            <Link key={dv.id} to={`/districts#${dv.id}`} className={`bg-white rounded-xl p-4 shadow-sm hover-lift text-center font-medium text-gray-700 hover:text-emerald-600 animate-fade-in-up delay-${Math.min(i + 1, 5) * 100}`}>
              {dv.nameBn}
            </Link>
          ))}
        </div>
      </section>

      {/* Health info */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 animate-fade-in-up">স্বাস্থ্যবিষয়ক তথ্য</h2>
        <p className="text-gray-600 mb-6 animate-fade-in-up delay-100">প্রতিদিনের স্বাস্থ্য সচেতনতার জন্য গুরুত্বপূর্ণ টিপস</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {healthTips.map((h, i) => (
            <div key={h.title} className={`bg-gradient-to-br ${h.color} rounded-2xl p-5 shadow-sm hover-lift animate-fade-in-up delay-${Math.min((i % 5) + 1, 5) * 100}`}>
              <div className="text-3xl mb-3 animate-float" style={{ animationDelay: `${i * 0.2}s` }}>{h.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">{h.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency banner */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-red-500 to-rose-600 rounded-3xl p-8 text-white text-center animate-pulse-glow">
          <div className="text-4xl mb-3 animate-heartbeat">🚑</div>
          <h2 className="text-2xl font-bold mb-2">জরুরি স্বাস্থ্যসেবা</h2>
          <p className="text-red-100 mb-4">জরুরি স্বাস্থ্যসমস্যায় দেরি না করে নিকটস্থ হাসপাতালে যান অথবা জরুরি সেবায় কল করুন।</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:999" className="px-6 py-3 bg-white text-red-600 rounded-xl font-bold hover:bg-red-50 transition">📞 ৯৯৯ (জাতীয় জরুরি সেবা)</a>
            <a href="tel:16263" className="px-6 py-3 bg-white/20 text-white rounded-xl font-bold hover:bg-white/30 transition border border-white/40">📞 ১৬২৬৩ (স্বাস্থ্য বাতায়ন)</a>
          </div>
        </div>
      </section>

      {/* Doctor registration */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-emerald-50 rounded-3xl p-8 text-center hover-lift">
          <ShieldCheck className="mx-auto text-emerald-600 mb-4 animate-float" size={40} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">ডাক্তার রেজিস্ট্রেশন</h2>
          <p className="text-gray-600 mb-4">আপনি কি একজন চিকিৎসক? আপনার তথ্য যুক্ত করতে অ্যাডমিনের সাথে যোগাযোগ করুন।</p>
          <Link to="/admin" className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 animate-pulse-glow">রেজিস্ট্রেশন করুন</Link>
        </div>
      </section>
    </div>
  );
}