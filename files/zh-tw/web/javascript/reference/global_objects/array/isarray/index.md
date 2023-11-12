---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
---

{{JSRef}}

**`Array.isArray()`** 函式會檢查傳入的值是否為一個 {{jsxref("Array")}}。

```js
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
Array.isArray("foobar"); // false
Array.isArray(undefined); // false
```

## 語法

```js-nolint
Array.isArray(obj)
```

### 參數

- `obj`
  - : 要檢查的物件。

### 回傳值

若物件為 {{jsxref("Array")}} 回傳 `true`；否則回傳 `false`。

## 描述

檢查傳入的物件是否為陣列（{{jsxref("Array")}}），如果是便回傳 `true`，否則回傳 `false`。

更多細節請參考 [「Determining with absolute accuracy whether or not a JavaScript object is an array」](http://web.mit.edu/jwalden/www/isArray.html)。

## 範例

```js
// 下方都回傳 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// 小細節：Array.prototype 本身是陣列：
Array.isArray(Array.prototype);

// 下方都回傳 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
```

### `instanceof` vs `isArray`

當檢查 `Array` 實例時，`Array.isArray` 相較於 `instanceof` 更加推薦，因為它可以穿透 `iframes`。

```js
var iframe = document.createElement("iframe");
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
var arr = new xArray(1, 2, 3); // [1,2,3]

// 正確地檢查陣列型態
Array.isArray(arr); // true
// 有害地，因為它不能在 iframes 之間正常運作
arr instanceof Array; // false
```

## Polyfill

如果 `Array.isArray()` 不存在於您的環境，在其他程式碼前執行下列程式碼可建置 `Array.isArray()`。

```js
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array")}}
