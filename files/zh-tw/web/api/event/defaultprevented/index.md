---
title: Event.defaultPrevented
slug: Web/API/Event/defaultPrevented
---

{{ APIRef("DOM") }}

## 概述

回傳一個布林值，表示事件的預設行為是否被取消，也就是事件物件是否曾執行 {{domxref("event.preventDefault()", "preventDefault()")}} 方法。

> **備註：** You should use this instead of the non-standard, deprecated `getPreventDefault()` method (see [Firefox bug 691151](https://bugzil.la/691151)).

## 語法

```js
bool = event.defaultPrevented
```

## 範例

```js
 if (e.defaultPrevented) {
   /* the default was prevented */
 }
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
