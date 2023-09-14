import { CardCarProps, FilterProps } from "@/types";
import axios from "axios";

export async function fetchCars(params: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = params;

  const options = {
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_RAPID_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_RAPID_HOST,
    },
  };

  const response = await axios.get(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    options
  );
  return response.data;
}

export function calculateRent(city_mpg: number, year: number) {
  const basePricePerDay = 50;
  const milleageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * milleageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}

export const generateImageUrl = (car:CardCarProps, angle?:string) => {
 
  const {make, model, year} = car
  const url = new URL('https://cdn.imagin.studio/getimage')

  url.searchParams.append('customer', 'hrjavacript-mastery');

  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)

  url.searchParams.append('angle', `${angle}`)


  return `${url}`

}

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};