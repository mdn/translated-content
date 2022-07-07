---
title: NDEFRecord.encoding
slug: Web/API/NDEFRecord/encoding
tags:
  - Encoding
  - NDEF
  - リファレンス
  - ウェブ NFC
browser-compat: api.NDEFRecord.encoding
translation_of: Web/API/NDEFRecord/encoding
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

**`encoding`** は {{DOMxRef("NDEFRecord")}} インターフェイスのプロパティで、テキストのペイロードのエンコーディングを返します。それ以外の場合は `null` です。

## 構文

```js
NDEFRecord.encoding
```

### 値

{{DOMxRef("USVString")}} で、 `"utf-8"`, `"utf-16"`, `"utf-16le"`, `"utf-16be"` のうちの何れかです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
