---
title: 'TypeError: "x" has no properties'
slug: Web/JavaScript/Reference/Errors/No_properties
---

## 错误信息

```plain
TypeError: null has no properties
TypeError: undefined has no properties
```

## 错误类型

{{jsxref("TypeError")}}.

## 哪里出错了？

{{jsxref("null")}} 和 {{jsxref("undefined")}}中，没有你需要的属性。

## 示例

```js example-bad
null.foo;
// 错误类型：null 没有这个属性

undefined.bar;
// 错误类型：undefined 没有这个属性
```

## 参考

- {{jsxref("null")}}
- {{jsxref("undefined")}}
