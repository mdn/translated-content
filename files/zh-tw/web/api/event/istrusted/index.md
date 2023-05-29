---
title: Event.isTrusted
slug: Web/API/Event/isTrusted
---

{{APIRef("DOM")}}

{{domxref("Event")}} 介面的 `isTrusted` 唯讀屬性為一個布林值，若事件物件是由使用者操作而產生，則 `isTrusted` 值為 `true`。若事件物件是由程式碼所建立、修改，或是透過 {{domxref("EventTarget.dispatchEvent()")}} 來觸發，則 `isTrusted` 值為 `false`。

## 語法

```plain
var bool = event.isTrusted;
```

## 範例

```plain
 if (e.isTrusted) {
     /* The event is trusted. */
 } else {
     /* The event is not trusted. */
 }
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
