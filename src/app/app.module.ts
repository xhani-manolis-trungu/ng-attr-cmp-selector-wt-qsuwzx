import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { TableComponent } from "./table/table.component";
import { TableRowBrokenComponent } from "./table/table-row-broken/table-row-broken.component";
import { TableRowComponent } from "./table/table-row/table-row.component";
import { CustomBtnComponent } from './custom-btn/custom-btn.component';
import { CustomBtnAttrComponent } from './custom-btn-attr/custom-btn-attr.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TableComponent,
    TableRowBrokenComponent,
    TableRowComponent,
    CustomBtnComponent,
    CustomBtnAttrComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
