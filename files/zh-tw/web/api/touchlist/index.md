---
title: TouchList
slug: Web/API/TouchList
---

{{ APIRef("Touch Events") }}

`TouchList` 介面表示了一個觸控平面上所有觸碰點的列表；舉例來說，假如使用者有三隻手指於觸控平面（如觸控螢幕或是觸控板）上，則其相對應的 `TouchList` 物件中就會分別有三個 {{domxref("Touch")}} 物件各代表一個手指的觸碰。

## 屬性

- {{domxref("TouchList.length")}} {{readonlyInline}}
  - : The number of {{domxref("Touch")}} objects in the `TouchList`.

## 方法

- {{domxref("TouchList.identifiedTouch()")}} {{Deprecated_Inline}}
  - : Returns the first {{domxref("Touch")}} item in the list whose identifier matches a specified value.
- {{domxref("TouchList.item()")}}
  - : Returns the {{domxref("Touch")}} object at the specified index in the list.

## 範例

See the [example on the main Touch events article](/zh-TW/docs/Web/API/Touch_events#example).

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Touch events](/zh-TW/docs/Web/API/Touch_events)
- {{domxref("Document.createTouchList()")}}
