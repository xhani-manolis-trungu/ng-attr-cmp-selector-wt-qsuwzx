import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "[app-custom-btn]",
  templateUrl: "./custom-btn-attr.component.html",
  styleUrls: ["./custom-btn-attr.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomBtnAttrComponent {
  @Input() icon: string | null;
  @Input() isProcessing = false;
  @Input() processingLabel = "processing...";

  get iconClass(): string {
    return `fa fa-${this.icon}`;
  }
}
