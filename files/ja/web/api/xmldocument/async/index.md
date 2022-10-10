---
title: XMLDocument.async
slug: Web/API/XMLDocument/async
original_slug: Web/API/Document/async
---

{{APIRef("DOM")}}{{Non-standard_header}}{{Deprecated_header}}

`document.async` は、 {{DOMxRef("XMLDocument.load()")}} の呼び出しを同期で行うか、または非同期で行うかの指示を真偽値で設定します。 `true` が初期値であり、これは文書を非同期的に読み込むよう要求するものです。

(1.4 アルファから、同期的に文書を読み込めるようになりました。)

## 例

```js
function loadXMLData(e) {
  alert(new XMLSerializer().serializeToString(e.target)); // querydata.xml の内容を文字列として取得
}

var xmlDoc = document.implementation.createDocument("", "test", null);

xmlDoc.async = false;
xmlDoc.onload = loadXMLData;
xmlDoc.load('querydata.xml');
```

## ブラウザーの互換性

{{Compat("api.XMLDocument.async")}}

## 関連情報

- [XML in Mozilla](/ja/docs/XML_in_Mozilla)
- {{DOMxRef("XMLDocument.load()")}}
