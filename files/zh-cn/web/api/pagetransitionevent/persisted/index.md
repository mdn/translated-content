---
title: PageTransitionEvent.persisted
slug: Web/API/PageTransitionEvent/persisted
---

{{APIRef("HTML DOM")}}

只读属性 **`persisted`** 代表一个页面是否从缓存中加载的

## Syntax

```js
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    console.log("Page was loaded from cache.");
  }
});
```

### Value

A {{jsxref("Boolean")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
