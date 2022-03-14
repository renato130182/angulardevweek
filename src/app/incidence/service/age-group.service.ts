import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgeGroup } from '../model/age-group';

@Injectable({
  providedIn: 'root'
})
export class AgeGroupService {

  constructor(
    private http:HttpClient
  ) { }

  listAgeGroupMock(): AgeGroup[]{
    return[
      {id: 1, range_i:0,range_n:10,descriptor:'Até 10 anos'}
    ]
  }

  listAgeGroup(): Observable<AgeGroup[]>{
    const url = '/api/age-groups';
    return this.http.get<AgeGroup[]>(url);
  }

}
