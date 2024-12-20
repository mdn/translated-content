---
title: Event.stopPropagation()
slug: Web/API/Event/stopPropagation
---

{{APIRef("DOM")}}

{{domxref("Event")}} 介面的 **`stopPropagation()`** 方法可阻止當前事件繼續進行捕捉（capturing）及冒泡（bubbling）階段的傳遞。

## 語法

```plain
event.stopPropagation();
```

## 範例

請參考範例五：[事件傳遞](/zh-TW/docs/Web/API/Document_Object_Model/Examples#example_5:_event_propagation)章節中關於此方法與 DOM 事件傳遞的更詳細範例。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- See the [DOM specification](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture) for the explanation of event flow. (The [DOM Level 3 Events draft](https://www.w3.org/TR/uievents/#event-flow) has an illustration.)
- {{domxref("Event.preventDefault()")}} is a related method that prevents the default action of the event from happening.
