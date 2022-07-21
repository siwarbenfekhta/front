import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface Sub {
  nom: string;
  product: string;
  qte: number;
  status: string;
  client : string;
}
const ELEMENT_DATA: Sub[] = [
  {nom: 'abonnement', product: 'anti-v', qte: 5, status: 'active' , client : 'client1'},
 
];
@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'product', 'qte', 'status' , 'client', 'modifier'];
  dataSource!: MatTableDataSource<Sub>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private titleService:Title) { this.titleService.setTitle("Abonnements");}
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
