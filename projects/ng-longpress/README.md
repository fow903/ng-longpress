# ng-longpress

**ng-longpress** is an Angular directive that detects long press events on elements. When a user presses and holds the mouse button, the directive emits a typed `MouseEvent` repeatedly until the press is released. This package is perfect for adding custom long press behavior to your Angular applications.

## Features

- Detects long press events on any element.
- Repeatedly emits events while the mouse button is held down.
- Provides a typed `MouseEvent` for strong type-checking in TypeScript.
- Compatible with Angular 14+ (supports standalone directives if needed).

## Installation

Install the package via npm:

```bash
npm i @edwin2delossantos/ng-longpress
```

## Usage

### Importing the Module

To use the directive, import the `NgLongpressModule` into the Angular module where you want the directive to be available. For example, in your AppModule or any feature module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgLongpressModule } from '@edwin2delossantos/ng-longpress';

@NgModule({
  declarations: [
    // your components here
  ],
  imports: [
    BrowserModule,
    NgLongpressModule  // Import the module to use the long press directive
  ],
  bootstrap: [/* your root component */]
})
export class AppModule { }
```

### Using the Directive in a Template

Once the module is imported, you can use the directive in your component templates. Add the `appLongPress` attribute to any element and bind to its `longPress` event:

```html
<div appLongPress (longPress)="onLongPress($event)">
  Press and hold this element
</div>
```

### Handling the Long Press Event

Define an event handler in your component to respond to the long press event:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  onLongPress(event: MouseEvent): void {
    console.log('Long press event detected!', event);
    // Add your long press logic here
  }
}
```

## How It Works

- **Long Press Threshold:** The directive waits for 500 milliseconds after a `mousedown` event before emitting the first long press event.
- **Repeat Rate:** Once the threshold is met, the directive emits the event repeatedly every 100 milliseconds until the user releases the mouse button or moves the cursor away.
- **Event Handling:** The directive emits a typed `MouseEvent` for strong TypeScript integration.

## Standalone vs Module Declaration

If you are using Angular 14+ and prefer to keep the directive standalone, you can mark it as `standalone: true` in its decorator and then import it directly. For module-based usage (recommended for libraries), ensure that the directive is not marked as standalone or, if it is, re-export it via a module as shown above.

## License

This project is licensed under the MIT License.
