---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
---

{{JSRef}}

**`slice()`** メソッドは、元の型付き配列の部分的なコピーを含む新しい型付き配列 (新しいバッファーによる) を返します。このメソッドは {{jsxref("Array.prototype.slice()")}} と同じアルゴリズムを持ちます。 _TypedArray_ は、ここでは[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)の一つです。

{{EmbedInteractiveExample("pages/js/typedarray-slice.html","shorter")}}

## 構文

```
typedarray.slice([begin[, end]])
```

### 引数

- `begin` {{optional_inline}}
  - : 抽出範囲の先頭の位置を示す 0 から始まる添字です。

    負の添字を使って、配列の末尾からの相対位置を表すことができます。

    `slice(-2)` は配列の最後から 2 番目の要素と最後の要素を抽出します。

    `begin` を省略した場合、 `slice` は `0` 番目の要素から開始します。
- `end` {{optional_inline}}
  - : 抽出範囲の末尾の _直前_ の位置を示す 0 から始まる添字です。 `slice` は
    `end` 自体は含めず、その直前まで抽出します。

    `slice(1,4)` は 2 番目の要素から 4 番目の要素まで (添字が 1, 2, 3 の要素) を取り出します。

    負の添字を使って、配列の末尾からの相対位置を表すことができます。 `slice(2,-1)` は配列の 3 番目の要素から、最後から 2 番目の要素まで取り出します。

    `end` が省略された場合、 `slice` は配列の最後 (`typedarray.length`) まで取り出します。

### 返値

抽出された要素が入った新しい型付き配列。

## 解説

`slice` メソッドは元の配列を変更しません。元の配列から取り出された要素のコピーを含む浅いコピーを返します。

一方の型付き配列に新しい要素が追加されても、他方の型付き配列に影響はしません。

## 例

### 例: 既存の配列の一部を返す

```js
var uint8 = new Uint8Array([1,2,3]);
uint8.slice(1);   // Uint8Array [ 2, 3 ]
uint8.slice(2);   // Uint8Array [ 3 ]
uint8.slice(-2);  // Uint8Array [ 2, 3 ]
uint8.slice(0,1); // Uint8Array [ 1 ]
```

## ポリフィル

_TypedArray_ という名前のグローバルオブジェクトはないため、ポリフィルの使用は「必要に応じて」の原則で行う必要があります。

```js
if (!Uint8Array.prototype.slice) {
  Object.defineProperty(Uint8Array.prototype, 'slice', {
    value: function (begin, end)
     {
        return new Uint8Array(Array.prototype.slice.call(this, begin, end));
     }
  });
}
```

{{jsxref("Object.defineProperty")}} に対応していない本当に古い JavaScript エンジンに対応する必要がある場合は、列挙不可能にすることができないため、 `Array.prototype` メソッドのポリフィルを行わないことが適切です。

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.slice', '%TypedArray%.prototype.slice')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.slice")}}

## 関連情報

- {{jsxref("Array.prototype.slice()")}}
