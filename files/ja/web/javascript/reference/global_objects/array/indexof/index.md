---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`indexOf()`** メソッドは引数に与えられた内容と同じ内容を持つ最初の配列要素の添字を返します。存在しない場合は -1 を返します。

{{EmbedInteractiveExample("pages/js/array-indexof.html")}}

## 構文

```js
indexOf(searchElement);
indexOf(searchElement, fromIndex);
```

### 引数

- `searchElement`
  - : 検索する配列要素です。
- `fromIndex` {{optional_inline}}
  - : 検索を始める位置です。もしこの位置が配列の長さ以上の場合は、-1 が返され、配列は検索されません。負の数の場合、これは配列の末尾からのオフセットとみなされます。なお、この位置が負の数であっても、配列は前から後ろに検索されることに注意してください。指定された位置が 0 であれば、配列全体が検索されます。既定値は 0 （配列全体を検索）です。

### 返値

見つかった最初の配列要素の添字です。見つからなかった場合は **-1** です。

## 解説

`indexOf()` は `searchElement` と配列の要素を [厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality) （三重イコール演算子 `===` で使われるのと同じ方法）を使って比較します。

> **メモ:** String のメソッドについては、{{jsxref("String.prototype.indexOf()")}} を参照してください。

## 例

### indexOf() の使用

以下の例は `indexOf()` を使って、配列中のある値の位置を探しています。

```js
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### ある要素の存在をすべて見つける

```js
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### 要素が配列内に存在するかどうかを調べ、配列を更新する

```js
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log(`New veggies collection is: ${veggies}`);
  } else {
    console.log(`${veggie} already exists in the veggies collection.`);
  }
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

updateVegetablesCollection(veggies, "spinach");
// New veggies collection is: potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, "spinach");
// spinach already exists in the veggies collection.
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.indexOf` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
