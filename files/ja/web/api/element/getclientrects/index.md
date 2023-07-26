---
title: "Element: getClientRects() メソッド"
short-title: getClientRects()
slug: Web/API/Element/getClientRects
l10n:
  sourceCommit: 88ecc11b7d151365a93dad4536a350a832b14d20
---

{{APIRef("DOM")}}

**`getClientRects()`** は {{domxref("Element")}} インターフェイスのメソッドで、クライアントにあるそれぞれの [CSS 境界ボックス](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)の境界線を示す {{DOMxRef("DOMRect")}} オブジェクトのコレクションを返します。

多くの要素には、境界ボックスが 1 つずつしかありませんが、複数行の[インラインレベル要素](/ja/docs/Glossary/Inline-level_content) （例えば複数行にまたがる {{HTMLElement("span")}} 要素、既定の場合）には、行ごとに囲む境界ボックスがあります。

## 構文

```js-nolint
getClientRects()
```

### 引数

なし。

### 返値

返される値は {{DOMxRef("DOMRect")}} オブジェクトのコレクションで、要素に関連付けられた CSS の境界ボックスごとに 1 つずつ用意されます。それぞれの {{DOMxRef("DOMRect")}} オブジェクトは、ビューポートの左上からの境界ボックスの座標をピクセル単位で表します。キャプションを持つ表の場合、キャプションは表の境界ボックスの外側にあっても含まれます。外部の `<svg>` 以外の SVG 要素に対して呼び出された場合、結果として得られる矩形の相対的な「ビューポート」は、その要素の外部の `<svg>` が確立したビューポートになります（明確にするために、矩形は外部の `<svg>` の `viewBox` 変形によっても変換されます）。

矩形を計算する際には、ビューポート領域（またはその他のスクロール可能な要素）のスクロール量が考慮されます。

返される矩形には、オーバーフローする可能性のある子要素の境界は含まれていません。

HTML の {{HtmlElement("area")}} 要素、それ自体が何もレンダリングしない SVG 要素、 `display:none` の要素、そして一般的に直接レンダリングされない要素については、空のリストが返されます。

CSS ボックスで境界ボックスが空であっても矩形が返されます。 `left`, `top`, `right`, `bottom` の各座標はなお意味を持っています。

小数のピクセルオフセットが可能です。

## 例

これらの例では、様々な色でクライアント矩形を描画しています。クライアント矩形を描画する JavaScript 関数は、 `withClientRectsOverlay` クラスを介してマークアップに接続されていることに注意してください。

### HTML

例 1: このHTMLは、 `<span>` 要素を含む3つの段落を生成し、それぞれを `<div>` ブロックに埋め込んでいます。2 番目のブロックの段落と 3 番目のブロックの `<span>` 要素には、クライアントの矩形が描画されます。

```html
<h3>A paragraph with a span inside</h3>
<p>
  Both the span and the paragraph have a border set. The client rects are in
  red. Note that the p has only one border box, while the span has multiple
  border boxes.
</p>

<div>
  <strong>Original</strong>
  <p>
    <span>Paragraph that spans multiple lines</span>
  </p>
</div>

<div>
  <strong>p's rect</strong>
  <p class="withClientRectsOverlay">
    <span>Paragraph that spans multiple lines</span>
  </p>
</div>

<div>
  <strong>span's rect</strong>
  <p>
    <span class="withClientRectsOverlay"
      >Paragraph that spans multiple lines</span
    >
  </p>
</div>
```

例 2: この HTML は 3 つの順序付きリストを生成します。2 番目のブロックの `<ol>` と 3 番目のブロックの各 `<li>` 要素に対してクライアントの矩形が描かれています。

```html
<h3>A list</h3>
<p>
  Note that the border box doesn't include the number, so neither do the client
  rects.
</p>

<div>
  <strong>Original</strong>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>

<div>
  <strong>ol's rect</strong>
  <ol class="withClientRectsOverlay">
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>

<div>
  <strong>each li's rect</strong>
  <ol>
    <li class="withClientRectsOverlay">Item 1</li>
    <li class="withClientRectsOverlay">Item 2</li>
  </ol>
</div>
```

例 3: この HTML はキャプション付きの 2 つの表を生成します。クライアント矩形は 2 番目のブロックの `<table>` で描画されます。

```html
<h3>A table with a caption</h3>
<p>
  Although the table's border box doesn't include the caption, the client rects
  do include the caption.
</p>

<div>
  <strong>Original</strong>
  <table>
    <caption>
      caption
    </caption>
    <thead>
      <tr>
        <th>thead</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>tbody</td>
      </tr>
    </tbody>
  </table>
</div>

<div>
  <strong>table's rect</strong>
  <table class="withClientRectsOverlay">
    <caption>
      caption
    </caption>
    <thead>
      <tr>
        <th>thead</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>tbody</td>
      </tr>
    </tbody>
  </table>
</div>
```

### CSS

CSS は、最初の例では各 `<div>` ブロック内の段落と `<span>` の周りに、2番目の例では `<ol>` と `<li>` の周りに、3番目の例では `<table>`, `<th>`, `<td>` の各要素の周りに境界線を描画します。

```css
strong {
  text-align: center;
}
div {
  display: inline-block;
  width: 150px;
}
div p,
ol,
table {
  border: 1px solid blue;
}
span,
li,
th,
td {
  border: 1px solid green;
}
```

### JavaScript

JavaScriptコードは、 CSS のクラス `withClientRectsOverlay` が割り当てられているすべてのHTML要素について、クライアント矩形を描画します。

```js
function addClientRectsOverlay(elt) {
  /* Absolutely position a div over each client rect so that its border width
     is the same as the rectangle's width.
     Note: the overlays will be out of place if the user resizes or zooms. */
  const rects = elt.getClientRects();
  for (const rect of rects) {
    const tableRectDiv = document.createElement("div");
    tableRectDiv.style.position = "absolute";
    tableRectDiv.style.border = "1px solid red";
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft =
      document.documentElement.scrollLeft || document.body.scrollLeft;
    tableRectDiv.style.margin = tableRectDiv.style.padding = "0";
    tableRectDiv.style.top = `${rect.top + scrollTop}px`;
    tableRectDiv.style.left = `${rect.left + scrollLeft}px`;
    // We want rect.width to be the border width, so content width is 2px less.
    tableRectDiv.style.width = `${rect.width - 2}px`;
    tableRectDiv.style.height = `${rect.height - 2}px`;
    document.body.appendChild(tableRectDiv);
  }
}

(() => {
  /* Call function addClientRectsOverlay(elt) for all elements with
     assigned class "withClientRectsOverlay" */
  const elts = document.getElementsByClassName("withClientRectsOverlay");
  for (const elt of elts) {
    addClientRectsOverlay(elt);
  }
})();
```

### 結果

{{EmbedLiveSample('Examples', 680, 650)}}

## 仕様書

{{Specifications}}

### メモ

`getClientRects()` は MS IE の DHTML オブジェクトモデルで導入されたのが最初です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Element.getBoundingClientRect()")}}
