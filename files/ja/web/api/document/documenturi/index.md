---
title: "Document: documentURI プロパティ"
short-title: documentURI
slug: Web/API/Document/documentURI
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}

**`documentURI`** は {{domxref("Document")}} インターフェイスのプロパティで、文書の位置を文字列で返します。

## 値

文字列です。

## 例

### JavaScript

```js
document.getElementById("url").textContent = document.documentURI;
```

### HTML

```html
<p id="urlText">
  URL:<br />
  <span id="url">URL がここに入ります</span>
</p>
```

### 結果

{{EmbedLiveSample("Examples", "100%", 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 同じ値を返す {{domxref("document.URL")}} プロパティ
