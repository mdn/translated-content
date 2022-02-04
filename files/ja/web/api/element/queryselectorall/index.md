---
title: Element.querySelectorAll()
slug: Web/API/Element/querySelectorAll
tags:
  - API
  - CSS セレクター
  - DOM
  - Element
  - Finding Elements
  - メソッド
  - リファレンス
  - Searching Elements
  - Selecting Elements
  - セレクター
  - querySelector
browser-compat: api.Element.querySelectorAll
translation_of: Web/API/Element/querySelectorAll
original_slug: Web/API/ParentNode/querySelectorAll
---
{{APIRef("DOM")}}

{{domxref("Element")}} の **`querySelectorAll()`** メソッドは、静的な (生きていない) {{domxref("NodeList")}} で、メソッド呼び出しの時点でそのオブジェクトの子孫にあたる要素のうち、一連のセレクターに一致するもののリストを返します。

## 構文

```js
elementList = parentNode.querySelectorAll(selectors);
```

### 引数

- `selectors`
  - : {{domxref("DOMString")}} で、照合対象の 1 つまたは複数のセレクターを指定します。この文字列は妥当な [CSS セレクター](/ja/docs/Web/CSS/CSS_Selectors)でなければならず、そうでない場合は `SyntaxError` の例外が発生します。セレクターの仕様と要素の識別の詳細は、[セレクターを使用した DOM 要素の指定](/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)を参照してください。複数のセレクターを指定する際は、カンマで区切ります。

> **Note:** 標準の CSS 構文に含まれていない文字は、バックスラッシュ文字を使ってエスケープしなければなりません。 JavaScript でもバックスラッシュによるエスケープが使われているため、これらの文字を使った文字列リテラルを記述する際は、特に注意する必要があります。詳細は {{anch("Escaping special characters")}} を参照してください。

### 返値

生きていない {{domxref("NodeList")}} で、指定されたセレクターの 1 つ以上に一致する子孫ノード 1 つに対して 1 つずつの {{domxref("Element")}} を含みます。

> **Note:** 指定された `selectors` が [CSS 擬似要素](/ja/docs/Web/CSS/Pseudo-elements)を含む場合、返されるリストは常に空になります。

### 例外

- `SyntaxError`
  - : 指定された `selectors` の構文が妥当ではない。

## 例

### データセットセレクターと属性セレクター

```html
<section class="box" id="sect1">
  <div class="funnel-chart-percent1">10.900%</div>
  <div class="funnel-chart-percent2">3700.00%</div>
  <div class="funnel-chart-percent3">0.00%</div>
</section>
```

```js
// データセットセレクター
const refs = [...document.querySelectorAll(`[data-name*="funnel-chart-percent"]`)];

// 属性セレクター
// const refs = [...document.querySelectorAll(`[class*="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class^="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class$="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class~="funnel-chart-percent"]`)];
```

### 一致するもののリストの入手

{{domxref("NodeList")}} で `"myBox"` 要素の中にあるすべての {{HTMLElement("p")}} 要素を取得するには、次のようにします。

```js
var matches = myBox.querySelectorAll("p");
```

次の例では、 `"myBox"` 要素の中にある {{HTMLElement("div")}} 要素のうち、 `note` または `alert` のいずれかのクラスを持つものをすべてリストで返します。

```js
var matches = myBox.querySelectorAll("div.note, div.alert");
```

こちらは、文書内の `<p>` 要素のうち、 `"test"` という ID を持つコンテナー内にあり、
 `"highlighted"` クラスを持つ {{HTMLElement("div")}} を直接の親要素とするもののリストを取得します。

```js
var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted > p");
```

次の例では[属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)を使用しており、 `data-src` という名前の属性を持つ、文書内の {{HTMLElement("iframe")}} 要素のリストを返します。

```js
var matches = document.querySelectorAll("iframe[data-src]");
```

次の例では、ID が `"userlist"` の要素の中にあり、`"data-active"` 属性を持ち、その値が `"1"` であるリスト項目のリストを返すため、属性セレクターが使用されています。

```js
var container = document.querySelector("#userlist");
var matches = container.querySelectorAll("li[data-active='1']");
```

### 照合結果へのアクセス

一致した要素の {{domxref("NodeList")}} が返されると、配列と同様に調べることができます。配列が空であれば (つまり、 `length` プロパティが 0 であれば)、一致するものが見つからなかったということです。

それ以外の場合は、標準的な配列記法でリストの内容にアクセスすることができます。次のような一般的なループ文を使用することができます。

```js
var highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function(userItem) {
  deleteUser(userItem);
});
```

> **Note:** `NodeList` は、本物の配列ではありません。つまり、`slice`、`some`、`map` などの配列メソッドを持っていません。これを配列に変換するには、 `Array.from(nodeList)` を実行してみてください。

## ユーザーのメモ

`querySelectorAll()` は、最も一般的な JavaScript DOM ライブラリーとは動作が異なっており、意図しない結果をもたらすことがあります。

### HTML

次の、入れ子になった 3 つの {{HTMLElement("div")}} ブロックを持つ HTML について考えてみてください。

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
var select = document.querySelector('.select');
var inner = select.querySelectorAll('.outer .inner');
inner.length; // 1 です。0 ではありません!
```

この例では、 `".outer .inner"` を `"select"` クラスの `<div>` のコンテキストで選択した場合、クラス `".inner"` の要素は、 `.outer` が検索対象の基底要素 (`".select"`) の子孫でなくても見つかります。既定では、`querySelectorAll()` はセレクターの最後の要素が検索範囲内にあるかどうかだけを確認します。

{{cssxref(":scope")}} 擬似クラスを使用すると、基底要素の子孫にあるセレクターにのみ一致するという、期待される動作に戻ります。

```js
var select = document.querySelector('.select');
var inner = select.querySelectorAll(':scope .outer .inner');
inner.length; // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [セレクターを使用した DOM 要素の指定](/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- CSS ガイドの[属性セレクター](/ja/docs/Web/CSS/Attribute_selectors)
- MDN 学習エリアの[属性セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
- {{domxref("Element.querySelector()")}}
- {{domxref("Document.querySelector()")}} および {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} および {{domxref("DocumentFragment.querySelectorAll()")}}
