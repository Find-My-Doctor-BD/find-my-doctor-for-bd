import { useState } from "react";
import { doctors as seedDoctors } from "../data/doctors";
import type { Doctor } from "../data/doctors";
import { specialities } from "../data/specialities";
import { divisions, districts } from "../data/divisions";

export default function Admin() {
  const [list, setList] = useState<Doctor[]>(() => {
    const saved = localStorage.getItem("fmd_doctors");
    return saved ? JSON.parse(saved) : seedDoctors;
  });
  const [form, setForm] = useState<Partial<Doctor>>({});

  const save = (next: Doctor[]) => {
    setList(next);
    localStorage.setItem("fmd_doctors", JSON.stringify(next));
  };

  const add = () => {
    if (!form.name || !form.specialityId) return;
    const doc: Doctor = {
      id: `dr-${Date.now()}`,
      name: form.name!,
      qualifications: form.qualifications || "",
      specialityId: form.specialityId!,
      hospital: form.hospital || "",
      chamberAddress: form.chamberAddress || null,
      visitingHours: form.visitingHours || null,
      appointmentPhone: form.appointmentPhone || null,
      bmdc: form.bmdc || null,
      divisionId: form.divisionId || "dhaka",
      districtId: form.districtId || "dhaka",
      sourceUrl: form.sourceUrl || null,
      lastVerified: new Date().toISOString().slice(0, 10),
      verificationStatus: "unverified",
    };
    save([doc, ...list]);
    setForm({});
  };

  const remove = (id: string) => save(list.filter((d) => d.id !== id));

  const exportCSV = () => {
    const header = ["id", "name", "qualifications", "specialityId", "hospital", "districtId", "divisionId", "bmdc", "appointmentPhone"];
    const rows = list.map((d) => header.map((h) => JSON.stringify((d as any)[h] ?? "")).join(","));
    const csv = [header.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "doctors.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">অ্যাডমিন ড্যাশবোর্ড</h1>
      <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-xl mb-6">
        নোট: এই স্ট্যাটিক ভার্সনে ডেটা ব্রাউজারের localStorage-এ সংরক্ষিত হয়। প্রোডাকশনে Supabase ব্যবহার করুন।
      </p>

      <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
        <h2 className="font-semibold mb-4">নতুন ডাক্তার যোগ করুন</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className="border rounded-lg px-3 py-2" placeholder="নাম" value={form.name || ""} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <select className="border rounded-lg px-3 py-2" value={form.specialityId || ""} onChange={(e) => setForm({ ...form, specialityId: e.target.value })}>
            <option value="">বিশেষজ্ঞ নির্বাচন</option>
            {specialities.map((s) => <option key={s.id} value={s.id}>{s.nameBn}</option>)}
          </select>
          <input className="border rounded-lg px-3 py-2" placeholder="যোগ্যতা" value={form.qualifications || ""} onChange={(e) => setForm({ ...form, qualifications: e.target.value })} />
          <input className="border rounded-lg px-3 py-2" placeholder="হাসপাতাল" value={form.hospital || ""} onChange={(e) => setForm({ ...form, hospital: e.target.value })} />
          <select className="border rounded-lg px-3 py-2" value={form.divisionId || ""} onChange={(e) => setForm({ ...form, divisionId: e.target.value })}>
            <option value="">বিভাগ</option>
            {divisions.map((d) => <option key={d.id} value={d.id}>{d.nameBn}</option>)}
          </select>
          <select className="border rounded-lg px-3 py-2" value={form.districtId || ""} onChange={(e) => setForm({ ...form, districtId: e.target.value })}>
            <option value="">জেলা</option>
            {districts.map((d) => <option key={d.id} value={d.id}>{d.nameBn}</option>)}
          </select>
          <input className="border rounded-lg px-3 py-2" placeholder="চেম্বার ঠিকানা" value={form.chamberAddress || ""} onChange={(e) => setForm({ ...form, chamberAddress: e.target.value })} />
          <input className="border rounded-lg px-3 py-2" placeholder="রোগী দেখার সময়" value={form.visitingHours || ""} onChange={(e) => setForm({ ...form, visitingHours: e.target.value })} />
          <input className="border rounded-lg px-3 py-2" placeholder="ফোন" value={form.appointmentPhone || ""} onChange={(e) => setForm({ ...form, appointmentPhone: e.target.value })} />
          <input className="border rounded-lg px-3 py-2" placeholder="BMDC" value={form.bmdc || ""} onChange={(e) => setForm({ ...form, bmdc: e.target.value })} />
          <input className="border rounded-lg px-3 py-2 md:col-span-2" placeholder="সোর্স URL" value={form.sourceUrl || ""} onChange={(e) => setForm({ ...form, sourceUrl: e.target.value })} />
        </div>
        <div className="mt-4 flex gap-3">
          <button onClick={add} className="px-5 py-2 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700">যোগ করুন</button>
          <button onClick={exportCSV} className="px-5 py-2 border border-emerald-600 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50">CSV এক্সপোর্ট</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3">নাম</th>
              <th className="text-left px-4 py-3">বিশেষজ্ঞ</th>
              <th className="text-left px-4 py-3">হাসপাতাল</th>
              <th className="text-left px-4 py-3">জেলা</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {list.map((d) => (
              <tr key={d.id} className="border-t">
                <td className="px-4 py-3">{d.name}</td>
                <td className="px-4 py-3">{specialities.find((s) => s.id === d.specialityId)?.nameBn}</td>
                <td className="px-4 py-3">{d.hospital}</td>
                <td className="px-4 py-3">{districts.find((x) => x.id === d.districtId)?.nameBn}</td>
                <td className="px-4 py-3">
                  <button onClick={() => remove(d.id)} className="text-red-600 hover:underline">মুছুন</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
