---
title: console：error() 静态方法
slug: Web/API/console/error_static
---

{{APIRef("Console API")}}

向 Web 控制台输出一条错误消息。

{{AvailableInWorkers}}

## 语法

```js-nolint
error(val1)
error(val1, /* …, */ valN)
error(msg)
error(msg, subst1, /* …, */ substN)
```

> **备注：** `console.exception()` 是 `console.error()` 的别名；它们功能相同。

### 参数

- `obj1` ... `objN`
  - : 要输出的 JavaScript 对象列表。这些对象的字符串形式按顺序加起来然后输出。
- `msg`
  - : 一个字符串，它包含零个或多个替代字符串。
- `subst1` ... `substN`
  - : JavaScript 对象可以用此来替换`msg`里的替代字符串。你可以控制输出的格式。

详情请看{{domxref("console")}}文档中的 [输出文本到控制台](/zh-CN/docs/Web/API/console#outputting_text_to_the_console) 。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Microsoft Edge 关于 `console.error()` 的文档](https://learn.microsoft.com/zh-cn/microsoft-edge/devtools-guide-chromium/console/api#error)
- [Node.js 关于 `console.error()` 的文档](https://nodejs.org/docs/latest/api/console.html#consoleerrordata-args)
- [Google Chrome 关于 `console.error()` 的文档](https://developer.chrome.google.cn/docs/devtools/console/api/#error)
