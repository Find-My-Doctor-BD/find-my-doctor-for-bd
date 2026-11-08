import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
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
            <img src={heroImg} alt="ডাক্তার খোঁজা" className="w-72 md:w-96 drop-shadow-2xl rounded-3xl" />
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
