---
title: PageTransitionEvent
slug: Web/API/PageTransitionEvent
---

{{APIRef("HTML DOM")}}

Page transition events fire when a webpage is being loaded or unloaded.

当网页在加载完成或卸载后会触发页面传输事件（Page transition events）。

## DOM Information

### Inheritance Hierarchy

EventPageTransitionEvent

## Example

### HTML

```html
<!doctype html>
<html>
  <body onpageshow="myFunction(event)"></body>
</html>
```

### JavaScript

```js
function myFunction(event) {
  if (event.persisted) {
    alert("The page was cached by the browser");
  } else {
    alert("The page was NOT cached by the browser");
  }
}
```

## Members

The **PageTransitionEvent** object has these types of members:

- Properties

### Properties

The **PageTransitionEvent** object has these properties.

| Property      | Access type | Description                                   |
| ------------- | ----------- | --------------------------------------------- |
| **persisted** | 只读        | 标记页面是否从缓存（Backforward Cache）中加载 |
