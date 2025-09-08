import { properties } from "../data/data";
import { detail } from "../data/data";
import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PropertyComp = () => {
  let navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setIsModalOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const filteredProperties = detail.filter((property) => {
    const matchesQuery = property.title.toLowerCase().includes(query.toLowerCase());
    const matchesCluster = selectedCluster ? property.title === selectedCluster : true;
    return matchesQuery && matchesCluster;
  });

  return (
    <>
      <div className="mx-auto w-full bg-[#FCFCFC] h-full flex items-center justify-center">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="flex justify-center items-center w-full mt-20">
            <h1 className="text-lg sm:text-4xl md:text-5xl text-center lg:text-start py-6 font-josefin font-semibold text-black">Our Properties</h1>
          </div>

          <div className="flex flex-col justify-center mb-5 w-full max-w-xs sm:max-w-4xl">
            <form onSubmit={handleSearch} className="flex items-center bg-red-100 p-2 rounded-full shadow-md">
              <input
                type="text"
                placeholder="Search Cluster..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border border-gray-300 bg-white rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-300"
              />
              <button type="submit" className="bg-red-300 text-white px-4 py-2 rounded-full ml-2 hover:bg-red-400 transition-colors duration-300">
                <Search />
              </button>
            </form>

            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {properties.map((property) => (
                <button
                  key={property.id}
                  onClick={() => setSelectedCluster(selectedCluster === property.title ? null : property.title)}
                  className={`px-4 py-1 text-sm rounded-full border transition-all duration-200 ${selectedCluster === property.title ? "bg-red-300 text-white border-red-300" : "bg-white text-gray-700 border-gray-300 hover:border-red-400"}`}
                >
                  {property.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Properti */}
      <div className="w-full bg-[#FCFCFC] h-full py-10">
        <div className="w-full max-w-6xl mx-auto bg-[#FCFCFC] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div onClick={() => openModal(property)} key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                  <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
                    <p className="text-gray-600">{property.location}</p>
                    <p className="bg-red-300 text-black w-40 p-2 rounded-lg text-center font-bold mt-2">{property.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">Tidak ada properti ditemukan.</p>
            )}
            {isModalOpen && selectedProperty && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <button onClick={closeModal} className="p-2 text-white hover:text-black text-center">
                  <i className="fi fi-rr-circle-xmark text-2xl"></i>
                </button>

                <div className="bg-white rounded-lg p-6 w-80 sm:w-full max-w-xl relative">
                  <img src={selectedProperty.image} alt={selectedProperty.title} className="w-85 sm:w-full h-60 object-cover mx-auto rounded-md mb-4" />
                  <h2 className="text-2xl font-bold mb-2">{selectedProperty.title}</h2>
                  <p className="text-gray-600 mb-1">
                    <strong>Location:</strong> {selectedProperty.location}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Price:</strong> {selectedProperty.price}
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Specifications:</strong> {selectedProperty.specs || "Tidak tersedia"}
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Description:</strong> {selectedProperty.description || "Tidak tersedia"}
                  </p>
                  <button onClick={navigate.bind(null, "/Contact")} className="bg-red-300 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition">
                    Reservasi Sekarang
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyComp;
