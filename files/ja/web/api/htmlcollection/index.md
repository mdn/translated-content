---
title: HTMLCollection
slug: Web/API/HTMLCollection
---

{{APIRef("DOM")}}

**`HTMLCollection`** インターフェイスは、 (文書内の順序における) 要素の一般的なコレクション ({{jsxref("Functions/arguments", "arguments")}} のような配列風のオブジェクト) を表し、リストから選択するためのメソッドとプロパティを提供します。

> **メモ:** このインターフェイスは歴史的な理由で `HTMLCollection` と呼ばれています (現代の DOM より前は、このインターフェイスを実装するコレクションが、アイテムとして HTML 要素しか持てませんでした)。

HTML DOM 内の `HTMLCollection` は生きて (live) います。それらは元になった document が変更された時点で自動的に更新されます。

## プロパティ

- {{domxref("HTMLCollection.length")}} {{readonlyInline}}
  - : collection 内のアイテム数を返します。

## メソッド

- {{domxref("HTMLCollection.item()")}}
  - : リスト内の指定された `index` (先頭はゼロ) 位置にある特定のノードを返します。`index` が範囲外なら `null` を返します。
    これは `collection[i]` のアクセスの代替手段です (こちらは `i` が範囲外の場合は `undefined` を返します)。これは主に、 JavaScript 以外の DOM 実装で有用です。
- {{domxref("HTMLCollection.namedItem()")}}
  - : `name` で指定した文字列に ID、または代替として name が一致するノードを返します。name とのマッチングは HTML 限定で、参照した要素が `name` 属性をサポートする場合に限って、最終手段として行われます。指定した名前のノードがない場合は `null` を返します。
    これは `collection[name]` のアクセスの代替手段です (こちらは `name` が存在しない場合、 `undefined` を返します)。これは主に、 JavaScript 以外の DOM 実装で有用です。

## JavaScript での使用法

`HTMLCollection` は名前やインデックスでも、自身のメンバーをプロパティとして直接公開します。HTML の ID は `:` や `.` を有効な文字として含むことができ、これらはプロパティとしてアクセスするために角括弧構文を使用しなければなりません。現在の `HTMLCollections` は純粋な数値の ID を認識しません。このような ID は配列へのアクセスと競合しますが、HTML5 では許容しています。

例えば、文書内に 1 つの `<form>` 要素があるものと仮定してください。その `id` は `myForm` です。

```js
var elem1, elem2;

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

| 仕様書                                                                               | 状態                             | 備考 |
| ------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('DOM WHATWG', '#htmlcollection', 'HTMLCollection')}} | {{ Spec2('DOM WHATWG') }} |      |

## ブラウザーの互換性

{{Compat("api.HTMLCollection")}}

## 関連情報

- {{domxref("NodeList")}}
- {{domxref("HTMLFormControlsCollection")}}, {{domxref("HTMLOptionsCollection")}}
