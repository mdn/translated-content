---
title: Document.querySelectorAll()
slug: Web/API/Document/querySelectorAll
tags:
  - API
  - CSS セレクター
  - DOM
  - Document
  - Finding Elements
  - Locating Elements
  - メソッド
  - リファレンス
  - Searching Elements
  - Selecting Elements
  - セレクター
  - querySelectorAll
browser-compat: api.Document.querySelectorAll
translation_of: Web/API/Document/querySelectorAll
---
{{APIRef("DOM")}}

{{domxref("Document")}} の **`querySelectorAll()`** メソッドは、与えられた CSS セレクターに一致する文書中の要素のリストを示す静的な (ライブではない) {{domxref("NodeList")}} を返します。

## 構文

```js
elementList = parentNode.querySelectorAll(selectors);
```

### 引数

- `selectors`
  - : {{domxref("DOMString")}} で、照合対象となる 1 つまたは複数のセレクターを含みます。この文字列は妥当な [CSS セレクター](/ja/docs/Web/CSS/CSS_Selectors)でなければならず、そうでない場合は `SyntaxError` 例外が発生します。セレクターの仕様と要素の識別の詳細は、[セレクターを使用した DOM 要素の指定](/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)を参照してください。複数のセレクターは、カンマで区切って指定することができます。

> **Note:** 標準の CSS 構文に含まれない文字は、バックスラッシュ文字を使ってエスケープしなければなりません。 JavaScript でもバックスラッシュによるエスケープが使われているため、これらの文字を使った文字列リテラルを記述する際は、特に注意する必要があります。詳細は[特殊文字のエスケープ](/ja/docs/Web/API/Document/querySelector#特殊文字のエスケープ)を参照してください。

### 返値

ライブではない {{domxref("NodeList")}} で、指定されたセレクターの少なくとも 1 つに一致する要素ごとに {{domxref("Element")}} を一つずつ含みます。または一致するものがなければ空の {{domxref("NodeList")}} です。

> **Note:** 指定された `selectors` が [CSS 擬似要素](/ja/docs/Web/CSS/Pseudo-elements)を含む場合、返されるリストは常に空になります。

### 例外

- `SyntaxError`
  - : 指定された `selectors` の構文が妥当ではない場合です。

## 例

### 一致するもののリストの入手

文書内のすべての {{HTMLElement("p")}} 要素の {{domxref("NodeList")}} を入手します。

```js
const matches = document.querySelectorAll("p");
```

次の例では、文書内にあるすべての {{HTMLElement("div")}} 要素のうち、 `note` または `alert` のいずれかのクラスを持つものリストを返します。

```js
const matches = document.querySelectorAll("div.note, div.alert");
```

次に、 `<p>` 要素ののうち直近の親要素が `test` という ID を持つコンテナー内に位置し、直接の親要素が `highlighted` クラスを持つ {{HTMLElement("div")}} であるリストを取得します。

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

次の例では[属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)を使用しており、 `data-src` という名前の属性を持つ、文書内の {{HTMLElement("iframe")}} 要素のリストを返します。

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

次の例では、ID が `userlist` の要素の中にあり、`data-active` 属性を持ち、その値が `1` であるリスト項目のリストを返すため、属性セレクターが使用されています。

```js
const container = document.querySelector("#userlist");
const matches = container.querySelectorAll("li[data-active='1']");
```

### 一致したリストへのアクセス

いったん、一致した要素の {{domxref("NodeList")}} が返されると、それをちょうど配列のように見ることができます。配列が空である (`length` プロパティが 0 である) 場合は、一致がなかったということです。

それ以外の場合は、単純に標準の配列表記を使って、リストの内容にアクセスすることができます。次のように、任意の一般的なループ処理を使うことができます。

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function(userItem) {
  deleteUser(userItem);
});
```

## ユーザーのメモ

`querySelectorAll()` は、最も一般的な JavaScript DOM ライブラリーと異なる動作を持ち、意図しない結果をもたらすことがあります。

### HTML

次の、入れ子になった 3 つの {{HTMLElement("div")}} ブロックを持つ HTML について検討します。

```html
<div class="outer">
  <div class="select">
    <div class="inner">
    </div>
  </div>
</div>
```

### JavaScript

```js
const select = document.querySelector('.select');
const inner = select.querySelectorAll('.outer .inner');
inner.length; // 1 です。0 ではありません!
```

この例で、`.outer .inner` を`<div>` に `select` クラスがついたコンテキストで選択する場合、`.outer` が検索が行われる基底要素 (`.select`) の子孫ではないにもかかわらず、`.inner` クラスの要素が見つかります。既定では、`querySelectorAll()` はセレクターの最後の要素のみを、検索スコープ内にあるかどうか検証します。

{{cssxref(":scope")}} 擬似クラスを使うと、基準となる要素の子孫だけが一致するようになり、期待される挙動を取り戻すことができます。

```js
const select = document.querySelector('.select');
const inner = select.querySelectorAll(':scope .outer .inner');
inner.length; // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [セレクターを使用した DOM 要素の指定](/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- CSS ガイドの[属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)
- MDN 学習領域の[属性セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
- {{domxref("Element.querySelector()")}} および {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("DocumentFragment.querySelector()")}} および {{domxref("DocumentFragment.querySelectorAll()")}}
