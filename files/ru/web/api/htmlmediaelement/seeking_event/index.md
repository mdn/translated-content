---
title: стримится
slug: Web/API/HTMLMediaElement/seeking_event
---

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

- {{event("playing")}}
- {{event("waiting")}}
- {{event("seeking")}}
- {{event("seeked")}}
- {{event("ended")}}
- {{event("loadedmetadata")}}
- {{event("loadeddata")}}
- {{event("canplay")}}
- {{event("canplaythrough")}}
- {{event("durationchange")}}
- {{event("timeupdate")}}
- {{event("play")}}
- {{event("pause")}}
- {{event("ratechange")}}
- {{event("volumechange")}}
- {{event("suspend")}}
- {{event("emptied")}}
- {{event("stalled")}}
