---
title: Event.createEvent()
slug: Web/API/Document/createEvent
---

{{APIRef("DOM")}}

建立一個新的事件，該事件必須先以其 `init()` method 初始化才行。

### 語法

```plain
document.createEvent(type)
```

- `type`
  - : 一個 string 。表示所建立的事件名稱。

這個 method 會回傳一個新的 DOM {{ domxref("Event") }} object ，其事件類型為傳入的 type 。該事件必須先初始化才能使用。

### 範例

```js
var newEvent = document.createEvent("UIEvents");
```

### 規格定義

- [DOM Level 2 Events](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-document)
