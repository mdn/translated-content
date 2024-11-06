---
title: "NDEFRecord: id プロパティ"
short-title: id
slug: Web/API/NDEFRecord/id
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

**`id`** は {{DOMxRef("NDEFRecord")}} インターフェイスのプロパティで、このレコードを識別するのに使用される絶対または相対 URL をレコード識別子として返します。

この識別子は、レコード識別子の一意性を強制する責任を負うレコードの生成者によって作成されま す。ウェブ NFC は NFC コンテンツに署名しないので、レコード利用者は識別子やレコードの他の部分の完全性や信憑性について、いかなる仮定もすべきではありません。

## 構文

```js-nolint
NDEFRecord.id
```

### 値

文字列です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
