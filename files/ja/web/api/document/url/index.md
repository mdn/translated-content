---
title: "Document: URL プロパティ"
short-title: URL
slug: Web/API/Document/URL
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`URL`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、文書の位置を文字列で返します。

## 値

この文書の URL が入った文字列です。

## 例

### JavaScript

```js
document.getElementById("url").textContent = document.URL;
```

### HTML

```html
<p id="urlText">
  URL:<br />
  <span id="url">URL がここに表示されます</span>
</p>
```

### 結果

{{EmbedLiveSample("Examples", "100%", 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 同じ値を返す {{domxref("document.documentURI")}} プロパティ
