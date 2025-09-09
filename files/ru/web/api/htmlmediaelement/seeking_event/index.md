---
title: стримится
slug: Web/API/HTMLMediaElement/seeking_event
---

{{APIRef("HTMLMediaElement")}}

Событие 'seeking' в случае, когда идёт подгрузка видео

## General info

- Specification
  - : [HTML5 media](https://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-seeking)
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

- [`playing`](/ru/docs/Web/API/HTMLMediaElement/playing_event)
- [`waiting`](/ru/docs/Web/API/HTMLMediaElement/waiting_event)
- [`seeking`](/ru/docs/Web/API/HTMLMediaElement/seeking_event)
- [`seeked`](/ru/docs/Web/API/HTMLMediaElement/seeked_event)
- [`ended`](/ru/docs/Web/API/HTMLMediaElement/ended_event)
- [`loadedmetadata`](/ru/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
- [`loadeddata`](/ru/docs/Web/API/HTMLMediaElement/loadeddata_event)
- [`canplay`](/ru/docs/Web/API/HTMLMediaElement/canplay_event)
- [`canplaythrough`](/ru/docs/Web/API/HTMLMediaElement/canplaythrough_event)
- [`durationchange`](/ru/docs/Web/API/HTMLMediaElement/durationchange_event)
- [`timeupdate`](/ru/docs/Web/API/HTMLMediaElement/timeupdate_event)
- [`play`](/ru/docs/Web/API/HTMLMediaElement/play_event)
- [`pause`](/ru/docs/Web/API/HTMLMediaElement/pause_event)
- [`ratechange`](/ru/docs/Web/API/HTMLMediaElement/ratechange_event)
- [`volumechange`](/ru/docs/Web/API/HTMLMediaElement/volumechange_event)
- [`suspend`](/ru/docs/Web/API/HTMLMediaElement/suspend_event)
- [`emptied`](/ru/docs/Web/API/HTMLMediaElement/emptied_event)
- [`stalled`](/ru/docs/Web/API/HTMLMediaElement/stalled_event)
