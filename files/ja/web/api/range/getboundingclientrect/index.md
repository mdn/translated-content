---
title: "Range: getBoundingClientRect() メソッド"
short-title: getBoundingClientRect()
slug: Web/API/Range/getBoundingClientRect
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.getBoundingClientRect()`** メソッドは、範囲のコンテンツを囲む {{ domxref("DOMRect") }} オブジェクトを返します。これは、範囲内のすべての要素の外接長方形の和を囲む長方形です。

このメソッドは、テキストボックス内のカーソルまたは選択範囲のビューポート座標を決定するのに有益です。返値の詳細については {{domxref("Element.getBoundingClientRect()")}} を参照してください。

## 構文

```js-nolint
getBoundingClientRect()
```

### 引数

なし。

### 返値

範囲内のすべての要素の外接長方形の和を囲む {{domxref("DOMRect")}} オブジェクトです。

## 例

### HTML

```html
<div id="highlight"></div>
<p>
  この例では、範囲のコンテンツの後ろに「ハイライト」長方形を配置しています。
  範囲のコンテンツは<em>ここから始まり</em>、<em>ここで終わり</em>まで続きます。外接クライアント長方形は、範囲内で選択されたすべてのものを格納します。
</p>
```

### CSS

```css
#highlight {
  background: yellow;
  position: absolute;
  z-index: -1;
}

p {
  width: 200px;
}
```

### JavaScript

```js
const range = document.createRange();
range.setStartBefore(document.getElementsByTagName("em").item(0));
range.setEndAfter(document.getElementsByTagName("em").item(1));

const clientRect = range.getBoundingClientRect();
const highlight = document.getElementById("highlight");
highlight.style.left = `${clientRect.x}px`;
highlight.style.top = `${clientRect.y}px`;
highlight.style.width = `${clientRect.width}px`;
highlight.style.height = `${clientRect.height}px`;
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Range.getClientRects()")}} - 矩形以外の範囲（選択範囲が次の行に折り返される場合など）に対する、より細かい結果
- {{domxref("Element.getBoundingClientRect()")}}
- {{domxref("Document.caretPositionFromPoint()")}} - ビューポート座標から（ノード、オフセット）を取得
