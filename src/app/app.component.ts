import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  icon = "car";
  isDisabled = false;
  isProcessing = false;

  onClicked() {
    this.isDisabled = true;
    this.isProcessing = true;

    setTimeout(() => {
      this.isDisabled = false;
      this.isProcessing = false;
    }, 2000);
  }
}
