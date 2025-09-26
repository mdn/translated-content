---
title: History：forward() 方法
slug: Web/API/History/forward
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

{{domxref("History")}} 接口的 **`forward()`** 方法使浏览器在会话历史中向前移动一页。它的调用效果与 {{domxref("History.go", "history.go(1)")}} 相同。

此方法是{{glossary("asynchronous", "异步")}}的。请添加一个监听器来监听 {{domxref("Window/popstate_event", "popstate")}} 事件，以便确定导航何时完成。

## 语法

```js-nolint
forward()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 如果关联的文档未完全激活，则会抛出此异常。浏览器还会限制导航操作，如果调用过于频繁，可能会抛出此错误、生成警告或忽略该调用。

## 示例

以下示例创建了一个在会话历史中向前移动一步的按钮。

### HTML

```html
<button id="go-forward">前进！</button>
```

### JavaScript

```js
document.getElementById("go-forward").addEventListener("click", (e) => {
  history.forward();
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("History")}}
- {{domxref("Window/popstate_event", "popstate")}}
- [使用历史记录 API](/zh-CN/docs/Web/API/History_API/Working_with_the_History_API)
