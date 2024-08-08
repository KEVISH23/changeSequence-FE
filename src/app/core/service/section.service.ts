import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private baseUrl:string = "http://localhost:3000/section"
  constructor(
    private http:HttpClient
  ) {
    // this.demoSubject.next(3)
   }

  public itemsSubject = new Subject()
  
//http://localhost:3000/section/update
  getAllSections(){
    return this.http.get(this.baseUrl+'/')
  }
  changeSequence(id:string,sequence:number){
    return this.http.put(this.baseUrl+'/update/'+id,{sequence})
  }
  deleteSection(id:string){
    return this.http.delete(this.baseUrl+'/delete/'+id)
  }

}
