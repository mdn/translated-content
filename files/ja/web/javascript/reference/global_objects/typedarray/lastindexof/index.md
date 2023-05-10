---
title: TypedArray.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`lastIndexOf()`** メソッドは、指定された要素が型付き配列内で見つかった最後の位置の添字を返し、存在しなければ -1 を返します。型付き配列は `fromIndex` で始まる位置から逆方向に検索されます。 このメソッドは {{jsxref("Array.prototype.lastIndexOf()")}} と同じアルゴリズムです。 _TypedArray_ は、ここでは[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)のうちの一つです。

{{EmbedInteractiveExample("pages/js/typedarray-lastindexof.html")}}

## 構文

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### 引数

- `searchElement`
  - : 型付き配列内で検索する要素。
- `fromIndex`
  - : オプション。逆方向に検索を開始する位置の添字。既定値は型付き配列の長さで、すなわち型付き配列全体が検索されます。添字が型付き配列の長さ以上の場合、型付き配列全体が検索されます。添字が負の数の場合、型付き配列の末尾からのオフセットとして扱われます。添字が負の数であっても、型付き配列は末尾から先頭に向けて検索されます。計算された添字が 0 未満になった場合は、 -1 が返され、すなわち型付き配列は検索されません。

### 返値

配列内の要素の最後の添字です。見つからなかったら `-1` になります。

## 解説

`lastIndexOf` は `searchElement` と型付き配列の要素を、[厳密等価](/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness#_による厳格な等価性) (===、イコール 3 つの演算子と同じ方法) を使用して比較します。

## 例

### lastIndexOf の使用

```js
const uint8 = new Uint8Array([2, 5, 9, 2]);
uint8.lastIndexOf(2); // 3
uint8.lastIndexOf(7); // -1
uint8.lastIndexOf(2, 3); // 3
uint8.lastIndexOf(2, 2); // 0
uint8.lastIndexOf(2, -2); // 0
uint8.lastIndexOf(2, -1); // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.lastIndexOf` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
