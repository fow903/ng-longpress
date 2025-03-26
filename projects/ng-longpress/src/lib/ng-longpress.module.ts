import { NgModule } from '@angular/core';
import { LongPressDirective } from './long-press.directive';

@NgModule({
  imports: [LongPressDirective],
  exports: [LongPressDirective]
})
export class NgLongpressModule { }
