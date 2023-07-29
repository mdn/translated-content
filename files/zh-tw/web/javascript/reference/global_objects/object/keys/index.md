---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
---

{{JSRef}}

**`Object.keys()`** 方法會回傳一個由指定物件所有可列舉之屬性組成的陣列，該陣列中的的排列順序與使用 {{jsxref("Statements/for...in", "for...in")}} 進行迭代的順序相同（兩者的差異在於 `for-in` 迴圈還會迭代出物件自其原型鏈所繼承來的可列舉屬性）。

## 語法

```js-nolint
Object.keys(obj)
```

### 參數

- `obj`
  - : 物件，用以回傳其可列舉屬性。

### 回傳值

回傳一個包含給定物件內所有可列舉屬性的字串陣列。

## 描述

`Object.keys()` 回傳一個陣列，陣列中的各元素為直屬於 `obj` ，對應可列舉屬性名的字串。回傳結果的排序，與手動對物件屬性作迴圈迭代的結果排序相同。

## 範例

```js
var arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// 類似陣列的物件
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// 擁有隨機 key 排序，類似陣列的物件
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

// getFoo 不是可列舉的屬性
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  },
);
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // console: ['foo']
```

如果想取得物件的所有屬性，包括非可列舉的屬性，請參閱 {{jsxref("Object.getOwnPropertyNames()")}}.

## 備註

在 ES5 中，如果這個方法的參數不是一個標準物件(例如原始型別)，將會產生 {{jsxref("TypeError")}}錯誤。而在 ES2015，非物件的參數將會強制轉換成物件。

```js
Object.keys("foo");
// TypeError: "foo" is not an object (ES5 code)

Object.keys("foo");
// ["0", "1", "2"]                   (ES2015 code)
```

## Polyfill

如需在原生不支援、較舊的環境中增加 `Object.keys` 的相容性，請複製以下片段：

```js
// From https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
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
        typeof obj !== "object" &&
        (typeof obj !== "function" || obj === null)
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

請注意以上的代碼片段在 IE7 中( IE8 也有可能 )，從不同的 window 傳入物件將包含非可列舉的 key 。

較精簡的瀏覽器 Polyfill，請參閱 [Javascript - Object.keys Browser Compatibility](http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html).

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Enumerability and ownership of properties](/zh-TW/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.values()")}} {{experimental_inline}}
- {{jsxref("Object.entries()")}} {{experimental_inline}}
