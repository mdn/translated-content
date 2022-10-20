---
title: mousewheel
slug: Web/API/Element/mousewheel_event
---

{{ Non-standard_header() }}

The `mousewheel` event is fired asynchronously when a mouse wheel or similar device is operated. It's represented by the {{ domxref("MouseWheelEvent") }} interface.

> **备注：** **Do not use this wheel event.**
>
> This interface is non-standard and deprecated. It was used in non-Gecko browsers only. Instead use the standard _{{event("wheel")}} event._

- _Interface_: {{ domxref('MouseWheelEvent') }}
- _Synchronicity_: asynchronous
- _Bubbles_ :yes (Though, MSDN documents "No")
- _Target_: {{ domxref("Element") }}, {{ domxref("Document") }}, {{ domxref("Window") }}
- _Cancelable_: yes (Though, MSDN documents "No")
- _Default action_: Scroll, moving history, or zooming in/out

## Specification

The document in MSDN: [onmousewheel event](http://msdn.microsoft.com/en-us/library/ie/ms536951%28v=vs.85%29.aspx)

## Browser compatibility

{{Compat}}

## detail value

The `detail` attribute value is always 0 except Opera (Presto).

Opera (Presto) sets almost the same value as Firefox (Gecko)'s `DOMMouseScroll` event's detail value which indicates the scroll amount by line. Negative value indicates to scroll to bottom or right. Positive value indicates to scroll to top or left.

On Mac, the value is computed from accelerated scroll amount.

On Linux, `2` or `-2` is set per native wheel event.

## wheelDelta, wheelDeltaX and wheelDeltaY value

The `wheelDelta` attribute value is an abstract value which indicates how far the wheel turned. If the wheel has rotated away from the user, it's positive, otherwise negative. This means that the delta value sign is different from DOM Level 3 Event's `wheel`. However, the meaning of the amount of these values is not the same between browsers. See following explanation for the detail.

IE and Opera (Presto) only support `wheelDelta` attribute and do **not** support horizontal scroll.

The `wheelDeltaX` attribute value indicates the `wheelDelta` attribute value along the horizontal axis. When a user operates the device for scrolling to right, the value is negative. Otherwise, i.e., if it's to left, the value is positive.

The `wheelDeltaY` attribute value indicates the `wheelDelta` attribute value along the vertical axis. The sign of the value is the same as the `wheelDelta` attribute value.

### IE

The value is the same as the delta value of `WM_MOUSEWHEEL` or `WM_MOUSEHWHEEL`. It means that if the mouse wheel doesn't support high resolution scroll, the value is 120 per notch. The value isn't changed even if the scroll amount of system settings is page scroll.

### Chrome

On Windows, the value is the same as the delta value of `WM_MOUSEWHEEL` or `WM_MOUSEHWHEEL`. And also, the value isn't changed even if the scroll amount of system settings is page scroll, i.e., the value is the same as IE on Windows.

On Linux, the value is `120` or `-120` per native wheel event. This makes the same behavior as IE and Chrome for Windows.

On Mac, the value is complicated. The value is changed if the **device** that causes the native wheel event supports continuous scroll.

If the device supports continuous scroll (e.g., trackpad of MacBook or mouse wheel which can be turned smoothly), the value is computed from accelerated scroll amount. In this case, the value is the same as Safari.

If the device does **not** support continuous scroll (typically, old mouse wheel which cannot be turned smoothly), the value is computed from non-accelerated scroll amount (120 per notch). In this case, the value is different from Safari.

This difference makes a serious issue for web application developers. That is, web developers cannot know if `mousewheel` event is caused by which device.

### Safari

The value is always computed from accelerated scroll amount. This is really different from other browsers except Chrome with continuous scroll supported device.

Note: tested with the Windows package, the earliest available version was Safari 3.0 from 2007. It could be that earlier versions (on Mac) support the properties too.

### Opera (Presto)

The value is always the `detail` attribute value ✕ `40`.

On Windows, since the `detail` attribute value is computed from actual scroll amount, the value is different from other browsers except the scroll amount per notch is 3 lines in system settings or a page.

On Linux, the value is `80` or `-80` per native wheel event. This is different from other browsers.

On Mac, the `detail` attribute value is computed from accelerated scroll amout of native event. The value is usually much bigger than Safari's or Chrome's value.

## See also

- {{ domxref("MouseWheelEvent") }}
- Gecko's legacy mouse wheel events: `DOMMouseScroll`, `MozMousePixelScroll`
- Standardized wheel event: `wheel`
