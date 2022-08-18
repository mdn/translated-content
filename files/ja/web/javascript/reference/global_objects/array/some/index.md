---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/some
---
{{JSRef}}

**`some()`** メソッドは、配列の少なくとも一つの要素が、指定された関数で実装されたテストに合格するかどうかをテストします。これはブール値を返します。

{{EmbedInteractiveExample("pages/js/array-some.html")}}

## 構文

```
arr.some(callback(element[, index[, array]])[, thisArg])
```

### 引数

- `callback`

  - : 各要素に対してテストを実行する関数です。次の 3 つの引数を取ります。

    - `element`
      - : 現在処理されている要素です。
    - `index`{{optional_inline}}
      - : 現在処理されている要素のインデックスです。
    - `array`{{optional_inline}}
      - : `some()` が実行されている配列です。

- `thisArg`{{optional_inline}}
  - : `callback` を実行するときに `this` として使用するオブジェクトです。

### 返値

配列内の少なくとも 1 つの要素でコールバック関数が{{Glossary("truthy", "真と解釈される")}}値を返した場合は **`true`** です。それ以外は **`false`** です。

## 解説

`some()` は、与えられた `callback` 関数を、配列に含まれる各要素に対して一度ずつ、`callback` が*真と解釈される*値 (論理型に変換した際に真となる値) を返す要素が見つかるまで呼び出します。そのような要素が見つかると、`some()` はただちに `true` を返します。見つからなかった場合、`some()` は `false` を返します。`callback` は値が代入されている配列の要素に対してのみ呼び出されます。つまり、すでに削除された要素や、まだ値が代入されていない要素に対しては呼び出されません。

`callback` は、要素の値、要素のインデックス、走査されている Array オブジェクトという 3 つの引数を伴って呼び出されます。

`thisArg` 引数が `some()` に与えられると、それがコールバックのの `this` として使用されます。それ以外は、{{jsxref("undefined")}} 値が `this` として使用されるでしょう。 `callback` が最終的に見ることができる `this` の値は、[関数から見た `this` の決定に関する一般的なルール](/ja/docs/Web/JavaScript/Reference/Operators/this)によって決定されます。

`some()` は呼び出された配列を変化させません。

`some()` によって処理される要素の範囲は、`callback` が最初に呼び出される前に設定されます。`some()` の呼び出しが開始された後に追加された要素に対しては、`callback` は実行されません。既存の配列要素が変更されたり、削除されたりした場合、`callback` に渡される値は `some()` がそれらを訪れた時点での値になり、削除された要素を訪問することはありません。

> **Note:** **注**: このメソッドは空の配列ではあらゆる条件式に対して `false` を返します。

## Polyfill

`some()` は ECMA-262 標準の第 5 版に追加されたメソッドなので、この標準に準拠したすべての実装に存在するわけではありません。次のコードをスクリプトの先頭に追加することにより `some()` にネイティブで対応していない実装上でも使用可能になります。

このアルゴリズムは ECMA-262 第 5 版で指示されたアルゴリズムとまったく同じものです。 {{jsxref("Object")}}、{{jsxref("TypeError")}} はそれぞれオリジナルの値を持ち、またそれらの `fun.call` {{jsxref("Function.prototype.call()")}} のオリジナルの値として評価されます。

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function(fun, thisArg) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}
```

## 例

### 配列要素の値のテスト

次の例は、配列のいずれかの要素が 10 よりも大きいかどうかをテストします。

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### アロー関数を使った配列要素のテスト

[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) はより短い構文で同じテストを提供します。

```js
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true
```

### ある値が配列に存在するかどうかのチェック

`includes()` メソッドを真似て、このカスタム関数は配列にその要素が存在する場合に `true` を返します。

```js
const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
```

### アロー関数を使ったある値が存在するかどうかのチェック

```js
const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
```

### 任意の値の Boolean への変換

```js
const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  'use strict';

  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}

getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true
```

## 仕様

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName("ESDraft", "#sec-array.prototype.some", "Array.prototype.some")}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.some")}}

## 関連情報

- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.some()")}}
