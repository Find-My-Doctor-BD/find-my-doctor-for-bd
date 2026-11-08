import { useParams, Link } from "react-router-dom";
import { divisions, districts } from "../data/divisions";
import { doctors } from "../data/doctors";
import { specialities } from "../data/specialities";

export default function DistrictPage() {
  const { id } = useParams();
  if (id) {
    const dist = districts.find((d) => d.id === id);
    const div = divisions.find((d) => d.id === dist?.divisionId);
    const docs = doctors.filter((d) => d.districtId === id);
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link to="/districts" className="text-emerald-600 mb-4 inline-block">← সব জেলা</Link>
        <h1 className="text-2xl font-bold text-gray-800 mb-1">{dist?.nameBn} জেলার ডাক্তার</h1>
        <p className="text-gray-500 mb-6">{div?.nameBn} বিভাগ</p>
        {docs.length === 0 ? (
          <p className="text-gray-500">এই জেলায় এখনো ডাক্তারের তথ্য যুক্ত হয়নি।</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {docs.map((d) => {
              const spec = specialities.find((s) => s.id === d.specialityId);
              return (
                <Link key={d.id} to={`/doctor/${d.id}`} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md flex gap-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-xl shrink-0">👨‍⚕️</div>
                  <div>
                    <p className="font-semibold text-gray-800">{d.name}</p>
                    <p className="text-sm text-emerald-600">{spec?.nameBn}</p>
                    <p className="text-xs text-gray-500">{d.hospital}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Group districts by division
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">বিভাগ ও জেলা অনুযায়ী ডাক্তার</h1>
      {divisions.map((dv) => (
        <div key={dv.id} id={dv.id} className="mb-8">
          <h2 className="text-xl font-semibold text-emerald-700 mb-3">{dv.nameBn} বিভাগ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {districts.filter((d) => d.divisionId === dv.id).map((d) => (
              <Link key={d.id} to={`/district/${d.id}`} className="bg-white rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 shadow-sm">
                {d.nameBn}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
