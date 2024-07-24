import React, { useState, useEffect } from "react";
import Filters from "../../components/Popular_Categories/Filters";
import ProductGrid from "../../components/Popular_Categories/ProductGrid";

import axios from "axios";

function HandMadeSoaps() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        if (response.data && Array.isArray(response.data.products)) {
          // Map dummyjson data to match your existing structure
          const mappedProducts = response.data.products.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            image: product.images?.[0] || "", // Ensuring images array is present
            rating: {
              rate: product.rating,
              count: product.reviews?.length || 0,, // Ensuring reviews array is present
            },
          }));
          setProducts(mappedProducts);
          setFilteredProducts(mappedProducts);
        } 
      } catch (error) {
        console.error("Axios error:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products
        .filter(
          (product) => !categoryFilter || product.category === categoryFilter
        )
        .filter(
          (product) => !priceFilter || product.price <= parseInt(priceFilter)
        )
        .filter(
          (product) =>
            !ratingFilter || Math.round(product.rating.rate) >= ratingFilter
        )
    );
  }, [products, categoryFilter, priceFilter, ratingFilter]);

  return (
    <div className="bg-[#fff5edff] min-h-screen">
      {/* <Header 
        backgroundUrl="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/28228/images/Z9Tq7TweS5KotRGQ7uts_KendraCote_CM-34_opt.jpg" 
        headingText="Hand Made Soaps Products"
        paragraphText="Home/Hand Made Soaps Products"
      /> */}
      <main className="container">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          <Filters
            setCategoryFilter={setCategoryFilter}
            setPriceFilter={setPriceFilter}
            setRatingFilter={setRatingFilter}
            backgroundColor="#e0bbadff"
          />
          <ProductGrid
            products={filteredProducts}
            headingText="HandMade Soaps"
          />
        </div>
      </main>
    </div>
  );
}

export default HandMadeSoaps;
