import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-custom-btn",
  templateUrl: "./custom-btn.component.html",
  styleUrls: ["./custom-btn.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomBtnComponent {
  @Input() icon: string | null;
  @Input() isDisabled = false;
  @Input() isProcessing = false;
  @Input() processingLabel = "processing...";

  @Output() clicked = new EventEmitter<void>();

  get iconClass(): string {
    return `fa fa-${this.icon}`;
  }

  onClick() {
    this.clicked.emit();
  }
}