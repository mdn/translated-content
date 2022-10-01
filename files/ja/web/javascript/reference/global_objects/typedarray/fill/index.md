---
title: TypedArray.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
---

{{JSRef}}

**`fill()`** メソッドは、型付き配列の開始位置から終了位置までのすべての要素を固定値で埋めます。このメソッドのアルゴリズムは {{jsxref("Array.prototype.fill()")}} と同じです。ここで _TypedArray_ は、[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)のうちの 1 つです。

{{EmbedInteractiveExample("pages/js/typedarray-fill.html","shorter")}}

## 構文

```
typedarray.fill(value[, start = 0[, end = this.length]])
```

### 引数

- `value`
  - : 型付き配列を埋める値です。
- `start` {{optional_inline}}
  - : 開始位置です。既定値は 0 です。
- `end` {{optional_inline}}
  - : 終了位置 (の次の位置) です既定値は `this.length` です。

### 返値

変更された配列です。

## 解説

埋める区間は \[`start`, `end`) です。

**`fill()`** メソッドは `value`, `start`, `end` の 3 つまでの引数を取ります。 `start` と `end` の各引数は省略可能で、既定値はそれぞれ `0` と、 `this` オブジェクトの `length` です。

`start` が負の数であった場合は、 `length+start` (`length` は配列の長さ) として扱われます。 `end` が負の数であった場合は、 `length+end` として扱われます。

## 例

### fill() の使用

```js
new Uint8Array([1, 2, 3]).fill(4);         // Uint8Array [4, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1);      // Uint8Array [1, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1, 2);   // Uint8Array [1, 4, 3]
new Uint8Array([1, 2, 3]).fill(4, 1, 1);   // Uint8Array [1, 2, 3]
new Uint8Array([1, 2, 3]).fill(4, -3, -2); // Uint8Array [4, 2, 3]
```

## ポリフィル

_TypedArray_ という名前のグローバルオブジェクトはないため、ポリフィルの使用は「必要に応じて」の原則で行う必要があります。以下の「ポリフィル」は、 {{jsxref("Array.prototype.fill()")}} のポリフィルと同時に使用してください。

```js
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
if (!Uint8Array.prototype.fill) {
  Uint8Array.prototype.fill = Array.prototype.fill;
}
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.fill', 'TypedArray.prototype.fill')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.fill")}}

## 関連情報

- {{jsxref("Array.prototype.fill()")}}
