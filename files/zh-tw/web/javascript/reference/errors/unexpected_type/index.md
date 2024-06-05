---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
---

{{jsSidebar("Errors")}}

## 錯誤類型

{{jsxref("TypeError")}}

## 哪裡錯了？

有一個意想不到的類型。這與 {{jsxref("undefined")}} 或 {{jsxref("null")}} 值經常發生。

另外，某些方法，如 {{jsxref("Object.create()")}} 或 {{jsxref("Symbol.keyFor()")}} 要求特定類型，即必須提供。

## 實例

### 無效的情況下

```js example-bad
// undefined 和 null 的情況下在其上的子方法不起作用
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null

// 某些方法可能要求特定類型
var foo = {};
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = "bar";
Object.create(foo); // TypeError: "foo" is not an object or null
```

### 修復問題

為了解決空指針 `undefined` 或 `null` 值，可以使用 [typeof](/zh-TW/docs/Web/JavaScript/Reference/Operators/typeof) 運算符，例如。 operator, for example.

```js
if (typeof foo !== "undefined") {
  // 現在我們知道foo被定義，我們可以繼續進行。
}
```

## 參見

- {{jsxref("undefined")}}
- {{jsxref("null")}}
