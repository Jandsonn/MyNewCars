export async function fetchCars () {
    const headers = {
            'X-RapidAPI-Key': '2bc45d4abemsh07c236419c365afp11a2cbjsnfd20dacef602',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers : headers,

    });

    const result = await response.json();

    return result;
}