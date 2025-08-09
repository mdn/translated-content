---
title: History：back() 方法
slug: Web/API/History/back
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

{{domxref("History")}} 接口的 **`back()`** 方法使浏览器在会话历史中后退一页。

它的效果与调用 {{domxref("History.go", "history.go(-1)")}} 相同。如果没有上一页，此方法调用不执行任何操作。

此方法是{{glossary("asynchronous", "异步")}}的。请添加一个监听器来监听 {{domxref("Window/popstate_event", "popstate")}} 事件，以便确定导航何时完成。

## 语法

```js-nolint
back()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 如果关联的文档未完全激活，则会抛出此异常。浏览器还会限制导航操作，如果调用过于频繁，可能会抛出此错误、生成警告或忽略该调用。

## 示例

以下简短示例会导致页面上的按钮导航回到会话历史记录中的上一个条目。

### HTML

```html
<button id="go-back">后退！</button>
```

### JavaScript

```js
document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("History")}}
- [使用历史记录 API](/zh-CN/docs/Web/API/History_API/Working_with_the_History_API)
