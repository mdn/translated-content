---
title: TypedArray.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/filter
---

{{JSRef}}

**`filter()`** メソッドは、提供された関数によって実装されたテストに合格したすべての要素を含む新しい型付き配列を生成します。このメソッドのアルゴリズムは {{jsxref("Array.prototype.filter()")}} と同じです。ここで _TypedArray_ は、[型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)のうちの 1 つです。

{{EmbedInteractiveExample("pages/js/typedarray-filter.html")}}

## 構文

```
typedarray.filter(callback[, thisArg])
```

### 引数

- `callback`
  - : 型付き配列の各要素をテストする関数。 `(element, index, typedarray)` の引数で呼び出されます。 `true` を返すと要素を維持し、それでなければ `false` を返します。
- `thisArg`{{optional_inline}}
  - : `callback` を実行するときに `this` として使用する値です。

### 返値

テストに合格した要素を持つ新しい型付き配列。

## 解説

`filter()` は、与えられた `callback` 関数を型付き配列の各要素に対して一度ずつ呼び出し、`callback` が [`true` と評価される値](/ja/docs/Glossary/Truthy)を返したすべての要素からなる新しい型付き配列を生成します。`callback` は値が代入されている型付き配列の添字に対してのみ呼び出されます。つまり、すでに削除された添字や、まだ値が代入されていない添字に対しては呼び出されません。`callback` によるテストに合格しなかった型付き配列の要素は単純にスキップされ、新しい型付き配列には含まれません。

`callback` は 3 つの引数で呼び出されます。

1. 要素の値
2. 要素の添字
3. 走査中の型付き配列オブジェクト

引数 `thisArg` が `filter()` に与えられた場合、そのオブジェクトは `callback` が呼び出された際に `this` 値として使われます。そうでない場合、 `undefined` が `this` 値として使われます。`callback` 関数内の最終的な `this` 値は[関数内の `this` を決定する一般的ルール](/ja/docs/Web/JavaScript/Reference/Operators/this)に従って決められます。

`filter()` は呼び出された型付き配列を変化させません。

`filter()` によって処理される要素の範囲は `callback` が最初の呼び出し前に設定されます。 `filter()` の呼び出しが始まった後で型付き配列にに追加された要素は `callback` によって処理されません。型付き配列の存在している要素が変更されたり、削除された場合、 `callback` に渡される値は、 `filter()` が処理する直前の値になります。

## 例

### 小さな値をすべて取り除く

次の例では、`filter()` を使って `10` 未満の値を持つ要素をすべて取り除いた型付き配列を生成します。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).filter(isBigEnough);
// Uint8Array [ 12, 130, 44 ]
```

### アロー関数を使用して型付き配列の要素をフィルターする

[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)によって、同じテストをより短い構文で実現できます。

```js
new Uint8Array([12, 5, 8, 130, 44]).filter(elem => elem >= 10);
// Uint8Array [ 12, 130, 44 ]
```

## 仕様書

| 仕様書                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.filter', 'TypedArray.prototype.filter')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.filter")}}

## 関連情報

- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.filter()")}}
