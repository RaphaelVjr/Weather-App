import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "São Paulo",
    },
    {
      id: 2,
      title: "Rio de Janeiro",
    },
    {
      id: 3,
      title: "Curitiba",
    },
    {
      id: 4,
      title: "Belo Horizonte",
    },
    {
      id: 5,
      title: "Cuiabá",
    },
  ];

  return (
    <div className="flex items-center truncate justify-around my-6 space-x-4">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
