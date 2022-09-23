---
title: TypedArray.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight
---

{{JSRef}}

**`reduceRight()`** メソッドは、アキュームレーターと型付きのそれぞれの値に対して (右から左へ) 関数を適用していき、単一の値にまとめます。このメソッドは、{{jsxref("Array.prototype.reduceRight()")}}と同じアルゴリズムです。 _TypedArray_ は、ここでは[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)の一つです。

## 構文

```
typedarray.reduceRight(callback[, initialValue])
```

### 引数

- `callback`

  - : 型付き配列内の各値に対して実行する関数です。4 つの引数を取ります。

    - `previousValue`
      - : 前回のコールバック関数の呼び出しで返された値。または、提供された場合は `initialValue` (下記参照)。
    - `currentValue`
      - : 現在処理されている型付き配列の要素。
    - `index`
      - : 現在処理されている型付き配列要素の添字。
    - `array`
      - : `reduceRight()` が呼び出された型付き配列

- `initialValue`
  - : 任意。 `callback` 関数の最初の呼び出しの最初の引数として使用するオブジェクト。

### 返値

畳み込みによって得られた 1 つの値です。

## 解説

`reduceRight` メソッドは、型付き配列に存在するそれぞれの要素に対して (型付き配列の中の穴は除く) `callback` 関数を一度ずつ実行します。この関数は、初期値 (または直前の `callback` 呼び出し)、現在の要素の値、現在の添字、反復処理中の型付き配列の 4 つの引数を受け取ります。

`reduceRight` のコールバックの呼び出しは、下記のようになります。

```js
typedarray.reduceRight(function(previousValue, currentValue, index, typedarray) {
  // ...
});
```

最初にコールバック関数が呼び出されたときは、 `previousValue` と `currentValue` は、二つの値を一つにまとめます。 `reduceRight` の呼び出し時に `initialValue` が与えられた場合、 `previousValue` は `initialValue` に等しくなり、 `currentValue` は、型付き配列の最後の値と等しくなります。 `initialValue` が与えられなかった場合、 `previousValue` は、型付き配列の最後の値と等しくなり、 `currentValue` は最後から数えて 2 番目の値と等しくなります。

型付き配列が空で、 `initialValue` が与えられなかった場合、 {{jsxref("TypeError")}} が発生します。型付き配列が (位置に関係なく) 一つの要素しか持たず、 `initialValue` が与えられなかった場合、もしくは、 `initialValue` が与えられたが型付き配列が空の場合、 `callback` 関数の呼び出しなしで、単独の値が返されることになります。

## 例

### 配列内のすべての値を合計する

```js
var total = new Uint8Array([0, 1, 2, 3]).reduceRight(function(a, b) {
  return a + b;
});
// total == 6
```

## 仕様書

| 仕様書                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.reduceright', '%TypedArray%.prototype.reduceRight')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.reduceRight")}}

## 関連情報

- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
