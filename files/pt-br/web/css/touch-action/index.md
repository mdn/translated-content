---
title: touch-action
slug: Web/CSS/touch-action
---

{{CSSRef}}

A propriedade **`touch-action`** é uma especificação CSS , e forma, uma determinada região que pode ser manipulada pelo usuário através de uma tela sensível ao toque (por exemplo, recursos panorâmicos ou de zoom incorporados no navegador).

```css
/* Keyword values */
touch-action: auto;
touch-action: none;
touch-action: pan-x;
touch-action: pan-left;
touch-action: pan-right;
touch-action: pan-y;
touch-action: pan-up;
touch-action: pan-down;
touch-action: pinch-zoom;
touch-action: manipulation;

/* Global values */
touch-action: inherit;
touch-action: initial;
touch-action: unset;
```

{{cssinfo}}

By default, panning (scrolling) and pinching gestures are handled exclusively by the browser. An application using {{domxref("Pointer_events")}} will receive a [`pointercancel`](/pt-BR/docs/Web/Events/pointercancel) event when the browser starts handling a touch gesture. By explicitly specifying which gestures should be handled by the browser, an application can supply its own behavior in [`pointermove`](/pt-BR/docs/Web/Events/pointermove) and [`pointerup`](/pt-BR/docs/Web/Events/pointerup) listeners for the remaining gestures. Applications using {{domxref("Touch_events")}} disable the browser handling of gestures by calling {{domxref("Event.preventDefault","preventDefault()")}}, but should also use **touch-action** to ensure the browser knows the intent of the application before any event listeners have been invoked.

When a gesture is started, the browser intersects the **touch-action** values of the touched element and all its ancestors up to the one that implements the gesture (in other words, the first containing scrolling element). This means that in practice, **touch-action** is typically applied only to individual elements which have some custom behavior, without needing to specify **touch-action** explicitly on any of that element's descendants. After a gesture has started, changes to **touch-action** values will not have any impact on the behavior of the current gesture.

## Syntax

The `touch-action` property may be specified as either:

- any one of the keywords [`auto`](#auto), [`none`](#none), [`manipulation`](#manipulation), _or_
- one of the keywords [`pan-x`](#pan-x), [`pan-left`](#pan-keywords), [`pan-right`](#pan-keywords), and/or one of the keywords [`pan-y`](#pan-y), [`pan-up`](#pan-keywords), [`pan-down`](#pan-keywords), plus optionally the keyword [`pinch-zoom`](#).

### Values

- `auto`
  - : Enable browser handling of all panning and zooming gestures.
- `none`
  - : Disable browser handling of all panning and zooming gestures.
- `pan-x`
  - : Enable single-finger horizontal panning gestures. May be combined with **pan-y, pan-up,** **pan-down** and/or **pinch-zoom**.
- `pan-y`
  - : Enable single-finger vertical panning gestures. May be combined with **pan-x, pan-left,** **pan-right** and/or **pinch-zoom**.
- `manipulation`
  - : Enable panning and pinch zoom gestures, but disable additional non-standard gestures such as double-tap to zoom. Disabling double-tap to zoom removes the need for browsers to delay the generation of **click** events when the user taps the screen. This is an alias for "**pan-x pan-y pinch-zoom**" (which, for compatibility, is itself still valid).
- `pan-left`, `pan-right,pan-up,pan-down` {{experimental_inline}}
  - : Enable single-finger gestures that begin by scrolling in the given direction(s). Once scrolling has started, the direction may still be reversed. Note that scrolling "up" (**pan-up**) means that the user is dragging their finger downward on the screen surface, and likewise **pan-left** means the user is dragging their finger to the right. Multiple directions may be combined except when there is a simpler representation (for example, **"pan-left pan-right**" is invalid since "**pan-x**" is simpler, but "**pan-left pan-down**" is valid).
- `pinch-zoom`
  - : Enable multi-finger panning and zooming of the page. This may be combined with any of the **pan-** values.

### Formal syntax

{{csssyntax}}

## Examples

The most common usage is to disable all gestures on an element (and its non-scrollable descendants) that provides its own dragging and zooming behavior – such as a map or game surface.

```css
#map {
  touch-action: none;
}
```

Another common pattern is that of an image carousel which uses pointer events to handle horizontal panning, but doesn't want to interfere with vertical scrolling or zooming of the document.

```css
.image-carousel {
  width: 100%;
  height: 150px;
  touch-action: pan-y pinch-zoom;
}
```

**touch-action** is also often used to completely disable the delay of **click** events caused by support for the double-tap to zoom gesture.

```css
html {
  touch-action: manipulation;
}
```

## Specifications

| Specification                                                                      | Status                        | Comment                                                              |
| ---------------------------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------- |
| {{SpecName('Compat', '#touch-action', 'touch-action')}}                            | {{Spec2('Compat')}}           | Added `pinch-zoom` property value.                                   |
| {{SpecName('Pointer Events 2', '#the-touch-action-css-property', 'touch-action')}} | {{Spec2('Pointer Events 2')}} | Added `pan-left`, `pan-right`, `pan-up`, `pan-down` property values. |
| {{SpecName('Pointer Events', '#the-touch-action-css-property', 'touch-action')}}   | {{Spec2('Pointer Events')}}   | Initial definition                                                   |

## Compatibilidade com navegadores

{{compat("css.properties.touch-action")}}

## See also

- {{domxref("Pointer_events","Pointer Events")}}
- WebKit Blog [More Responsive Tapping on iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)
- Google Developers Blog [Making touch scrolling fast by default](https://developers.google.com/web/updates/2017/01/scrolling-intervention)
