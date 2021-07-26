import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import { Car } from "../table.model";

@Component({
  selector: "[app-table-row]",
  templateUrl: "./table-row.component.html",
  styleUrls: ["./table-row.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRowComponent {
  @Input() car: Car;
}
