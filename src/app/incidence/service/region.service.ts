import { Injectable } from '@angular/core';
import { Region } from '../model/region';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(
    private http:HttpClient
    ) {}

  listRegions(): Observable<Region[]>{
    const url = '/api/regions';
    return this.http.get<Region[]>(url);
  }
}
