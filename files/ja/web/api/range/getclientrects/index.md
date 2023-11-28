---
title: "Range: getClientRects() メソッド"
short-title: getClientRects()
slug: Web/API/Range/getClientRects
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.getClientRects()`** メソッドは、[範囲](/ja/docs/Web/API/Range)が占める画面の領域を表す {{ domxref("DOMRect") }} オブジェクトのリストを返します。これは、 {{ domxref("Element.getClientRects()") }} を呼び出した結果を集約して作成されます。

## 構文

```js-nolint
getClientRects()
```

### 引数

None.

### 返値

[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)な {{domxref("DOMRect")}} オブジェクトの並びです。

## 例

### 選択されたクライアント矩形のサイズのログ記録

#### HTML

```html
<div></div>
<pre id="output"></pre>
```

#### CSS

```css
div {
  height: 80px;
  width: 200px;
  background-color: blue;
}
```

#### JavaScript

```js
const range = document.createRange();
range.selectNode(document.querySelector("div"));
rectList = range.getClientRects();

const output = document.querySelector("#output");
for (const rect of rectList) {
  output.textContent = `${output.textContent}\n${rect.width}:${rect.height}`;
}
```

#### 結果

{{EmbedLiveSample("選択されたクライアント矩形のサイズのログ記録")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Range")}}
