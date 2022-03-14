import { Component, OnInit } from '@angular/core';
import { AgeGroup } from '../../model/age-group';
import { Incidence } from '../../model/incidence';
import { Region } from '../../model/region';
import { AgeGroupService } from '../../service/age-group.service';
import { IncidenceService } from '../../service/incidence.service';
import { RegionService } from '../../service/region.service';


@Component({
  selector: 'app-incidences',
  templateUrl: './incidences.component.html',
  styleUrls: ['./incidences.component.css']
})
export class IncidencesComponent implements OnInit {
  regions: Region[] = [];
  ageGroups: AgeGroup[] = [] ;
  incidences: Incidence[] = []; 
  constructor(private regionService:RegionService,
    private ageGroupService:AgeGroupService,
    private incidenceService:IncidenceService) { }
    
  ngOnInit(): void {
    this.regionService.listRegions().subscribe(
      regions => this.regions = regions);
    
    this.incidenceService.listIncidence().subscribe(
      incidences => this.incidences = incidences);

    this.ageGroupService.listAgeGroup().subscribe(
      ageGroups => this.ageGroups = ageGroups
    );   
  }

}
 