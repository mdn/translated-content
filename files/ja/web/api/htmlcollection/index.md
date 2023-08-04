---
title: HTMLCollection
slug: Web/API/HTMLCollection
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

**`HTMLCollection`** インターフェイスは、（文書内の順序における）要素の汎用的な集合（{{jsxref("Functions/arguments", "arguments")}} のような配列風のオブジェクト）を表し、リストから選択するためのメソッドとプロパティを提供します。

> **メモ:** このインターフェイスは歴史的な理由で `HTMLCollection` と呼ばれています（現代の DOM より前では、このインターフェイスを実装する集合が、アイテムとして HTML 要素しか持てませんでした）。

HTML DOM 内の `HTMLCollection` は生きて (live) います。元になった文書が変更された時点で自動的に更新されます。このため、ノードを追加、変更、削除する場合はコピーを（{{jsxref("Array/from", "Array.from")}} などを使用して）作成しておくといいでしょう。

> **メモ:** このインターフェイスは[変更不可能なリストを作成しようとするものでした](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156)。そして、既に使用されているコードの動作を保証するだけのために対応が続いていました。現代の API では、ECMAScript の配列型をラップした型を使用しているため、ECMAScript の配列のように扱うことができ、同時にその使用法に追加の意味づけを行うことができます（アイテムを読み取り専用にするなど）。

## インスタンスプロパティ

- {{domxref("HTMLCollection.length")}} {{ReadOnlyInline}}
  - : collection 内のアイテム数を返します。

## インスタンスメソッド

- {{domxref("HTMLCollection.item()")}}

  - : リスト内の指定された `index` (先頭はゼロ) 位置にある特定のノードを返します。`index` が範囲外なら `null` を返します。

    これは `collection[i]` のアクセスの代替手段です（こちらは `i` が範囲外の場合は `undefined` を返します）。これは主に、 JavaScript 以外の DOM 実装で有用です。
- {{domxref("HTMLCollection.namedItem()")}}

  - : `name` で指定した文字列に ID、または代替として name が一致するノードを返します。name とのマッチングは HTML 限定で、参照した要素が `name` 属性をサポートする場合に限って、最終手段として行われます。指定した名前のノードがない場合は `null` を返します。

    これは `collection[name]` のアクセスの代替手段です（こちらは `name` が存在しない場合、 `undefined` を返します）。これは主に、 JavaScript 以外の DOM 実装で有用です。

## JavaScript での使用法

`HTMLCollection` は名前とインデックスの両方で、自身のメンバーをプロパティとして直接公開します。HTML の ID は `:` や `.` を有効な文字として含むことができ、これらはプロパティとしてアクセスするために角括弧構文を使用しなければなりません。現在の `HTMLCollections` は純粋な数値の ID を認識しません。このような ID は配列へのアクセスと競合しますが、HTML5 では許容しています。

例えば、文書内に 1 つの `<form>` 要素があるものと仮定してください。その `id` は `myForm` です。

```js
let elem1, elem2;

// document.forms は HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // 表示: "true"

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // 表示: "true"

elem1 = document.forms["named.item.with.periods"];
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("NodeList")}}
- {{domxref("HTMLFormControlsCollection")}}, {{domxref("HTMLOptionsCollection")}}
