"use client";

import { useEffect, useState } from "react";

import { SearchBar, CustomFilter, Hero, CardCar } from "@/components";
import { fetchCars } from "@/utils";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("corolla");
  const [messageError, setMessageError] = useState("");
  useEffect(() => {
    let params = "bmw";
    fetchCars(params)
      .then((res) => {
        console.log(res);
        setCars(res);
      })
      .catch((e) => {
        console.log(
          e.response.data.info,
          "https://meliasehatsejahtera.biz.id/#"
        );
        setMessageError(e.response.data.info);
      });
  }, []);

  const dataIsEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;

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
            <CustomFilter title="Fuel" />
            <CustomFilter title="Year" />
          </div>
        </div>

        {!dataIsEmpty && !messageError ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((item, index) => (
                <CardCar car={item} key={index} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            {messageError ? (
              <h2 className="text-black text-xl font-bold">
                SERVER ERROR <br/>
                <span>{messageError}</span>
              </h2>
            ) : (
              <h2 className="text-black text-xl font-bold">Loding ...</h2>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
