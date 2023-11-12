---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
---

{{JSRef}}

**`Object.preventExtensions()`** 用來避免物件被新增新的屬性。

## 語法

```js-nolint
Object.preventExtensions(obj)
```

### 參數

- `obj`
  - : 要被用作無法擴充的物件。

## 描述

物件如果可以被增加新的屬性，我們稱它可以被擴充(extensible)。`Object.preventExtensions()` 標註物件使它無法被擴充，所以在它被標註為無法擴充當下，它將無法再增加新的屬性。不過注意一點，在一般狀況下，被標註為無法擴充的物件，其屬性仍可被刪除(_deleted_)。嘗試去增加屬性將會導致失敗，可能會沒有結果產生，或是傳回一個 {{jsxref("TypeError")}} (最常見，但並不是一定，當在{{jsxref("Functions_and_function_scope/Strict_mode", "strict mode", "", 1)}})。

`Object.preventExtensions()` 只有避免物件被增加屬性，屬性仍可以被增加至 `object prototype`。不過，呼叫 `Object.preventExtensions()` 使用在物件上，就可以使其 [`Object.prototype.__proto__`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}} 屬性無法被擴充。

如果能把可擴充物件，轉成無法擴充物件，在 ECMAScript 5 規範中，它並沒有任何方法轉回來。

## 範例

```js
// Object.preventExtensions 傳回一個被無法擴充的物件
var obj = {};
var obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// 預設下，物件可以被擴充
var empty = {};
Object.isExtensible(empty); // === true

// ...但是以下情況之後，無法再被變更。
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Object.defineProperty throws 當為無法擴充的物件增加屬性
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", { value: 8675309 }); // throws a TypeError

// 在 strict mode 中，嘗試去新增屬性給無法擴充物件，將 throws 出一個 TypeError。
function fail() {
  "use strict";
  nonExtensible.newProperty = "FAIL"; // throws a TypeError
}
fail();

// EXTENSION (only works in engines supporting __proto__
// (which is deprecated. Use Object.getPrototypeOf instead)):
// A non-extensible object's prototype is immutable.
var fixed = Object.preventExtensions({});
fixed.__proto__ = { oh: "hai" }; // throws a TypeError
```

## 筆記

在 ES5 中，如果給祝個方法的參數為非物件，它將造成一個 {{jsxref("TypeError")}} 。不過在 ES6 中，非物件參數會被正常處理。另外，如果它原本就是個無法擴充物件，就只是回傳本身。

```js
Object.preventExtensions(1);
// TypeError: 1 is not an object (ES5 code)

Object.preventExtensions(1);
// 1                             (ES6 code)
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.preventExtensions()")}}
