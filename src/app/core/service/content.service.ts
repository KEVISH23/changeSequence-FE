import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private baseUrl:string = "http://localhost:3000/content"
  constructor(
    private http:HttpClient
  ) { }
//http://localhost:3000/section/update
  getContent(sectionId:string){

    return this.http.post(this.baseUrl+'/getContent',{sectionId})
  }
  changeSequence(id:string,sequence:number){
    console.log({sequence})
    return this.http.put(this.baseUrl+'/update/'+id,{sequence})
  }
}
