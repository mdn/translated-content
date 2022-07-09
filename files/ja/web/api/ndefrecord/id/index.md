---
title: NDEFRecord.id
slug: Web/API/NDEFRecord/id
tags:
  - NDEF
  - NDEFRecord
  - リファレンス
  - ウェブ NFC
browser-compat: api.NDEFRecord.id
translation_of: Web/API/NDEFRecord/id
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

**`id`** は {{DOMxRef("NDEFRecord")}} インターフェイスのプロパティで、このレコードを識別するのに使用される絶対または相対 URL をレコード識別子として返します。

この識別子は、レコード識別子の一意性を強制する責任を負うレコードの生成者によって作成されま す。ウェブ NFC は NFC コンテンツに署名しないので、レコード利用者は識別子やレコードの他の部分の完全性や信憑性について、いかなる仮定もすべきではありません。

## 構文

```js
NDEFRecord.id
```

### 値

{{DOMxRef("USVString")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
