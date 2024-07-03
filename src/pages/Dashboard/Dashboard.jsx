import React, { useState } from "react";
import granola from "../../assets/granola.jpg";
import cuttery from "../../assets/cuttery-set.jpg";
import basket from "../../assets/basket.png";
import shawls from "../../assets/shawals.jpg";
import notebooks from "../../assets/eco-friendly-notebooks.jpeg";
import toothbrushes from "../../assets/Bamboo-Toothbrush-Set.jpeg";
import towels from "../../assets/Organic Cotton Towels.jpg";
import shoppingBags from "../../assets/Reusable-Shopping-Bags.jpeg";
import phoneCase from "../../assets/Biodegradable-Phone-Case.jpeg";
import journals from "../../assets/Recycled-Paper-Journals.webp";
import waterBottle from "../../assets/Glass-Water-Bottle.webp";
import teaSet from "../../assets/Organic-Tea-Set.webp";
import ProductCard from "../../components/ProductCard/ProductCard";
import Aside from "../../components/Aside/Aside";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Dashboard/Header";
import Banner from "../../components/Dashboard/Banner";
import SearchBar from "../../components/Dashboard/SearchBar";
import SeeMore from "../../components/Buttons/SeeMore";
import ViewLess from "../../components/Buttons/ViewLess";

const Dashboard = () => {
  const navigate = useNavigate();

  const initialProducts = [
    {
      image: granola,
      title: "Snacker's Special Granola",
      price: 350,
      rating: 5,
    },
    {
      image: cuttery,
      title: "Wooden Cutlery Set of 7",
      price: 1200,
      rating: 4,
    },
    {
      image: basket,
      title: "Jute Cotton Basket",
      price: 399,
      rating: 4,
    },
    {
      image: shawls,
      title: "Premium Woolen Shawls",
      price: 5000,
      rating: 5,
    },
  ];

  const moreProducts = [
    {
      image: notebooks,
      title: "Eco-Friendly Notebook",
      price: 250,
      rating: 4,
    },
    {
      image: toothbrushes,
      title: "Bamboo Toothbrush Set",
      price: 150,
      rating: 5,
    },
    {
      image: towels,
      title: "Organic Cotton Towels",
      price: 600,
      rating: 4,
    },
    {
      image: shoppingBags,
      title: "Reusable Shopping Bags",
      price: 300,
      rating: 5,
    },
    {
      image: phoneCase,
      title: "Biodegradable Phone Case",
      price: 450,
      rating: 5,
    },
    {
      image: journals,
      title: "Recycled Paper Journals",
      price: 200,
      rating: 4,
    },
    {
      image: waterBottle,
      title: "Glass Water Bottle",
      price: 350,
      rating: 5,
    },
    {
      image: teaSet,
      title: "Organic Tea Set",
      price: 750,
      rating: 5,
    },
  ];

  const [products] = useState([...initialProducts, ...moreProducts]);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [clicked, setClicked] = useState(0);
  const [showViewLess, setShowViewLess] = useState(false);

  const handleSeeMore = () => {
    if (clicked === 0) {
      setVisibleProducts(visibleProducts + 4);
    } else if (clicked === 1) {
      setVisibleProducts(products.length);
      setShowViewLess(true);
    }
    setClicked(clicked + 1);
  };

  const handleViewLess = () => {
    setVisibleProducts(4);
    setClicked(0);
    setShowViewLess(false);
  };

  const handleLogout = () => {
    try {
      let confirmed = confirm("Are you sure want to logout?");
      if (confirmed) {
        localStorage.removeItem("isLoggedin");
        alert("Logout Successfully and safely.");
        navigate("/login");
      } else {
        return;
      }
    } catch (error) {
      alert("Logout Failed. Try Again later");
      console.log(error.data.message);
    }
  };
  return (
    <div className="flex min-h-screen bg-[#fff1e6] mt-1">
      {/* Sidebar */}
      <Aside />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <Header />

        {/* Welcome Banner */}
        <Banner />

        {/* Search Bar */}
        <SearchBar />

        {/* New Today Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">New Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, visibleProducts).map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            {clicked < 2 && (
              <SeeMore />
            )}
            {showViewLess && (
              <ViewLess />
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
