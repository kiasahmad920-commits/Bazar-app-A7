import React from "react";
import MarqueeText from "react-marquee-text";

const Marquee = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  const products = data.data ?? data.products ?? data;

  if (!Array.isArray(products)) {
    return <div>Products not found</div>;
  }

  return (
  <div className="bg-green-600 py-2 text-white overflow-hidden">
    <MarqueeText direction="right" duration={10}>
      {[...products, ...products].map((product: any, index: number) => (
        <span key={index} className="mx-4 shrink-0">
          {product.nameBn} •
        </span>
      ))}
    </MarqueeText>
  </div>
);
};

export default Marquee;