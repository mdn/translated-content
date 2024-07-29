---
title: "SyntaxError: missing } after property list"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
---

{{jsSidebar("Errors")}}

## 訊息

```plain
SyntaxError: missing } after property list
```

## 錯誤類型

{{jsxref("SyntaxError")}}

## 何處出錯?

在物件初始化時，語法錯誤。 實際上可能遺漏一個大括號或是逗號。 例如， 同時檢查大括弧以及逗號是否以正確的順序關閉。 縮排或是有規則的排序代碼是有幫助你找出複雜的代碼錯誤。

## 範例

### 忘記逗號

有時候，在初始化物件時，缺少一個逗號：

```js example-bad
var obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

Correct would be:

```js example-good
var obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3,
};
```

## 參見

- [Object initializer](/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer)
