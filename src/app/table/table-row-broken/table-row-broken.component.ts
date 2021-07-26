import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import { Car } from "../table.model";

@Component({
  selector: "app-table-row-broken",
  templateUrl: "./table-row-broken.component.html",
  styleUrls: ["./table-row-broken.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRowBrokenComponent {
  @Input() car: Car;
}
