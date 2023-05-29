---
title: DOMContentLoaded
slug: Web/API/Window/DOMContentLoaded_event
original_slug: Web/Events/DOMContentLoaded
---

{{APIRef}}

`DOMContentLoaded事件是當document被完整的讀取跟解析後就會被觸發`,不會等待 stylesheets, 圖片和 subframes 完成讀取 (`load事件可以用來作為判斷頁面已經完整讀取的方法`).

> **備註：** [Stylesheet loads block script execution](http://molily.de/weblog/domcontentloaded), 如果 `<script>` 被放在 `<link rel="stylesheet" ...>後面的話`, 須等到前面的 stylesheet 載入並完成解析，此時 `DOMContentLoaded才會被觸發。`

## Speeding up

If you want DOM to get parsed as fast as possible after the user had requested the page, some things you could do is turn your [JavaScript asynchronous](/zh-TW/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests) and to [optimize loading of stylesheets](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery) which if used as usual, slow down page load due to being loaded in parallel, "stealing" traffic from the main html document.

## General info

- Specification
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#the-end)
- Interface
  - : Event
- Bubbles
  - : Yes
- Cancelable
  - : Yes (although specified as a simple event that isn't cancelable)
- Target
  - : Document
- Default Action
  - : None.

## 屬性

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## Related Events

- [`DOMContentLoaded`](/zh-TW/docs/Web/API/Window/DOMContentLoaded_event)
- [`readystatechange`](/zh-TW/docs/Web/API/Document/readystatechange_event)
- [`load`](/zh-TW/docs/Web/API/Window/load_event)
- [`beforeunload`](/zh-TW/docs/Web/API/Window/beforeunload_event)
- [`unload`](/zh-TW/docs/Web/API/Window/unload_event)
