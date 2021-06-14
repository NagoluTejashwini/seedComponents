import { SeedDetails } from './../seed-details';
import{SeedSeviceService} from './../seed-sevice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-seeds',
  templateUrl: './all-seeds.component.html',
  styleUrls: ['./all-seeds.component.css']
})
export class AllSeedsComponent implements OnInit {

  __seedService:SeedSeviceService;
  unitsInCart:number = 0; 
  constructor(ss:SeedSeviceService) {
    this.__seedService=ss;
   }

  ngOnInit(): void {
  }

  getAllSeeds():SeedDetails[]{
    return this.__seedService.getAllSeeds();
  }

  addToCart()
  {
    this.unitsInCart++;
    console.log(this.unitsInCart);
  }
  doShare(name:string){
    console.log(name + " is shared");
  }
 getRating(n:number): Array<number>{
  return Array(n)
 }
  
}
