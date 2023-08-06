---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
---

{{JSRef}}

**`Object.keys()`** メソッドは、指定されたオブジェクトが持つプロパティの **名前**の配列を、通常のループで取得するのと同じ順序で返します。

{{EmbedInteractiveExample("pages/js/object-keys.html")}}

## 構文

```
Object.keys(obj)
```

### 引数

- `obj`
  - : 自身の列挙可能なプロパティが返されるオブジェクトです。

### 返値

与えられたオブジェクトのすべての列挙可能なプロパティを表す文字列の配列。

## 解説

`Object.keys()` は、`object` で直接発見された列挙可能なプロパティに対応する文字列を要素とする配列を返します。プロパティの順序は、オブジェクトのプロパティをループにより手動で取得した場合と同じです。

## 例

### Object.keys の使用

```js
// 単純な配列
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// オブジェクトのような配列
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// キーの順序がランダムなオブジェクトのような配列
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo は列挙可能ではないプロパティ
const myObj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  },
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

列挙可能ではないものを含むすべてのプロパティを取得したい場合、{{jsxref("Object.getOwnPropertyNames()")}} をご覧ください。

### オブジェクト以外の型変換

ES5 では、このメソッドへの引数がオブジェクトではない (プリミティブである) 場合、 {{jsxref("TypeError")}} が発生します。

ES2015 以降では、オブジェクトでない引数はオブジェクトへ変換されるようになりました。

```js
// In ES5
Object.keys("foo"); // TypeError: "foo" is not an object

Object.keys("foo");
// ["0", "1", "2"]                   (ES2015 code)
```

## ポリフィル

`Object.keys` にネイティブに対応していない環境向けに互換性を確保するには、以下のコード部品をコピーしてください。

```js
// From https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function () {
    "use strict";
    var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString"),
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor",
      ],
      dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (
        typeof obj !== "function" &&
        (typeof obj !== "object" || obj === null)
      ) {
        throw new TypeError("Object.keys called on non-object");
      }

      var result = [],
        prop,
        i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  })();
}
```

上記のコードは IE7 において (もしかすると IE8 でも)、他のウィンドウから渡されたオブジェクトの場合、列挙不可能な key を含むことに注意してください。

より簡単なブラウザーのポリフィルについては、[Javascript - Object.keys Browser Compatibility](http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html) をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.keys")}}

## 関連情報

- [列挙可能性とプロパティの所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.entries()")}}
