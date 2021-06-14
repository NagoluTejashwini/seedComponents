import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'stringPipe'})
export class MyPipe implements PipeTransform{
    transform(value :string){
        if(value.length>3){
            return value[0]+value[1]+value[2]+'...';
        }
        return value;
    }
}
