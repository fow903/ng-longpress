import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[appLongPress]',
})
export class LongPressDirective {
  @Output() longPress = new EventEmitter<MouseEvent>();

  private pressTimeout: any;
  private repeatInterval: any;
  private readonly longPressThreshold = 500;
  private readonly repeatRate = 100;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.pressTimeout = setTimeout(() => {
      this.longPress.emit(event);
      this.repeatInterval = setInterval(() => {
        this.longPress.emit(event);
      }, this.repeatRate);
    }, this.longPressThreshold);
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  onCancel(): void {
    clearTimeout(this.pressTimeout);
    clearInterval(this.repeatInterval);
  }
}
