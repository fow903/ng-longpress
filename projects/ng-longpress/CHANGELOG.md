## [0.0.2] - 2025-03-26
### Added
- Enhanced the README with additional usage examples and documentation.
- Improved package metadata by adding/updating keywords.
- Optimized the event repeat logic for a smoother long press experience.

### Fixed
- Resolved an issue where the directive might not properly clear intervals on mouse leave.

## [0.0.1] - 2025-03-25
### Added
- Initial release of **ng-longpress**.
- Implemented the `LongPressDirective` that:
  - Waits 500ms after a `mousedown` event before triggering.
  - Emits a typed `MouseEvent` when the long press threshold is reached.
  - Repeats the emission every 100ms until the press is released.
- Provided basic usage documentation and examples.
