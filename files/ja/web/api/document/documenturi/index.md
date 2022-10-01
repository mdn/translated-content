---
title: Document.documentURI
slug: Web/API/Document/documentURI
---

{{ApiRef("DOM")}}

{{domxref("Document")}} インターフェイスの **`documentURI`** プロパティは、文書の位置を文字列で返します。

## 構文

```js
const uri = document.documentURI
```

## 例

### JavaScript

```js
document.getElementById("url").textContent = document.documentURI;
```

### HTML

```html
<p id="urlText">
  URL:<br/>
  <span id="url">URL goes here</span>
</p>
```

### 結果

{{EmbedLiveSample("Example", "100%", 100)}}

## 仕様書

| 仕様書                                                                                       | 状態                             | 備考 |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('DOM WHATWG', '#dom-document-documenturi','documentURI')}} | {{Spec2('DOM WHATWG')}} |      |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 同じ値を返す {{domxref("document.URL")}} プロパティ
