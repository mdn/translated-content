---
title: TypedArray.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf
---

{{JSRef}}

**`indexOf()`** メソッドは、指定された要素が型付き配列内で見つかった最初の添字を返し、存在しなければ -1 を返します。このメソッドは {{jsxref("Array.prototype.indexOf()")}} と同じアルゴリズムです。 _TypedArray_ は、ここでは[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)のうちの一つです。

{{EmbedInteractiveExample("pages/js/typedarray-indexof.html")}}

## 構文

```
typedarray.indexOf(searchElement[, fromIndex = 0])
```

### 引数

- `searchElement`
  - : 型付き配列内を検索する要素。
- `fromIndex`
  - : 検索開始位置の添字。添字が型付き配列の長さ以上なら、 -1 が返り、これは型付き配列が検索されなかったことを意味します。与えられた添字が負の数の場合、型付き配列の最後からのオフセット値として扱われます。注意: 指定された添字が負の数であっても、型付き配列は前から後ろに向けて検索されます。計算された添字が 0 未満になった場合は、型付き配列の全体が検索されます。既定値: 0 (型付き配列全体が検索されます)。

### 返値

配列内の要素の最初の添字です。見つからなかったら `-1` になります。

## 解説

`indexOf` は `searchElement` と型付き配列の要素を、[厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators) (===、イコール 3 つの演算子と同じ方法) を使用して比較します。

## 例

### indexOf の使用

```js
var uint8 = new Uint8Array([2, 5, 9]);
uint8.indexOf(2);     // 0
uint8.indexOf(7);     // -1
uint8.indexOf(9, 2);  // 2
uint8.indexOf(2, -1); // -1
uint8.indexOf(2, -3); // 0
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.indexof', 'TypedArray.prototype.indexOf')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.indexOf")}}

## 関連情報

- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.indexOf()")}}
