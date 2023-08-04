---
title: forward()
slug: Web/API/History/forward
---

在会话历史中向前移动一页。它与使用`delta`参数为 1 时调用 `history.go(delta)`的效果相同。

## 语法

```js
window.history.forward();
```

## 示例

下述例子创建了一个按钮，该按钮会在会话历史中向前移动一步。

### HTML

```html
<button id="go-forward">Go Forward!</button>
```

### JavaScript

```js
window.onload = function (e) {
  document.getElementById("go-forward").addEventListener("click", (e) => {
    window.history.forward();
  });
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
