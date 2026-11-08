import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import DoctorProfile from "./pages/DoctorProfile";
import DistrictPage from "./pages/DistrictPage";
import SpecialityPage from "./pages/SpecialityPage";
import Admin from "./pages/Admin";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Find My Doctor For BD</title>
      </Helmet>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🩺</span>
            <span className="font-bold text-xl text-emerald-700">Find My Doctor For BD</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-emerald-600">হোম</Link>
            <Link to="/districts" className="hover:text-emerald-600">জেলা</Link>
            <Link to="/specialities" className="hover:text-emerald-600">বিশেষজ্ঞ</Link>
            <Link to="/admin" className="hover:text-emerald-600">অ্যাডমিন</Link>
          </nav>
        </div>
      </header>
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/districts" element={<DistrictPage />} />
          <Route path="/district/:id" element={<DistrictPage />} />
          <Route path="/specialities" element={<SpecialityPage />} />
          <Route path="/speciality/:id" element={<SpecialityPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <footer className="bg-emerald-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p className="font-semibold">Find My Doctor For BD</p>
          <p className="mt-2 text-emerald-200">© 2026 — বাংলাদেশের ডাক্তার অনুসন্ধান প্ল্যাটফর্ম</p>
          <p className="mt-3 text-xs text-emerald-300 max-w-3xl mx-auto">
            Find My Doctor For BD একটি তথ্যভিত্তিক ডাক্তার অনুসন্ধান প্ল্যাটফর্ম। এখানে প্রদত্ত তথ্য চিকিৎসকের পরামর্শ, রোগ নির্ণয় বা চিকিৎসার বিকল্প নয়। কোনো জরুরি স্বাস্থ্যসমস্যা দেখা দিলে নিকটস্থ হাসপাতাল বা জরুরি চিকিৎসাসেবার সঙ্গে যোগাযোগ করুন।
          </p>
          <p className="mt-2 text-xs text-emerald-300 max-w-3xl mx-auto">
            ডাক্তারের চেম্বার, রোগী দেখার সময় ও যোগাযোগের তথ্য পরিবর্তিত হতে পারে। অ্যাপয়েন্টমেন্ট নেওয়ার আগে সংশ্লিষ্ট হাসপাতাল বা চেম্বারের সঙ্গে যোগাযোগ করে তথ্য নিশ্চিত করুন।
          </p>
        </div>
      </footer>
    </>
  );
}
