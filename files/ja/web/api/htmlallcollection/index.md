---
title: HTMLAllCollection
slug: Web/API/HTMLAllCollection
l10n:
  sourceCommit: e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{APIRef("DOM")}}{{Deprecated_Header}}

**`HTMLAllCollection`** インターフェイスは文書のすべての要素の集合を表します。（配列風の）インデックスと要素の [`id`](/ja/docs/Web/HTML/Global_attributes/id) によってアクセスします。これは {{domxref("document.all")}} プロパティで返されます。

`HTMLAllCollection` は {{domxref("HTMLCollection")}} と非常によく似た形をしていますが、多くの微妙な動作の違いがあります。例えば、`HTMLAllCollection` は関数として呼び出すことができ、その `item()` メソッドは要素の `id` または `name` 属性を表す文字列で名付けることができます。

## インスタンスプロパティ

- {{domxref("HTMLAllCollection.length")}} {{ReadOnlyInline}}
  - : 集合内のアイテムの数を返します。

## インスタンスメソッド

- {{domxref("HTMLAllCollection.item()")}}
  - : コレクション内の指定したオフセットに位置する要素、または `id` 属性または `name` 属性に指定した値を持つ要素を返します。要素が見つからない場合は `null` を返します。
- {{domxref("HTMLAllCollection.namedItem()")}}
  - : 指定された文字列名と [`id`](/ja/docs/Web/HTML/Global_attributes/id) または `name` 属性が一致する、集合内の最初の[要素](/ja/docs/Web/API/Element)、または一致する要素がない場合は `null` を返します。

## JavaScript での使用法

### インデックスでのアクセス

上記のメソッドに加えて、`HTMLAllCollection` の要素には整数のインデックスや 文字列のプロパティ名でアクセスすることができます。HTML の `id` 属性は `:` や `.` を有効な文字として格納することができるので、プロパティへのアクセスにブラケット記法を使用する必要があります。ここで `i` は整数、整数を格納する文字列、または `id` を表す文字列です。

### 関数として呼び出す

`HTMLAllCollection` オブジェクトは呼び出し可能です。引数なし、または `undefined` で呼び出された場合は `null` を返します。それ以外の場合は、同じ引数を指定された {{domxref("HTMLAllCollection/item", "item()")}} メソッドと同じ値を返します。

### 特殊な型変換の挙動

歴史的な理由から、`document.all` は以下のように `undefined` のように振る舞うオブジェクトです。

- `undefined` と `null` は[緩い等価](/ja/docs/Web/JavaScript/Reference/Operators/Equality)です。
- 論理値コンテキストでは[偽値](/ja/docs/Glossary/Falsy)です。
- [`typeof`](/ja/docs/Web/JavaScript/Reference/Operators/typeof) は `"undefined"` です。

これらの特別な動作によって、次のようなコードを保証します。

```js
if (document.all) {
  // おそらく IE。特別なロジックを提供
}
// おそらく現在のブラウザー
```

互換性のために `document.all` を実装しているブラウザーでコードを実行しても、現行のブラウザー動作を提供し続けます。

しかし、他のすべてのコンテキストでは `document.all` はオブジェクトのままです。例えば次の通りです。

- これは `undefined` や `null` と[厳密等価](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)ではありません。
- [null 合体演算子](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (`??`) や[オプショナルチェーン演算子](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`?.`) の左辺に使用しても、式が短絡することはありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCollection")}}
