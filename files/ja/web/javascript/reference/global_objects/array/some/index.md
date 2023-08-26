---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`some()`** メソッドは、指定された関数で実装されているテストに、配列の中の少なくとも 1 つの要素が 合格するかどうかを判定します。配列の中で指定された関数が true を返す要素を見つけた場合は true を返し、そうでない場合は false を返します。それ以外の場合は false を返します。配列は変更しません。

{{EmbedInteractiveExample("pages/js/array-some.html")}}

## 構文

```js
// アロー関数
some((element) => {
  /* … */
});
some((element, index) => {
  /* … */
});
some((element, index, array) => {
  /* … */
});

// コールバック関数
some(callbackFn);
some(callbackFn, thisArg);

// インラインコールバック関数
some(function (element) {
  /* … */
});
some(function (element, index) {
  /* … */
});
some(function (element, index, array) {
  /* … */
});
some(function (element, index, array) {
  /* … */
}, thisArg);
```

### 引数

- `callbackFn`

  - : 各要素に対してテストを実行する関数です。

    この関数は以下の引数と共に呼び出されます。

    - `element`
      - : 配列内で現在処理されている要素です。
    - `index`
      - : 現在処理されている要素の添字です。
    - `array`
      - : `some()` が呼び出された配列です。

- `thisArg` {{optional_inline}}
  - : `callbackFn` を実行するときに `this` として使用するオブジェクトです。

### 返値

配列内の少なくとも 1 つの要素でコールバック関数が{{Glossary("truthy", "真値")}}を返した場合は **`true`** です。それ以外は **`false`** です。

## 解説

`some()` は、与えられた `callbackFn` 関数を、配列に含まれる各要素に対して一度ずつ、`callbackFn` が「真値」（論理型に変換した際に真となる値）を返す要素が見つかるまで呼び出します。そのような要素が見つかると、 `some()` はただちに `true` を返します。見つからなかった場合、`some()` は `false` を返します。`callbackFn` は値が代入されている配列の要素に対してのみ呼び出されます。つまり、すでに削除された要素や、まだ値が代入されていない要素に対しては呼び出されません。

`callbackFn` は、要素の値、要素のインデックス、走査されている Array オブジェクトという 3 つの引数を伴って呼び出されます。

`thisArg` 引数が `some()` に与えられた場合は、それがコールバックのの `this` として使用されます。そうでない場合は 、{{jsxref("undefined")}} 値が `this` として使用されます。 `callbackFn` から最終的に見られる `this` の値は、[関数から見た `this` の決定に関する一般的なルール](/ja/docs/Web/JavaScript/Reference/Operators/this)によって決定されます。

`some()` は呼び出された配列を変化させません。

`some()` によって処理される要素の範囲は、 `callbackFn` が最初に呼び出される前に設定されます。`some()` の呼び出しが開始された後に追加された要素に対しては、`callbackFn` は呼び出されません。既存の配列要素が変更されたり、削除されたりした場合、`callbackFn` に渡される値は `some()` がそれらを訪れた時点での値になり、削除された要素に対して呼び出されることはありません。

> **警告:** 前項で説明したような、参照中の配列の同時進行での変更は（特殊な場合を除いて）普通は避けるべきです。多くの場合、理解しにくいコードになります。

> **メモ:** このメソッドは空の配列ではあらゆる条件式に対して `false` を返します。

## 例

### 配列要素の値のテスト

次の例は、配列のいずれかの要素に 10 よりも大きいものがあるかどうかをテストします。

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### アロー関数を使った配列要素のテスト

[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)は、より短い構文で同じテストを提供します。

```js
[2, 5, 8, 1, 4].some((x) => x > 10); // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true
```

### ある値が配列に存在するかどうかのチェック

`includes()` メソッドを真似て、このカスタム関数は配列にその要素が存在する場合に `true` を返します。

```js
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
```

### アロー関数を使ったある値が存在するかどうかのチェック

```js
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
```

### 任意の値の論理値への変換

```js
const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.some` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.some()")}}
