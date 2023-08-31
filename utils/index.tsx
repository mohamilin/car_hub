import axios from 'axios';

export async function fetchCars(params:string) {
    
    
    const options = {
        headers : {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_RAPID_KEY,
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_RAPID_HOST
        }
    }

    const response = await axios.get(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${params}`, options)
    return response.data
}