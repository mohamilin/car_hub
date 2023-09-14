"use client";

import { useEffect, useState } from "react";

import { SearchBar, CustomFilter, Hero, CardCar, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";

import { fuels, yearsOfProduction } from "@/contants";
export default function Home({ searchParams }: HomeProps) {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("corolla");
  const [messageError, setMessageError] = useState("");
  useEffect(() => {
    let params = {
      manufacturer: searchParams.manufacturer || "",
      year: searchParams.year || 2022,
      model: searchParams.model || "",
      limit: searchParams.limit || 8,
      fuel: searchParams.fuel || "",
    };
    fetchCars(params)
      .then((res) => {
        console.log(res);
        setCars(res);
      })
      .catch((e) => {
        console.log(e.response.data.info);
        setMessageError(e.response.data.info);
      });
  }, [
    searchParams.fuel,
    searchParams.limit,
    searchParams.manufacturer,
    searchParams.model,
    searchParams.year,
  ]);

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
            <CustomFilter title="Fuel" options={fuels} />
            <CustomFilter title="Year" options={yearsOfProduction} />
          </div>
        </div>

        {!dataIsEmpty && !messageError ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((item, index) => (
                <CardCar car={item} key={index} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > cars?.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            {messageError ? (
              <h2 className="text-black text-xl font-bold">
                SERVER ERROR <br />
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
