"use client";

import { useEffect, useState } from "react";

import { SearchBar, CustomFilter, Hero } from "@/components";
import { fetchCars } from "@/utils";

export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    let params = "corolla";
    fetchCars(params).then((res) => {
      console.log(res);
      setCars(res)
    });
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogs</h1>
          <p>Lorem ipsum dolor sit amet amet.</p>
        </div>

        {/* Search */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  );
}
