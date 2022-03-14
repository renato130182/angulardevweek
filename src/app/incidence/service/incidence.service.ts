import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incidence } from '../model/incidence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidenceService {

  constructor(
    private http:HttpClient
  ) { }

  listIncidenceMock(): Incidence[]{
    return[
      {id: 1, age_group_id: 2, mouth: 5, num_exams: 1,region_id: 1}
    ]
  }
  listIncidence(): Observable<Incidence[]>{
    const url = '/api/incidences';
    return this.http.get<Incidence[]>(url);
  }
}
