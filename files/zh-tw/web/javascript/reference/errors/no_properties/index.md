---
title: 'TypeError: "x" has no properties'
slug: Web/JavaScript/Reference/Errors/No_properties
---

{{jsSidebar("Errors")}}

## 訊息

```plain
TypeError: null has no properties
TypeError: undefined has no properties
```

## 錯誤類型

{{jsxref("TypeError")}}.

## 哪裡錯了？

{{jsxref("null")}} 與 {{jsxref("undefined")}} 並沒有可訪問的屬性。

## 示例

```js example-bad
null.foo;
// TypeError: null has no properties

undefined.bar;
// TypeError: undefined has no properties
```

## 參見

- {{jsxref("null")}}
- {{jsxref("undefined")}}
