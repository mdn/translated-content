---
title: back()
slug: Web/API/History/back
---

{{APIRef("DOM")}}

`back()`方法会在会话历史记录中向后移动一页。如果没有上一页，则此方法调用不执行任何操作。

## 语法

```js-nolint
back()
```

## 示例

下述简短示例使页面上的按钮导航页面至会话历史的后一项。

### HTML

```html
<button id="go-back">Go back!</button>
```

### JavaScript

```js
window.onload = function (e) {
  document.getElementById("go-back").addEventListener("click", (e) => {
    window.history.back();
  });
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
