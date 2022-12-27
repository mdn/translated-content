---
title: HTMLMediaElement.onerror
slug: conflicting/Web/API/HTMLMediaElement/error_event
original_slug: Web/API/HTMLMediaElement/onerror
---
{{APIRef("HTML DOM")}}

The **`onerror`** property of the {{domxref("HTMLMediaElement")}} interface is the {{event("Event_handlers", "event handler")}} for processing {{event("error")}} events.

The `error` event fires when some form of error occurs while attempting to load or perform the media.

## 语法

```plain
HTMLMediaElement.onerror = EventListener;
```

### Value

A {{jsxref("function")}} which serves as the event handler for the {{event("error")}} event. When an error occurs, the specified function will be called. If `null`, no error handler is in effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement")}}
- {{HTMLElement("audio")}} and {{HTMLElement("video")}}
