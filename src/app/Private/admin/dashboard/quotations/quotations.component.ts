import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface Devis {
  num: string;
  client: string;
  distributeur: string;
  status: string;
  dateCreation: string;
}
const ELEMENT_DATA: Devis[] = [
  {num: 'Q-428750', client: 'Software Management Solutions (Sms)', distributeur: 'MIPS Micro Informatique', status: 'Brouillon' , dateCreation: "06/07/2022 09:14"},
  {num: 'Q-428750', client: 'Software Management Solutions (Sms)', distributeur: 'MIPS Micro Informatique', status: 'Brouillon' , dateCreation: "06/07/2022 09:14"},
  {num: 'Q-428750', client: 'Software Management Solutions (Sms)', distributeur: 'MIPS Micro Informatique', status: 'Brouillon' , dateCreation: "06/07/2022 09:14"},


];

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css']
})
export class QuotationsComponent implements OnInit {
  selectedValue = '3'
  displayedColumns: string[] = ['num', 'client', 'dist', 'status', 'dateCreation', 'modifier'];
  dataSource!: MatTableDataSource<Devis>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private titleService:Title) { this.titleService.setTitle("Devis");}
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



