---
title: Event.bubbles
slug: Web/API/Event/bubbles
---

{{ ApiRef("DOM") }}

### 概述

表示事件是否會向上冒泡傳遞。

### 語法

```plain
var bool = event.bubbles;
```

回傳一個布林值，若事件會向上冒泡傳遞則回傳 `true`。

### 備註

Only certain events can bubble. Events that do bubble have this property set to `true`. You can use this property to check if an event is allowed to bubble or not.

### 範例

```js
function goInput(e) {
  // checks bubbles and
  if (!e.bubbles) {
    // passes event along if it's not
    passItOn(e);
  }
  // already bubbling
  doOutput(e);
}
```

## 規範

{{Specifications}}
