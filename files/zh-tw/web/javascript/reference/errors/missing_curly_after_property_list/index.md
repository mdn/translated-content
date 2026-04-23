---
title: "SyntaxError: missing } after property list"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript 的「missing } after property list」例外會在[物件初始化](/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer)語法某處有誤時發生。這可能真的是少了個大括號，但也可能是少了個逗號。

## 訊息

```plain
SyntaxError: missing } after property list（Firefox）
SyntaxError: Unexpected identifier 'c'. Expected '}' to end an object literal.（Safari）
```

## 錯誤類型

{{jsxref("SyntaxError")}}

## 哪裡出錯了？

[物件初始化](/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer)語法某處有誤。舉例來說，這可能真的是少了個大括號，但也可能是少了個逗號。也請檢查所有的大括號或括號是否以正確的順序閉合。將程式碼縮排或格式化得更整齊，或許也能幫助你釐清問題。

## 範例

### 忘記加逗號

通常，你的物件初始化程式碼中會少了個逗號：

```js-nolint example-bad
const obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

正確的寫法是：

```js example-good
const obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3,
};
```

## 參見

- [物件初始化](/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer)
