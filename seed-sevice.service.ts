import { SeedDetails } from './seed-details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeedSeviceService {

  constructor() { }

  imageRootPath:string = 'assets/images';

  getAllSeeds():SeedDetails[]{
    let seed1: SeedDetails={
    commonName:"Mango",
    bloomTime : "One week",
    watering : "Twice a day",
    difficultyLevel :"easy",
    temparature :"25ºC",
    typeOfSeeds : "Monocotyledonous",
    seedsDescription : "This seed is a small embryonic plant",
    seedsStock :15,
    seedsCost:250,
    seedsPerPacket:2000,
    rating:3,
    image:'assets/images/appleseed.jpeg'
    }

    let seed2: SeedDetails={
      commonName:"Guava",
      bloomTime : "One week",
      watering : "Twice a day",
      difficultyLevel :"easy",
      temparature :"25ºC",
      typeOfSeeds : "Monocotyledonous",
      seedsDescription : "This seed is a small embryonic plant",
      seedsStock :15,
      seedsCost:250,
      seedsPerPacket:2000,
      rating:4,
      image:'assets/images/guavaSeeds.jpg'
      }

      let seed3: SeedDetails={
        commonName:"Guava",
        bloomTime : "One week",
        watering : "Twice a day",
        difficultyLevel :"easy",
        temparature :"25ºC",
        typeOfSeeds : "Monocotyledonous",
        seedsDescription : "This seed is a small embryonic plant",
        seedsStock :15,
        seedsCost:250,
        seedsPerPacket:2000,
        rating:4,
        image:'assets/images/guavaSeeds.jpg'
        }
      return [seed1, seed2,seed3];
  }
  
}
