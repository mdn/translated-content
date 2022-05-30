---
title: Document.elementFromPoint()
slug: Web/API/Document/elementFromPoint
tags:
  - API
  - 座標
  - Document
  - メソッド
  - リファレンス
browser-compat: api.Document.elementFromPoint
translation_of: Web/API/DocumentOrShadowRoot/elementFromPoint
translation_of_original: Web/API/Document/elementFromPoint
original_slug: Web/API/DocumentOrShadowRoot/elementFromPoint
---
{{APIRef("DOM")}}

**`elementFromPoint()`** メソッドは {{domxref("Document")}} オブジェクト上で利用可能で、指定した座標（ビューポートからの相対座標）における最上位の要素 ({{domxref("Element")}}) を返します。

指定された点の要素が他の文書（例えば {{HTMLElement("iframe")}} の文書）に属する場合、その文書の親要素（`<iframe>` 自身）が返される。指定された点の要素が無名または XBL で生成されたコンテンツ、例えばテキストボックスのスクロールバーである場合、最初の無名ではない祖先要素（例えばテキストボックス）が返されます。

{{cssxref("pointer-events")}} が `none` に設定されている要素は無視され、その下の要素が返されます。

このメソッドが他の文書（`<iframe>` のサブ文書など）で実行された場合、座標はメソッドが呼び出された文書からの相対座標となります。

指定した点が文書の可視領域外にある場合や、どちらかの座標が負の値である場合、結果は `null` となります。

要素内の特定の位置を見つける必要がある場合は、 {{domxref("Document.caretPositionFromPoint()")}} を使用してください。

## 構文

```js
elementFromPoint(x, y)
```

### 引数

- `x`
  - : 点の水平座標で、現在の{{Glossary("viewport", "ビューポート")}}の左端からの相対値です。
- `y`
  - : 点の垂直座標で、現在の{{Glossary("viewport", "ビューポート")}}の上端からの相対値です。

### 返値

指定された座標にある最も上の要素（{{domxref("Element")}} オブジェクト）です。

## 例

この例では、座標 `(2, 2)` の下にある段落要素の現在の色を設定するためのボタンを 2 つ作成しています。

### JavaScript

```js
function changeColor(newColor) {
  elem = document.elementFromPoint(2, 2);
  elem.style.color = newColor;
}
```

`changeColor()` メソッドは、指定した位置にある要素を取得し、その要素の現在の前景色の {{cssxref("color")}} プロパティを `newColor` 引数で指定した色に設定します。

### HTML

```html
<p id="para1">こちらがテキストです</p>
<button onclick="changeColor('blue');">青</button>
<button onclick="changeColor('red');">赤</button>
```

HTMLには、色を変更する段落と、色を青に変更するボタン、色を赤に変更するボタンの 2 つが用意されています。

### 結果

{{EmbedLiveSample('Examples', 400, 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.elementsFromPoint()")}}
