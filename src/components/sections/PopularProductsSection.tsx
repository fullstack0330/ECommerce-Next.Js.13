import React from "react";
import { fetchPopularProducts } from "../../server/handlers/fetchPopularProducts";
import Border from "../Border";
import ProductCard from "../cards/ProductCard";

const PopularProductsSection = async () => {
  const products = await fetchPopularProducts(12);

  return (
    <>
      <Border />
      <div className="sm:mx-3 px-2 sm:py-10 py-5">
        <h2 className="mx-auto max-w-6xl text-2xl font-black mb-4">
          Heat Sneakers 🔥
        </h2>
        <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-1">
          {products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularProductsSection;