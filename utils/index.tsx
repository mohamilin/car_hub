import axios from "axios";

export async function fetchCars(params: string) {
  const options = {
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_RAPID_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_RAPID_HOST,
    },
  };

  const response = await axios.get(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${params}`,
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