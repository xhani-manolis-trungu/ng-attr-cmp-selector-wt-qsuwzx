import { Component, OnInit } from "@angular/core";

import { Car } from "./table.model";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent {
  cars: Car[] = [
    { id: 1, name: "Porsche", color: "yellow" },
    { id: 2, name: "Ferrari", color: "red" }
  ];
}
