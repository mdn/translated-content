---
title: Window：print() 方法
slug: Web/API/Window/print
---

{{ ApiRef() }}

打开打印对话框，以打印当前文档。

如果调用此函数时文档仍在加载中，那么文档将在打开打印对话框之前完成加载。

当打印对话框打开时，此方法将阻塞。

## 语法

```js-nolint
print()
```

### 参数

无

### 返回值

无（[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

1. [打印](/zh-CN/docs/Web/Guide/Printing)
2. {{ domxref("window.beforeprint_event", "beforeprint") }} 事件
3. {{ domxref("window.afterprint_event", "afterprint") }} 事件
