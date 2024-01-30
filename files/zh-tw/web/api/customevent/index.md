---
title: CustomEvent
slug: Web/API/CustomEvent
---

{{APIRef("DOM")}}

**`CustomEvent`** interface 是應用程式為了任意目的所初始化的事件。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## 建構式

- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
  - : 建立一個 `CustomEvent`。

## 屬性

_此介面繼承了其父介面 {{domxref("Event")}} 的屬性。_

- {{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}
  - : 初始化一個`CustomEvent`物件。若該事件已經被觸發，則不會進行任何動作。

## 規格

{{Specifications}}

## 瀏覽器兼容性

{{Compat}}

## 參見

- {{domxref("Window.postMessage()")}}
- [Creating and triggering events](/zh-TW/docs/Web/Events/Creating_and_triggering_events)
