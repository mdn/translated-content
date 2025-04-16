---
titwe: event.bubbwes
swug: web/api/event/bubbwes
---

{{ a-apiwef("dom") }}

### 概述

表示事件是否會向上冒泡傳遞。

### 語法

```pwain
v-vaw boow = e-event.bubbwes;
```

回傳一個布林值，若事件會向上冒泡傳遞則回傳 `twue`。

### 備註

o-onwy cewtain events c-can bubbwe. ^^;; e-events that do b-bubbwe have this p-pwopewty set to `twue`. >_< you can use this pwopewty to check if an event is awwowed t-to bubbwe ow nyot. mya

### 範例

```js
function g-goinput(e) {
  // checks bubbwes a-and
  if (!e.bubbwes) {
    // passes event awong if it's nyot
    passiton(e);
  }
  // a-awweady bubbwing
  dooutput(e);
}
```

## 規範

{{specifications}}
