import React, { useState, useEffect } from "react";
import Filters from "../../components/Popular_Categories/Filters";
import ProductGrid from "../../components/Popular_Categories/ProductGrid";

import axios from "axios";

function OrganicSoaps() {
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
            image: product.images[0], // Assuming images array is present
            rating: {
              rate: product.rating,
              count: product.reviews.length, // Assuming reviews array is present
            },
          }));
          setProducts(mappedProducts);
          setFilteredProducts(mappedProducts);
        } 
      } catch (error) {
        console.error("Failed to fetch products:", error);
        
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
        backgroundUrl="https://th.bing.com/th/id/OIP.Ss1zfHpCipHbJnHRouP-gwHaCj?w=879&h=303&rs=1&pid=ImgDetMain" 
        headingText="Organic Soaps Products"
        paragraphText="Home/Organic Soaps Products"
      /> */}
      <main className="container">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          <Filters
            setCategoryFilter={setCategoryFilter}
            setPriceFilter={setPriceFilter}
            setRatingFilter={setRatingFilter}
            backgroundColor="#ffeda6ff"
          />
          <ProductGrid
            products={filteredProducts}
            headingText="Organic Soaps"
          />
        </div>
      </main>
    </div>
  );
}

export default OrganicSoaps;
