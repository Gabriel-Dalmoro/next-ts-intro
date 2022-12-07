let y: any

interface Brasil {
    population: number;
    continent: string;
    yearOfFounding?: number;
}

let countryOfOrigin: Brasil = {
    population: 654654,
    continent: 'south america'
}

type ContactName = string