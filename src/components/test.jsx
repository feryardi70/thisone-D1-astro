import { useState } from "react";

const Sidebar = ({ items, isOpen, toggleSidebar }) => {
  return (
    <div className={`h-screen bg-gray-800 text-white transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      <div className="p-4 flex justify-end">
        <button onClick={toggleSidebar} className="text-white hover:text-gray-300">
          {isOpen ? "◀" : "▶"}
        </button>
      </div>
      <nav className="mt-4">
        {items.map((item, index) => (
          <a key={index} href={item.href} className="flex items-center p-4 hover:bg-gray-700 transition-colors">
            <span className="text-xl">{item.icon}</span>
            {isOpen && <span className="ml-2">{item.text}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
};

const RequestListPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sidebarItems = [
    { icon: "🏠", text: "Dashboard", href: "#" },
    { icon: "📋", text: "Permohonan", href: "#" },
    { icon: "📊", text: "Laporan", href: "#" },
    { icon: "⚙️", text: "Pengaturan", href: "#" },
  ];

  return (
    <div className="flex">
      <Sidebar items={sidebarItems} isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex-1 p-4">
        <RequestList />
      </div>
    </div>
  );
};

const RequestList = () => {
  const requests = [
    {
      id: 1,
      registrationNo: "250201060",
      lhuNo: "UK851-20250122-728144",
      instance: "PT. Bukit Asam Medika",
      device: "Philips - wMRCPerformanceTube - 402760",
      scope: "COMPUTED TOMOGRAPHY [CT - Scan]",
      testDate: "22 Januari 2025",
      regDate: "03 Februari 2025",
    },
    {
      id: 2,
      registrationNo: "250209060",
      lhuNo: "UK853-20250128-728131",
      instance: "RSUD Gunung Jati",
      device: "Philips - DU5008C - 401796",
      scope: "COMPUTED TOMOGRAPHY [CT - Scan]",
      testDate: "28 Januari 2025",
      regDate: "03 Februari 2025",
    },
    {
      id: 3,
      registrationNo: "250208060",
      lhuNo: "UK852-20250123-728132",
      instance: "RSUD. Aji Muhammad Parikesit",
      device: "Philips - CTXSTube - SN306075",
      scope: "COMPUTED TOMOGRAPHY [CT - Scan]",
      testDate: "23 Januari 2025",
      regDate: "03 Februari 2025",
    },
  ];

  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Daftar Permohonan</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">No</th>
              <th className="border border-gray-300 p-2">No Registrasi</th>
              <th className="border border-gray-300 p-2">Nomor LHU</th>
              <th className="border border-gray-300 p-2">Instansi Pemohon Uji</th>
              <th className="border border-gray-300 p-2">Data Pesawat</th>
              <th className="border border-gray-300 p-2">Ruang Lingkup</th>
              <th className="border border-gray-300 p-2">Tanggal Pengujian</th>
              <th className="border border-gray-300 p-2">Tanggal Registrasi</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={request.id} className="border border-gray-300">
                <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 p-2">{request.registrationNo}</td>
                <td className="border border-gray-300 p-2">{request.lhuNo}</td>
                <td className="border border-gray-300 p-2">{request.instance}</td>
                <td className="border border-gray-300 p-2">{request.device}</td>
                <td className="border border-gray-300 p-2">{request.scope}</td>
                <td className="border border-gray-300 p-2">{request.testDate}</td>
                <td className="border border-gray-300 p-2">{request.regDate}</td>
                <td className="border border-gray-300 p-2 text-center">
                  <button className="bg-blue-500 text-white p-2 rounded">🔍</button>
                  <button className="bg-yellow-500 text-white p-2 rounded ml-2">💬</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestListPage;
