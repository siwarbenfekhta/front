import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface Client {
  nom: string;
  email: string;
  ville: string;
  pays: string;
}
const ELEMENT_DATA: Client[] = [
  {nom: 'Ministère du plan de la république du NIger', email: 'blaise@blaiseezoua.com', ville: 'Bussy Saint Georges', pays: 'Niger'},
  {nom: 'Ministère du plan de la république du NIger', email: 'blaise@blaiseezoua.com', ville: 'Bussy Saint Georges', pays: 'Niger'},
  {nom: 'Ministère du plan de la république du NIger', email: 'blaise@blaiseezoua.com', ville: 'Bussy Saint Georges', pays: 'Niger'},
  {nom: 'Vista Bank International', email: 'ksakouvogui@vistabankgroup.com', ville: 'Conakry', pays: 'Guinea'},
  {nom: 'Vista Bank International', email: 'ksakouvogui@vistabankgroup.com', ville: 'Conakry', pays: 'Guinea'},
  {nom: 'Vista Bank International', email: 'ksakouvogui@vistabankgroup.com', ville: 'Conakry', pays: 'Guinea'},
  {nom: 'Vista Bank International', email: 'ksakouvogui@vistabankgroup.com', ville: 'Conakry', pays: 'Guinea'},
];
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'email', 'ville', 'pays'];
  dataSource!: MatTableDataSource<Client>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private titleService:Title) { this.titleService.setTitle("Clients");}
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
