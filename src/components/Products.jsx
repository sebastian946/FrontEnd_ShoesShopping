import React from "react";

const ProductsDetail = [
  {
    urlImage: "/offwhite.png",
    title: "Off-White",
    description: "Out Of Office 'Ooo' sneakers",
    price: 775,
  },
  {
    urlImage: "/nike.png",
    title: "Nike",
    description: "Nike Air Force Premium",
    price: 200,
  },
  {
    urlImage: "/nike2.png",
    title: "Nike",
    description: "Nike Air Force Premium",
    price: 98.23,
  },
  {
    urlImage: "/adidas.png",
    title: "Adidas",
    description: "Daily 3.0 Shoes",
    price: 98.99,
  },
];

function Products() {
  return (
    <div className="pt-5 flex items-center justify-center">
      <div className="w-full max-w-screen-lg px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
          <div className="flex justify-start items-center">
            <h1 className="text-2xl text-black font-semibold">
              Explore our latest drops
            </h1>
          </div>
          <div className="flex justify-end items-center">
            {/* Puedes añadir filtros u opciones de ordenación aquí */}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ProductsDetail.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.urlImage}
                  className="w-full h-full object-cover object-center"
                  alt={`${product.title} - ${product.description}`}
                />
              </div>
              <div className="p-4">
                <h1 className="text-black font-semibold text-lg">
                  {product.title}
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                  {product.description}
                </p>
                <p className="text-black font-bold text-lg mt-3">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <br />
      </div>
    </div>
  );
}

export default Products;
