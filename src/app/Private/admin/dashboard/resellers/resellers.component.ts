import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface Resseller {
  numero: string;
  revendeur: string;
  demandeur: string;
  dateCreation: string;
}
const ELEMENT_DATA: Resseller[] = [
  {numero: 'PRTNR202104-8159', revendeur: 'Aydrogen', demandeur: 'sss', dateCreation: '3/10/2021'},
  {numero: 'PRTNR202104-8156', revendeur: 'Zydrogen', demandeur: 'Kempten', dateCreation: '3/10/2021'},
  {numero: 'PRTNR202104-8157', revendeur: 'Bydrogen', demandeur: 'Kempten', dateCreation: '3/10/2021'},
  {numero: 'PRTNR202104-8155', revendeur: 'Fydrogen', demandeur: 'Kempten', dateCreation: '3/10/2021'},
  {numero: 'PRTNR202104-8156', revendeur: 'Hydrogen', demandeur: 'Kempten', dateCreation: '3/10/2021'},
  {numero: 'PRTNR202104-8157', revendeur: 'Hydrogen', demandeur: 'Kempten', dateCreation: '3/10/2021'},
  {numero: 'PRTNR202104-8155', revendeur: 'Hydrogen', demandeur: 'Kempten', dateCreation: '3/10/2021'},
  {numero: 'PRTNR202104-8156', revendeur: 'Hydrogen', demandeur: 'Kempten', dateCreation: '3/10/2021'},
  {numero: 'PRTNR202104-8157', revendeur: 'Hydrogen', demandeur: 'Kempten', dateCreation: '3/10/2021'},
  {numero: 'PRTNR202104-8155', revendeur: 'Hydrogen', demandeur: 'Kempten', dateCreation: '3/10/2021'},
  {numero: 'PRTNR202104-8156', revendeur: 'Hydrogen', demandeur: 'Kempten', dateCreation: '3/10/2021'},
  {numero: 'PRTNR202104-8157', revendeur: 'Hydrogen', demandeur: 'Kempten', dateCreation: '3/10/2021'},
];
@Component({
  selector: 'app-resellers',
  templateUrl: './resellers.component.html',
  styleUrls: ['./resellers.component.css']
})
export class ResellersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['numero', 'Revendeur', 'Demandeur', 'dateCreation', 'modifier'];
  dataSource!: MatTableDataSource<Resseller>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private titleService:Title) { this.titleService.setTitle("Revendeurs");}
  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
