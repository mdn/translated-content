---
title: "TypeError: More arguments needed"
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
---

{{jsSidebar("Errors")}}

## 信息

```plain
TypeError: Object.create requires more than 0 arguments
TypeError: Object.setPrototypeOf requires more than 1 argument
TypeError: Object.defineProperties requires more than 0 arguments
```

## 错误类型

{{jsxref("TypeError")}}.

## 哪里出错了？

调用函数的时候出现了错误。需要提供更多的参数。

## 示例

{{jsxref("Object.create()")}} 方法要求至少有一个参数，而 {{jsxref("Object.setPrototypeOf()")}} 方法要求至少有两个参数：

```js example-bad
var obj = Object.create();
// TypeError: Object.create requires more than 0 arguments

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires more than 1 argument
```

你可以将 {{jsxref("null")}} 设置为原型：

```js example-good
var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);
```

## 相关

- [Functions](/zh-CN/docs/Web/JavaScript/Guide/Functions)
