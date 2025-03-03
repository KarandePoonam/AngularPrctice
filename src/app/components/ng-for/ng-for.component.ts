import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string[] = ["Pune", "Nagpur", "Nashik", "Mumbai", "Thane"];

  employeeArray:any[]=[
    {emId:121,name:'AAA',city:'Pune'},
    {emId:122,name:'AAB',city:'Mumbai'},
    {emId:123,name:'AAC',city:'Nashik'},
    {emId:124,name:'AAD',city:'Nagpur'},
    {emId:125,name:'AAE',city:'Thane'}
  ]
}
