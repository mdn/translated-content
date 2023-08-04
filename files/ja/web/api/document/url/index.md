---
title: Document.URL
slug: Web/API/Document/URL
---

{{APIRef("DOM")}}

{{domxref("Document")}} インターフェイスの **`URL`** プロパティは読取専用で、文書の位置を文字列で返します。

## 構文

```js
const url = document.URL;
```

## 例

### JavaScript

```js
document.getElementById("url").textContent = document.URL;
```

### HTML

```html
<p id="urlText">
  URL:<br />
  <span id="url">URL goes here</span>
</p>
```

### 結果

{{EmbedLiveSample("Example", "100%", 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 同じ値を返す {{domxref("document.documentURI")}} プロパティ
