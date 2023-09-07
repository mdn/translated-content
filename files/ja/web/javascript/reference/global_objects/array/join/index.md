---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`join()`** メソッドは、配列（または[配列風オブジェクト](/ja/docs/Web/JavaScript/Guide/Indexed_collections#配列風オブジェクトの扱い)）の全要素を順に連結した文字列を新たに作成して返します。区切り文字はカンマ、または指定された文字列です。配列にアイテムが一つしかない場合は、区切り文字を使用せずにアイテムが返されます。

{{EmbedInteractiveExample("pages/js/array-join.html")}}

## 構文

```js
join();
join(separator);
```

### 引数

- `separator` {{optional_inline}}
  - : 配列の各要素を区切る文字列を指定します。 separator は、必要であれば文字列に変換されます。省略した場合、配列の要素はカンマ (",") で区切られます。 `separator` に空文字列を渡した場合、すべての要素の間が区切り文字無しで繋がれます。

### 返値

配列の全要素が連結された文字列です。 `arr.length` が `0` だった場合、空の文字列が返されます。

## 解説

配列のすべての要素を文字列に変換したものが、1 個の文字列に繋がれます。

> **警告:** 要素が `undefined` または `null` または空配列 `[]` であった場合は、空の文字列に変換されます。

`join` メソッドは、内部的には [`Array.prototype.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) によって引数なしでアクセスすることができます。配列インスタンスの `join` をオーバーライドすると、その `toString` の動作もオーバーライドされます。

## 例

### 3 通りの異なる形で配列をつなぐ

以下の例は、3 個の要素を持つ配列 `a` を作成し、デフォルト引数、カンマとスペース、そして「と」と空文字を使った 4 パターンの結合を行っています。

```js
const a = ["風", "水", "火"];
a.join(); // '風,水,火'
a.join(", "); // '風, 水, 火'
a.join(" + "); // '風 + 水 + 火'
a.join(""); // '風水火'
```

### 配列風オブジェクトを連結する

次の例は、配列風オブジェクト （ [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) ）を連結するために、 `Array.prototype.join` を {{jsxref("Function.prototype.call")}} を使用して呼び出します。

```js
function f(a, b, c) {
  const s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, "a", true);
//expected output: "1,a,true"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
