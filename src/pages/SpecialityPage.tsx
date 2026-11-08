import { useParams, Link } from "react-router-dom";
import { specialities } from "../data/specialities";
import { doctors } from "../data/doctors";
import { districts } from "../data/divisions";

export default function SpecialityPage() {
  const { id } = useParams();
  if (id) {
    const spec = specialities.find((s) => s.id === id);
    const docs = doctors.filter((d) => d.specialityId === id);
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link to="/specialities" className="text-emerald-600 mb-4 inline-block">← সব বিশেষজ্ঞ</Link>
        <h1 className="text-2xl font-bold text-gray-800 mb-1">{spec?.nameBn}</h1>
        <p className="text-gray-500 mb-6">{spec?.nameEn}</p>
        {docs.length === 0 ? (
          <p className="text-gray-500">এই বিশেষজ্ঞের ডাক্তার এখনো যুক্ত হয়নি।</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {docs.map((d) => {
              const dist = districts.find((x) => x.id === d.districtId);
              return (
                <Link key={d.id} to={`/doctor/${d.id}`} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md flex gap-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-xl shrink-0">👨‍⚕️</div>
                  <div>
                    <p className="font-semibold text-gray-800">{d.name}</p>
                    <p className="text-xs text-gray-500">{d.hospital}</p>
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
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">বিশেষজ্ঞ অনুযায়ী ডাক্তার</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {specialities.map((s) => (
          <Link key={s.id} to={`/speciality/${s.id}`} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md text-center font-medium text-gray-700 hover:text-emerald-600">
            {s.nameBn}
          </Link>
        ))}
      </div>
    </div>
  );
}
