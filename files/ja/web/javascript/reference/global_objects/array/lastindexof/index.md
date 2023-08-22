---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
l10n:
  sourceCommit: 9b38f886d21c5d0a428f58acb20c4d0fc6c2e098
---

{{JSRef}}

**`lastIndexOf()`** メソッドは、配列中で与えられた要素が見つかった最後の添字を返します。もし存在しなければ -1 を返します。配列は `fromIndex` から逆向きに検索されます。

{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}

## 構文

```
arr.lastIndexOf(searchElement[, fromIndex])
```

### 引数

- `searchElement`
  - : 検索する配列要素です。
- `fromIndex` {{optional_inline}}

  - : 逆向きに検索し始める添字です。既定値は配列の長さ に 1 を引いた値 (`arr.length - 1`) で、つまり配列全体が検索されます。

  `fromIndex` の値が配列の長さ以上であれば、配列全体を検索します。（この場合、概念的には、配列の末尾から先の存在しない位置からメソッドの検索を開始させ、そこから配列の実際の末尾の位置を探して、実在する配列の要素を逆方向に検索し始めると考えることができます。）

  `fromIndex` の値が 0 より大きい場合は、配列の先頭からのオフセットとして受け取られます。

`fromIndex` に 0 よりも小さい値を指定すると、配列の末尾からのオフセットとして受け取られます。言い換えると、 `array.length + fromIndex` の位置を指定したものとみなされます。したがって、 `array.length + fromIndex` が 0 よりも小さい場合、配列の探索は行われず、メソッドは -1 を返します（この場合、 `fromIndex` は配列の先頭の存在しない位置を指定しているので、概念的には、メソッドがその存在しない位置から探索して、そこから配列要素を探すと考えることができますが、決して見つかることはありません）。

### 返値

配列内の一致した要素の最後の位置です。見つからなかった場合は **-1** です。

## 解説

`lastIndexOf` は `searchElement` と配列の要素を[厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)（三重イコール演算子 `===` で使われるのと同じ方法）によって比較します。

## 例

### `lastIndexOf` の使用

`lastIndexOf` を使って配列中のある値の位置を探す例を以下に示します。

```js
const numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2); // 3
numbers.lastIndexOf(7); // -1
numbers.lastIndexOf(2, 3); // 3
numbers.lastIndexOf(2, 2); // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```

### ある要素の存在をすべて見つける

以下の例は `lastIndexOf` を使って、与えられた配列中のある値の添字すべてを探しています。{{jsxref("Array.prototype.push", "push")}} を使って、値が見つかる度に別の配列にその添字を追加しています。

```js
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.lastIndexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```

ここで `idx == 0` の場合を分けて扱わないといけないことに注意してください。なぜなら、もし検索する値が配列の最初の要素にあると、その値は `fromIndex` パラメータにかかわらずいつもヒットしてしまうのです。これは {{jsxref("Array.prototype.indexOf", "indexOf")}} メソッドとは異なります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.lastIndexOf` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
