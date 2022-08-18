---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
tags:
  - Array
  - ECMAScript5
  - JavaScript
  - Method
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/isArray
---
{{JSRef}}

**`Array.isArray()`** メソッドは、渡された値が {{jsxref("Array")}} かどうかを判断します。

```js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```

## 構文

```
Array.isArray(value)
```

### 引数

- _value_
  - : チェックするオブジェクト。

### 返値

値が {{jsxref("Array")}} の場合は `true` です。そうでなければ `false` を返します。

## 解説

値が {{jsxref("Array")}} の場合は `true` が返ります。それ以外の場合は `false` が返ります。

詳しくは、[“Determining with absolute accuracy whether or not a JavaScript object is an array”](http://web.mit.edu/jwalden/www/isArray.html) を参照してください。{{jsxref("TypedArray")}} のインスタンスが与えられると、常に `false` が返されます。

## Polyfill

次のコードを他のコードよりも前に記述する事により、ネイティブで実装されていなくても、`Array.isArray()` が使用可能になります。

```js
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```

## 例

```js
// 以下の呼び出しはすべて true を返します
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// あまり知られていないものの Array.prototype は配列です
Array.isArray(Array.prototype);

// 以下の呼び出しはすべて false を返します
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
```

### `instanceof` と `isArray`

`Array` のインスタンスをチェックする際、`Array.isArray` は `iframes` で動作するので、`instanceof` よりも推奨されます。

```js
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // [1,2,3]

// 配列を正しくチェックできます
Array.isArray(arr);  // true
// iframe を介して配列を正しくチェックできません
arr instanceof Array; // false
```

## 仕様

| 仕様書                                                                               |
| ------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-array.isarray', 'Array.isArray')}} |

## ブラウザー実装状況

{{Compat("javascript.builtins.Array.isArray")}}

## 関連情報

- {{jsxref("Array")}}
