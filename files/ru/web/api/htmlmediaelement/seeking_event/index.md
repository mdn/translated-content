---
title: стримится
slug: Web/API/HTMLMediaElement/seeking_event
---

{{APIRef("HTMLMediaElement")}}

Событие 'seeking' в случае, когда идёт подгрузка видео

## General info

- Specification
  - : [HTML5 media](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-seeking)
- Interface
  - : Event
- Bubbles
  - : No
- Cancelable
  - : No
- Target
  - : Element
- Default Action
  - : None.

## Properties

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |

## Related Events

- [`playing`](/ru/docs/Web/Events/playing)
- [`waiting`](/ru/docs/Web/Events/waiting)
- [`seeking`](/ru/docs/Web/Events/seeking)
- [`seeked`](/ru/docs/Web/Events/seeked)
- [`ended`](/ru/docs/Web/Events/ended)
- [`loadedmetadata`](/ru/docs/Web/Events/loadedmetadata)
- [`loadeddata`](/ru/docs/Web/Events/loadeddata)
- [`canplay`](/ru/docs/Web/Events/canplay)
- [`canplaythrough`](/ru/docs/Web/Events/canplaythrough)
- [`durationchange`](/ru/docs/Web/Events/durationchange)
- [`timeupdate`](/ru/docs/Web/Events/timeupdate)
- [`play`](/ru/docs/Web/Events/play)
- [`pause`](/ru/docs/Web/Events/pause)
- [`ratechange`](/ru/docs/Web/Events/ratechange)
- [`volumechange`](/ru/docs/Web/Events/volumechange)
- [`suspend`](/ru/docs/Web/Events/suspend)
- [`emptied`](/ru/docs/Web/Events/emptied)
- [`stalled`](/ru/docs/Web/Events/stalled)
