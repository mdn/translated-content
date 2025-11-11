---
title: console：trace() 静态方法
short-title: trace()
slug: Web/API/console/trace_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.trace()`** 静态方法会将堆栈追踪信息输出到控制台。

> [!NOTE]
> 在某些浏览器中，`console.trace()` 还可能输出导致当前 `console.trace()` 的调用序列和异步事件（这些并不在当前调用栈上），以帮助识别当前事件评估循环的起源。

详情和示例请参见 {{domxref("console")}} 文档中的[堆栈跟踪](/zh-CN/docs/Web/API/console#堆栈跟踪)部分。

## 语法

```js-nolint
console.trace()
console.trace(object1, /* …, */ objectN)
```

### 参数

- `objects` {{optional_inline}}
  - : 零个或多个要与追踪信息一起输出到控制台的对象。这些对象的组装与格式化方式与传递给 {{domxref("console/log_static", "console.log()")}} 方法时相同。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

在控制台中，将显示以下追踪信息：

```plain
bar
foo
<anonymous>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Microsoft Edge 关于 `console.trace()` 的文档](https://learn.microsoft.com/zh-CN/microsoft-edge/devtools/console/api#trace)
- [Node.js 关于 `console.trace()` 的文档](https://nodejs.org/docs/latest/api/console.html#consoletracemessage-args)
- [Google Chrome's 关于 `console.trace()` 的文档](https://developer.chrome.google.cn/docs/devtools/console/api/#trace)
