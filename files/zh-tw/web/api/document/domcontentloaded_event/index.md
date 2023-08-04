---
title: DOMContentLoaded
slug: Web/API/Document/DOMContentLoaded_event
---

{{APIRef}}

**`DOMContentLoaded`** 事件是當 document 被完整的讀取跟解析後就會被觸發，不會等待 stylesheet、圖片和 subframe 完成讀取（`load` 事件可以用來作為判斷頁面已經完整讀取的方法）。

> **備註：** [Stylesheet loads block script execution](http://molily.de/weblog/domcontentloaded), 如果 `<script>` 被放在 `<link rel="stylesheet" ...>` 後面的話, 須等到前面的 stylesheet 載入並完成解析，此時 `DOMContentLoaded` 才會被觸發。

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

## 參見

- 相關事件：{{domxref("Window/load_event", "load")}}、{{domxref("Document/readystatechange_event", "readystatechange")}}、{{domxref("Window/beforeunload_event", "beforeunload")}}、{{domxref("Window/unload_event", "unload")}}
